import type { Graphics as PixiGraphics } from "pixi.js";
import { COLORS } from "./palette";
import { isoBox, groundShadow } from "./isoUtils";

export function drawBookshelf(g: PixiGraphics, x: number, y: number): void {
  isoBox(g, x, y - 34, 34, 17, 52, 0x8a6e4c, 0x6e583c, 0x5e482c);
  const bookColors = [0xc04040, 0x4070c0, 0x40a040, 0xc0a040, 0x9050c0, 0xc07040, 0x4090c0];
  for (let s = 0; s < 3; s++) {
    const sy = y - 78 + s * 15;
    g.rect(x - 15, sy, 30, 1);
    g.fill({ color: 0xa48464 });
    bookColors.forEach((bc, b) => {
      const bw = 3 + (b % 2);
      g.rect(x - 13 + b * 5, sy - 11, bw, 11);
      g.fill({ color: bc });
      g.rect(x - 13 + b * 5, sy - 11, bw, 1);
      g.fill({ color: 0xffffff, alpha: 0.06 });
    });
  }
}

export function drawPlant(g: PixiGraphics, x: number, y: number): void {
  groundShadow(g, x, y + 6, 16, 7);
  isoBox(g, x, y, 20, 10, 18, 0xc8a878, 0xa4845c, 0x8e6e48);
  isoBox(g, x, y - 18, 22, 11, 3, 0xd8b888, 0xb4946c, 0x9e7e58);
  g.ellipse(x, y - 20, 8, 4);
  g.fill({ color: 0x4e3e2e });
  const greens = [0x2e6e2e, 0x3e8e3e, 0x5eae5e, 0x4e9e4e, 0x6ebe6e, 0x3e7e3e, 0x5ebe5e];
  const leaves: [number, number, number][] = [
    [0,-32,10],[-10,-24,8],[10,-28,8],[-6,-38,7],[7,-36,7],
    [0,-44,6],[-9,-30,7],[10,-34,6],[-4,-40,6],[5,-38,6],
    [-11,-26,6],[12,-30,6],
  ];
  leaves.forEach(([lx, ly, lr], i) => {
    g.circle(x + lx, y + ly, lr);
    g.fill({ color: greens[i % greens.length] });
  });
  g.circle(x - 3, y - 36, 5);
  g.fill({ color: 0x8ede8e, alpha: 0.12 });
}

export function drawClock(g: PixiGraphics, x: number, y: number): void {
  g.circle(x, y, 12);
  g.fill({ color: 0x8a6e4c });
  g.circle(x, y, 10);
  g.fill({ color: 0xf0e8dc });
  for (let h = 0; h < 12; h++) {
    const a = (h * Math.PI) / 6;
    g.circle(x + Math.sin(a) * 8, y - Math.cos(a) * 8, 1);
    g.fill({ color: 0x8a7a6a });
  }
  g.moveTo(x, y);
  g.lineTo(x, y - 7);
  g.stroke({ color: 0x2a2a32, width: 1.5 });
  g.moveTo(x, y);
  g.lineTo(x + 5, y - 2);
  g.stroke({ color: 0x2a2a32, width: 1.2 });
  g.circle(x, y, 1);
  g.fill({ color: 0x2a2a32 });
}

export function drawWhiteboard(g: PixiGraphics, x: number, y: number): void {
  g.rect(x - 26, y, 52, 34);
  g.fill({ color: 0xc4c4cc });
  g.rect(x - 24, y + 2, 48, 30);
  g.fill({ color: 0xf8f8f8 });
  g.moveTo(x - 18, y + 8);
  g.lineTo(x - 8, y + 14);
  g.lineTo(x + 2, y + 8);
  g.stroke({ color: 0x4a7ab8, alpha: 0.4, width: 1.5 });
  g.circle(x + 12, y + 16, 5);
  g.stroke({ color: 0xbc5a5a, alpha: 0.35, width: 1 });
  g.rect(x - 18, y + 20, 20, 1);
  g.fill({ color: 0x3a3a4a, alpha: 0.16 });
  g.rect(x - 18, y + 23, 14, 1);
  g.fill({ color: 0x3a3a4a, alpha: 0.12 });
  g.rect(x - 20, y + 32, 40, 3);
  g.fill({ color: 0xaaaaaa });
  g.rect(x - 16, y + 31, 8, 2);
  g.fill({ color: 0xc04040 });
  g.rect(x - 6, y + 31, 8, 2);
  g.fill({ color: 0x4070c0 });
}

