/**
 * Curated colour name lookup — ~150 common colours.
 * Returns the nearest named colour for any hex value.
 */

const COLOURS: [string, string][] = [
  ['#000000', 'Black'], ['#111111', 'Nero'], ['#1a1a1a', 'Charcoal'], ['#2c2c2c', 'Jet'],
  ['#333333', 'Night Rider'], ['#444444', 'Tundora'], ['#555555', 'Fuscous Grey'],
  ['#666666', 'Dove Grey'], ['#777777', 'Boulder'], ['#888888', 'Grey'],
  ['#999999', 'Dusty Grey'], ['#aaaaaa', 'Silver Chalice'], ['#bbbbbb', 'Silver'],
  ['#cccccc', 'Pale Silver'], ['#dddddd', 'Alto'], ['#eeeeee', 'Gallery'],
  ['#ffffff', 'White'],
  ['#ff0000', 'Red'], ['#ff4444', 'Coral Red'], ['#ff6b6b', 'Bittersweet'],
  ['#ff8888', 'Salmon'], ['#cc0000', 'Guardsman Red'], ['#990000', 'Dark Red'],
  ['#660000', 'Rosewood'], ['#ff3300', 'Red Orange'], ['#ff6600', 'Blaze Orange'],
  ['#ff9900', 'Orange Peel'], ['#ffcc00', 'Tangerine Yellow'],
  ['#ffff00', 'Yellow'], ['#ffff66', 'Laser Lemon'], ['#cccc00', 'La Rioja'],
  ['#999900', 'Olive'], ['#666600', 'Dark Olive'],
  ['#00ff00', 'Green'], ['#00cc00', 'Islamic Green'], ['#009900', 'Green Heart'],
  ['#006600', 'Dark Green'], ['#003300', 'Deep Green'],
  ['#33ff33', 'Screaming Green'], ['#66ff66', 'Mint Green'],
  ['#99ff99', 'Light Green'], ['#ccffcc', 'Tea Green'],
  ['#00ff66', 'Spring Green'], ['#00ff99', 'Medium Spring Green'],
  ['#00ffcc', 'Caribbean Green'], ['#00ffff', 'Cyan'], ['#66ffff', 'Electric Blue'],
  ['#99ffff', 'Pale Cyan'], ['#ccffff', 'Light Cyan'],
  ['#00cccc', 'Robin Egg Blue'], ['#009999', 'Persian Green'],
  ['#006666', 'Teal'], ['#003333', 'Deep Teal'],
  ['#0000ff', 'Blue'], ['#0000cc', 'Medium Blue'], ['#000099', 'Dark Blue'],
  ['#000066', 'Navy'], ['#000033', 'Midnight'],
  ['#3333ff', 'Neon Blue'], ['#6666ff', 'Cornflower Blue'],
  ['#9999ff', 'Perano'], ['#ccccff', 'Lavender'],
  ['#0033ff', 'Blue Ribbon'], ['#0066ff', 'Azure Radiance'],
  ['#0099ff', 'Dodger Blue'], ['#00ccff', 'Vivid Sky Blue'],
  ['#3399ff', 'Picton Blue'], ['#66ccff', 'Malibu'],
  ['#339af0', 'Blue Jeans'], ['#1c7ed6', 'Denim'],
  ['#ff00ff', 'Magenta'], ['#ff33ff', 'Fuchsia Pink'],
  ['#ff66ff', 'Pink Flamingo'], ['#ff99ff', 'Lavender Rose'],
  ['#ffccff', 'Classic Rose'], ['#cc00cc', 'Deep Magenta'],
  ['#990099', 'Purple'], ['#660066', 'Palatinate Purple'],
  ['#ff0066', 'Rose'], ['#ff0099', 'Magenta Rose'],
  ['#ff00cc', 'Hollywood Cerise'], ['#ff3399', 'Wild Strawberry'],
  ['#ff6699', 'Hot Pink'], ['#ff99cc', 'Carnation Pink'],
  ['#ffccee', 'Pig Pink'],
  ['#cc0066', 'Lipstick'], ['#990066', 'Flirt'],
  ['#9900ff', 'Electric Violet'], ['#9933ff', 'Blue Violet'],
  ['#9966ff', 'Medium Purple'], ['#9999ff', 'Perano Blue'],
  ['#6600ff', 'Electric Indigo'], ['#6633ff', 'Purple Heart'],
  ['#6600cc', 'Indigo'], ['#330099', 'Deep Indigo'],
  ['#ff9933', 'Neon Carrot'], ['#ff6633', 'Outrageous Orange'],
  ['#ff3333', 'Red Orange Juice'], ['#e74c3c', 'Alizarin'],
  ['#e67e22', 'Carrot'], ['#f39c12', 'Sun Flower'],
  ['#f1c40f', 'Buttercup'], ['#2ecc71', 'Shamrock'],
  ['#27ae60', 'Nephritis'], ['#1abc9c', 'Mountain Meadow'],
  ['#16a085', 'Jungle Green'], ['#3498db', 'Curious Blue'],
  ['#2980b9', 'Boston Blue'], ['#8e44ad', 'Plum'],
  ['#9b59b6', 'Wisteria'], ['#34495e', 'Pickled Bluewood'],
  ['#2c3e50', 'Blue Whale'], ['#95a5a6', 'Oslo Grey'],
  ['#7f8c8d', 'Gunsmoke'], ['#ecf0f1', 'Porcelain'],
  ['#bdc3c7', 'Silver Sand'], ['#d35400', 'Tenne'],
  ['#c0392b', 'Thunderbird'], ['#f0e68c', 'Khaki'],
  ['#daa520', 'Goldenrod'], ['#b8860b', 'Dark Goldenrod'],
  ['#8b4513', 'Saddle Brown'], ['#a0522d', 'Sienna'],
  ['#cd853f', 'Peru'], ['#d2b48c', 'Tan'],
  ['#f5deb3', 'Wheat'], ['#ffe4c4', 'Bisque'],
  ['#ffdead', 'Navajo White'], ['#ffefd5', 'Papaya Whip'],
  ['#fff8dc', 'Cornsilk'], ['#fffff0', 'Ivory'],
  ['#fdf5e6', 'Old Lace'], ['#faf0e6', 'Linen'],
  ['#ffe4e1', 'Misty Rose'], ['#fff0f5', 'Lavender Blush'],
  ['#f5f5dc', 'Beige'], ['#f5f5f5', 'Wild Sand'],
  ['#e0e0e0', 'Gainsboro'], ['#c8a2c8', 'Lilac'],
  ['#b0e0e6', 'Powder Blue'], ['#add8e6', 'Light Blue'],
  ['#87ceeb', 'Sky Blue'], ['#87cefa', 'Light Sky Blue'],
  ['#4682b4', 'Steel Blue'], ['#5f9ea0', 'Cadet Blue'],
  ['#708090', 'Slate Grey'], ['#778899', 'Light Slate Grey'],
  ['#191970', 'Midnight Blue'], ['#2f4f4f', 'Dark Slate Grey'],
  ['#556b2f', 'Dark Olive Green'], ['#6b8e23', 'Olive Drab'],
  ['#808000', 'Olive Yellow'], ['#9acd32', 'Yellow Green'],
  ['#adff2f', 'Green Yellow'], ['#7fff00', 'Chartreuse'],
  ['#7cfc00', 'Lawn Green'], ['#00fa9a', 'Medium Spring'],
  ['#48d1cc', 'Medium Turquoise'], ['#40e0d0', 'Turquoise'],
  ['#20b2aa', 'Light Sea Green'], ['#008b8b', 'Dark Cyan'],
  ['#008080', 'Teal Blue'], ['#4169e1', 'Royal Blue'],
  ['#6a5acd', 'Slate Blue'], ['#7b68ee', 'Medium Slate Blue'],
  ['#ba55d3', 'Medium Orchid'], ['#da70d6', 'Orchid'],
  ['#ee82ee', 'Violet'], ['#dda0dd', 'Thistle'],
  ['#d8bfd8', 'Light Thistle'], ['#ff69b4', 'Hot Pink Bright'],
  ['#ffb6c1', 'Light Pink'], ['#ffc0cb', 'Pink'],
  ['#db7093', 'Pale Violet Red'], ['#c71585', 'Medium Violet Red'],
  ['#ff1493', 'Deep Pink'], ['#dc143c', 'Crimson'],
  ['#b22222', 'Firebrick'], ['#800000', 'Maroon'],
  ['#800080', 'Dark Purple'], ['#4b0082', 'Indigo Deep'],
  ['#483d8b', 'Dark Slate Blue'], ['#2e8b57', 'Sea Green'],
  ['#3cb371', 'Medium Sea Green'], ['#90ee90', 'Pale Green'],
  ['#98fb98', 'Mint Cream Green'], ['#f0fff0', 'Honeydew'],
  ['#f0ffff', 'Azure'], ['#f0f8ff', 'Alice Blue'],
  ['#e6e6fa', 'Lavender Mist'], ['#fff5ee', 'Seashell'],
  ['#fffaf0', 'Floral White'], ['#fffacd', 'Lemon Chiffon'],
];

/** Parse hex to [r, g, b] */
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

/** Euclidean distance in RGB space */
function distance(a: [number, number, number], b: [number, number, number]): number {
  return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
}

// Pre-parse the colour list
const PARSED = COLOURS.map(([hex, name]) => ({ rgb: hexToRgb(hex), name }));

/** Find the nearest named colour for a given hex value */
export function getColourName(hex: string): string {
  const target = hexToRgb(hex);
  let best = PARSED[0];
  let bestDist = Infinity;
  for (const entry of PARSED) {
    const d = distance(target, entry.rgb);
    if (d < bestDist) {
      bestDist = d;
      best = entry;
    }
  }
  return best.name;
}
