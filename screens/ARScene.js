import React from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroText
} from '@viro-community/react-viro';
import '../ImageTargets';

export default function ARScene({ userLat, userLng }) {
  const nearProject = Math.abs(userLat - 12.9716) < 0.002;

  return (
    <ViroARScene>
      {nearProject && (
        <ViroText
          text={'Sector 9 Road\n₹3.2 Cr | PWD'}
          position={[0, 0, -1]}
          style={{ fontSize: 30 }}
        />
      )}
      <ViroARImageMarker target='sectorBoard'>
        <ViroText
          text={'Sector Board\n₹3.2 Cr'}
          position={[0, 0, 0]}
          rotation={[-90, 0, 0]}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
}