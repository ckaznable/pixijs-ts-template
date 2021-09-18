import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  backgroundColor : 0x000000,
  height: 800,
  width: 600
});

document.body.appendChild(app.view);
