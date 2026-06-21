import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AudioControl } from './src/components/AudioControl';
import { ThemeProvider, useTheme } from './src/ThemeContext';
import { useThemedStyles } from './src/hooks/useThemedStyles';

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
  });

function AppContent() {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      <AudioControl />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