export function drawCoffeeMachine(g: PixiGraphics, x: number, y: number): void {
  isoBox(g, x, y, 20, 10, 32, 0x3e3e46, 0x2e2e36, 0x1e1e26);
  g.rect(x - 7, y - 26, 14, 7);
  g.fill({ color: 0x1e3e1e });
  g.rect(x - 6, y - 25, 12, 5);
  g.fill({ color: 0x4eff4e, alpha: 0.16 });
  g.rect(x - 3, y - 8, 6, 7);
  g.fill({ color: 0xece4d4 });
  g.rect(x - 3, y - 8, 6, 1);
  g.fill({ color: 0xf4ece0 });
}

export function drawFilingCabinet(g: PixiGraphics, x: number, y: number): void {
  isoBox(g, x, y, 20, 10, 42, 0x6e6e7e, 0x5e5e6e, 0x4e4e5e);
  for (let d = 0; d < 3; d++) {
    g.rect(x - 8, y - 38 + d * 12, 16, 10);
    g.fill({ color: 0x4e4e5e });
    g.rect(x - 2, y - 36 + d * 12, 4, 1);
    g.fill({ color: 0x7e7e8e });
  }
}

export function drawFloorLamp(g: PixiGraphics, x: number, y: number): void {
  g.ellipse(x, y + 6, 32, 16);
  g.fill({ color: COLORS.lampGlow, alpha: 0.04 });
  g.ellipse(x, y + 6, 48, 24);
  g.fill({ color: COLORS.lampGlow, alpha: 0.02 });
  g.rect(x - 1, y - 60, 2, 56);
  g.fill({ color: COLORS.lampPole });
  isoBox(g, x, y - 64, 20, 10, 14, COLORS.lampShade, COLORS.lampShadeDark, COLORS.lampShadeRight);
  g.circle(x, y - 52, 10);
  g.fill({ color: 0xffcc66, alpha: 0.1 });
  isoBox(g, x, y - 2, 16, 8, 5, COLORS.lampPole + 0x101010, COLORS.lampPole, COLORS.lampPole - 0x101010);
}

export function drawWindow(g: PixiGraphics, x: number, y: number): void {
  g.rect(x, y, 20, 34);
  g.fill({ color: COLORS.windowFrame });
  g.rect(x + 2, y + 2, 16, 30);
  g.fill({ color: COLORS.windowGlass });
  g.rect(x + 2, y + 2, 16, 12);
  g.fill({ color: COLORS.windowReflect, alpha: 0.12 });
  g.rect(x + 9, y + 2, 2, 30);
  g.fill({ color: COLORS.windowFrame });
  g.rect(x, y, 20, 2);
  g.fill({ color: COLORS.windowFrame });
  g.rect(x, y + 32, 20, 2);
  g.fill({ color: COLORS.windowFrame });
}

export function drawCouch(g: PixiGraphics, x: number, y: number): void {
  groundShadow(g, x, y + 8, 24, 10);
  isoBox(g, x, y, 48, 24, 14, COLORS.couchFabric, COLORS.couchDark, COLORS.couchDark - 0x101010);
  isoBox(g, x - 10, y - 10, 14, 7, 22, COLORS.couchLight, COLORS.couchFabric, COLORS.couchDark);
  isoBox(g, x - 2, y - 2, 18, 9, 8, COLORS.couchLight, COLORS.couchFabric, COLORS.couchDark);
  isoBox(g, x + 12, y - 6, 18, 9, 8, COLORS.couchLight, COLORS.couchFabric, COLORS.couchDark);
  isoBox(g, x + 18, y - 12, 8, 4, 6, COLORS.couchPillow, COLORS.couchPillow - 0x101010, COLORS.couchPillow - 0x202020);
}

export function drawSideTable(g: PixiGraphics, x: number, y: number): void {
  groundShadow(g, x, y + 4, 10, 5);
  isoBox(g, x, y, 18, 9, 12, COLORS.sideTable, COLORS.sideTable - 0x181810, COLORS.sideTable - 0x303020);
  g.rect(x - 5, y - 14, 10, 7);
  g.fill({ color: 0xc04040 });
  g.rect(x - 4, y - 13, 8, 1);
  g.fill({ color: 0xffffff, alpha: 0.12 });
}
