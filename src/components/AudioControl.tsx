import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useAudioPlayer, useAudioPlayerStatus, setAudioModeAsync } from 'expo-audio';
//import { useTheme } from './ThemeContext';
import { useThemedStyles } from '../hooks/useThemedStyles';

//const AUDIO_FILE = require('../../assets/audio/river_trimmed.aac');
const AUDIO_FILE = require('../../assets/audio/smooth-brown-noise-10s.wav');

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: theme.colors.card,
    },
    status: {
      fontSize: 18,
      color: theme.colors.text,
      marginBottom: 20,
    },
    buttons: {
      gap: 10,
    },
  });

/**
 * AudioControl - Displays audio playback controls
 * Centered using flexbox centering in App.tsx container
 */
export const AudioControl = () => {
  //const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);
  const player = useAudioPlayer(AUDIO_FILE);
  const status = useAudioPlayerStatus(player);

  React.useEffect(() => {
    player.loop = true;
  }, [player]);

  React.useEffect(() => {
    const configureAudioSession = async () => {
      try {
        await setAudioModeAsync({
          playsInSilentMode: true,
          shouldPlayInBackground: true,
          interruptionMode: 'doNotMix',
        });
      } catch (error) {
        console.error('Error configuring audio session:', error);
      }
    };

    configureAudioSession();
  }, []);

  const handlePlay = () => {
    player.seekTo(0);
    player.setActiveForLockScreen(true, {
      title: "Creek",
      artist: "JF",
      albumTitle: "Nature"
    });
    player.play();
  };

  const handleToggle = () => {
    if (status.playing) {
      player.pause();
    } else {
      handlePlay();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {status.playing ? 'Playing' : 'Paused'}
      </Text>
      <View style={styles.buttons}>
        <Button
          title={status.playing ? 'Pause' : 'Play'}
          onPress={handleToggle}
          accessibilityLabel={status.playing ? 'Pause current track' : 'Play current track'}
          accessibilityRole="button"
          accessibilityState={{ checked: status.playing }}
        />
      </View>
    </View>
  );
};
