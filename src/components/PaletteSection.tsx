import type { Palette } from '../utils/colour';
import SwatchCard from './SwatchCard';
import styles from './PaletteSection.module.css';

interface Props {
  palette: Palette;
  onCopyHex: (hex: string) => void;
}

export default function PaletteSection({ palette, onCopyHex }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{palette.label}</h2>
      <div className={styles.grid}>
        {palette.swatches.map((swatch, i) => (
          <SwatchCard
            key={`${swatch.hex}-${i}`}
            swatch={swatch}
            onClick={() => onCopyHex(swatch.hex)}
          />
        ))}
      </div>
    </section>
  );
}
