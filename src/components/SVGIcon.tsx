import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

export type SVGIconProps = {
  source: React.ReactNode;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

export const SVGIcon = ({ source, size = 24, color, style }: SVGIconProps) => {
  const containerStyle = [
    styles.container,
    { width: size, height: size },
    style,
  ];

  if (!color) {
    return (
      <View style={containerStyle}>
        {source}
      </View>
    );
  }

  const processSVGNode = (node: React.ReactNode): React.ReactNode => {
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<any>;
      const props = element.props;
      
      const newProps: Record<string, any> = { ...props };
      
      if (props && props.style) {
        if (Array.isArray(props.style)) {
          newProps.style = [...props.style, { fill: color }];
        } else if (typeof props.style === 'object') {
          newProps.style = [props.style, { fill: color }];
        } else {
          newProps.style = props.style;
        }
      } else {
        newProps.style = { fill: color };
      }
      
      return React.cloneElement(element, newProps);
    }
    return node;
  };

  const wrappedSource = React.isValidElement(source)
    ? processSVGNode(source)
    : source;

  return (
    <View style={containerStyle}>
      {wrappedSource}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
