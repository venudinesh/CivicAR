import { ViroARTrackingTargets } from '@viro-community/react-viro';

ViroARTrackingTargets.createTargets({
  sectorBoard: {
    source: require('./assets/sector_sign.jpg'),
    orientation: 'Up',
    physicalWidth: 0.3,
  },
});