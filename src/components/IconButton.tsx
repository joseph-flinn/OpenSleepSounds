import React from 'react';
import {
  Pressable,
  StyleSheet,
  ViewStyle,
  PressableStateCallbackType,
} from 'react-native';

type IconButtonProps = {
  onPress: () => void;
  icon: React.ReactNode;
  size?: number;
  hitSlop?: number;
  disabled?: boolean;
  style?: ViewStyle;
  activeOpacity?: number;
};

export const IconButton = ({
  onPress,
  icon,
  size = 44,
  hitSlop = 8,
  disabled = false,
  style,
  activeOpacity = 0.5,
}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      hitSlop={hitSlop}
      style={({ pressed }: PressableStateCallbackType) => [
        styles.button,
        { width: size, height: size, opacity: pressed ? activeOpacity : 1 },
        disabled && styles.disabled,
        style,
      ]}
      accessibilityRole="button"
    >
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.3,
  },
});
