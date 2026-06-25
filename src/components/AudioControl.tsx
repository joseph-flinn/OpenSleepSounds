import React from 'react';
import { View, Button, Text, StyleSheet, ViewStyle } from 'react-native';
import { useAudioPlayer, useAudioPlayerStatus, setAudioModeAsync } from 'expo-audio';
import { useThemedStyles } from '../hooks/useThemedStyles';
import { PlayIcon, PauseIcon } from './icons';

//const AUDIO_FILE = require('../../assets/audio/smooth-brown-noise-10s.wav');
const AUDIO_FILE = require('../../assets/audio/pink-noise-10s.wav');

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
    iconButton: {
      width: '25%',
      alignItems: 'center',
    } as ViewStyle,
  });

/**
 * AudioControl - Displays audio playback controls
 * Centered using flexbox centering in App.tsx container
 */
export const AudioControl = () => {
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
          title="Press"
          onPress={handleToggle}
          accessibilityLabel={status.playing ? 'Pause track' : 'Play track'}
          accessibilityRole="button"
          accessibilityState={{ checked: status.playing }}
          accessibilityValue={{ text: status.playing ? 'Playing' : 'Paused' }}
        >
          <View style={styles.iconButton}>
            {status.playing ? <PauseIcon /> : <PlayIcon />}
          </View>
        </Button>
      </View>
    </View>
  );
};
