import type { Swatch } from '../utils/colour';
import styles from './SwatchCard.module.css';

interface Props {
  swatch: Swatch;
  onClick: () => void;
}

/** Determine if text should be light or dark based on background lightness */
function textColour(l: number): string {
  return l > 55 ? '#1a1a24' : '#e8e8f0';
}

export default function SwatchCard({ swatch, onClick }: Props) {
  const fg = textColour(swatch.hsl.l);

  return (
    <button
      className={styles.card}
      onClick={onClick}
      title={`Click to copy ${swatch.hex}`}
      style={{ '--swatch-bg': swatch.hex, '--swatch-fg': fg } as React.CSSProperties}
    >
      <div className={styles.colour} />
      <div className={styles.info}>
        <span className={styles.hex}>{swatch.hex}</span>
        <span className={styles.name}>{swatch.name}</span>
      </div>
    </button>
  );
}
