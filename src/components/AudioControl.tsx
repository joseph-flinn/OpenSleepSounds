import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useAudioPlayer, useAudioPlayerStatus, setAudioModeAsync } from 'expo-audio';

const AUDIO_FILE = require('../../assets/audio/river_trimmed.aac');

/**
 * AudioControl - Displays audio playback controls
 * Centered using flexbox centering in App.tsx container
 */
export const AudioControl = () => {
  const player = useAudioPlayer(AUDIO_FILE);
  const status = useAudioPlayerStatus(player);

  React.useEffect(() => {
    const configureAudioSession = async () => {
      try {
        await setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: false,
        });
      } catch (error) {
        console.error('Error configuring audio session:', error);
      }
    };

    configureAudioSession();
  }, []);

  const handleToggle = () => {
    if (status?.isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {status?.isPlaying ? 'Playing' : 'Paused'}
      </Text>
      <View style={styles.buttons}>
        <Button
          title={status?.isPlaying ? 'Pause' : 'Play'}
          onPress={handleToggle}
          accessibilityLabel={status?.isPlaying ? 'Pause current track' : 'Play current track'}
          accessibilityRole="button"
          accessibilityState={{ checked: status?.isPlaying }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttons: {
    gap: 10,
  },
});
