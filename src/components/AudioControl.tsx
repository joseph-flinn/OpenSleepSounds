import React from 'react';
import { View, Pressable, Button, Text, StyleSheet, ViewStyle } from 'react-native';
import { useAudioPlayer, useAudioPlayerStatus, setAudioModeAsync } from 'expo-audio';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useThemedStyles } from '../hooks/useThemedStyles';
import { useTheme } from '../ThemeContext';
import { IconButton } from './IconButton';

//const AUDIO_FILE = require('../../assets/audio/smooth-brown-noise-10s.wav');
const AUDIO_FILE = require('../../assets/audio/pink-noise-10s.wav');

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      width: '95%',
      height: '95%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.card,
    },
    buttons: {
      gap: 10,
    }
  });

/**
 * AudioControl - Displays audio playback controls
 * Centered using flexbox centering in App.tsx container
 */
export const AudioControl = () => {
  const { theme } = useTheme(); // Only to set icon color
  const styles = useThemedStyles(createStyles);
  const insets = useSafeAreaInsets();
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
      <View
        style={{
          position: 'absolute',
          top: insets.top,
          left: 0,
          right: 0,
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Text
          style={{
            color: theme.colors.text,
            fontSize: 24,
            fontWeight: 'bold',
          }}
        >
          OpenSleepSounds
        </Text>
      </View>
      <View style={styles.buttons}>
        <IconButton
          onPress={handleToggle}
          size={128}
          icon={
            <Ionicons 
              name={status.playing ? "pause-circle-outline" : "play-circle-outline"} 
              size={128} 
              color={theme.colors.text}
            />
          }
        />
      </View>
    </View>
  );
};
