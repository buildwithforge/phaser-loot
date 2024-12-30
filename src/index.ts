import Phaser from 'phaser';

import * as scenes from './scenes';

new Phaser.Game({
  width: 800,
  height: 600,
  title: 'Phaser Loot',
  scene: [
    scenes.Boot,
    ...Object.values(scenes).filter((scene) => scene !== scenes.Boot),
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        x: 0,
        y: 300,
      },
      debug: import.meta.env.DEV,
    },
  },
  disableContextMenu: import.meta.env.PROD,
  backgroundColor: '#fff',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
