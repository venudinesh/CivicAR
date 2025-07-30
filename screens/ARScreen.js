import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import { useCurrentLocation } from '../hooks/useLocation';
import ARScene from './ARScene';

export default function ARScreen() {
  const location = useCurrentLocation();

  if (!location) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
        <Text>Getting GPS...</Text>
      </View>
    );
  }

  return (
    <ViroARSceneNavigator
      initialScene={{ scene: () => <ARScene userLat={location.latitude} userLng={location.longitude} /> }}
      autofocus={true}
      style={{ flex: 1 }}
    />
  );
}