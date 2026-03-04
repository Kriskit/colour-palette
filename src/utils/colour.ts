/** Wrap hue into 0–360 */
export const wrapHue = (h: number): number => ((h % 360) + 360) % 360;

/** Clamp value between min and max */
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export interface HSL {
  h: number; // 0-360
  s: number; // 0-100
  l: number; // 0-100
}

export interface Swatch {
  hsl: HSL;
  hex: string;
  name: string;
}

export interface Palette {
  label: string;
  swatches: Swatch[];
}

/** Convert HSL to hex string */
export function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const colour = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * colour)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/** Vary saturation and lightness slightly for visual richness */
function varyHSL(base: HSL, index: number, total: number): HSL {
  if (total <= 1) return base;
  const spread = 12;
  const offset = ((index - (total - 1) / 2) / ((total - 1) / 2)) * spread;
  return {
    h: base.h,
    s: clamp(base.s + offset * 0.5, 10, 95),
    l: clamp(base.l + offset, 15, 85),
  };
}

/** Generate swatches from an array of hues, padding to 5 with S/L variations */
function makePalette(label: string, hues: number[], base: HSL): Palette {
  const swatches: Swatch[] = [];
  if (hues.length >= 5) {
    // Use first 5 hues directly with slight variation
    for (let i = 0; i < 5; i++) {
      const hsl = varyHSL({ h: wrapHue(hues[i]), s: base.s, l: base.l }, i, 5);
      swatches.push({ hsl, hex: hslToHex(hsl.h, hsl.s, hsl.l), name: '' });
    }
  } else {
    // Fewer than 5 hues — distribute variations
    const perHue = Math.ceil(5 / hues.length);
    let idx = 0;
    for (const rawH of hues) {
      const h = wrapHue(rawH);
      for (let v = 0; v < perHue && idx < 5; v++) {
        const hsl = varyHSL({ h, s: base.s, l: base.l }, idx, 5);
        swatches.push({ hsl, hex: hslToHex(hsl.h, hsl.s, hsl.l), name: '' });
        idx++;
      }
    }
  }
  return { label, swatches };
}

/** Generate all 5 harmony palettes from a base HSL colour */
export function generatePalettes(base: HSL): Palette[] {
  const H = base.h;
  return [
    makePalette('Complementary', [H, H, H + 180, H + 180, H + 180], base),
    makePalette('Analogous', [H - 30, H - 15, H, H + 15, H + 30], base),
    makePalette('Triadic', [H, H, H + 120, H + 240, H + 240], base),
    makePalette('Split-Complementary', [H, H, H + 150, H + 210, H + 210], base),
    makePalette('Tetradic', [H, H + 60, H + 180, H + 240, H + 240], base),
  ];
}

/** Random base colour with good saturation/lightness */
export function randomBaseHSL(): HSL {
  return {
    h: Math.floor(Math.random() * 360),
    s: 55 + Math.floor(Math.random() * 30), // 55-85
    l: 45 + Math.floor(Math.random() * 20), // 45-65
  };
}

/** Export palettes as CSS custom properties */
export function exportAsCSS(palettes: Palette[]): string {
  const lines = [':root {'];
  for (const p of palettes) {
    const prefix = p.label.toLowerCase().replace(/[^a-z]+/g, '-');
    p.swatches.forEach((sw, i) => {
      lines.push(`  --${prefix}-${i + 1}: ${sw.hex};`);
    });
  }
  lines.push('}');
  return lines.join('\n');
}
