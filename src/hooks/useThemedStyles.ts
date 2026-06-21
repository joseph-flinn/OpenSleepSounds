// useThemedStyles.js
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

export function useThemedStyles(styleFn) {
  const { theme } = useTheme();
  return useMemo(() => StyleSheet.create(styleFn(theme)), [theme, styleFn]);
}
