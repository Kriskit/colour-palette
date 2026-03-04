import { useState, useCallback } from 'react';
import {
  generatePalettes,
  randomBaseHSL,
  exportAsCSS,
  type Palette,
  type HSL,
} from './utils/colour';
import { getColourName } from './utils/colourNames';
import PaletteSection from './components/PaletteSection';
import Toast from './components/Toast';
import styles from './App.module.css';

function nameSwatches(palettes: Palette[]): Palette[] {
  return palettes.map((p) => ({
    ...p,
    swatches: p.swatches.map((sw) => ({
      ...sw,
      name: getColourName(sw.hex),
    })),
  }));
}

export default function App() {
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [baseColour, setBaseColour] = useState<HSL | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  }, []);

  const handleGenerate = () => {
    const base = randomBaseHSL();
    setBaseColour(base);
    const raw = generatePalettes(base);
    setPalettes(nameSwatches(raw));
  };

  const handleCopyHex = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      showToast(`Copied ${hex}`);
    } catch {
      showToast('Copy failed — try again');
    }
  };

  const handleExportCSS = async () => {
    if (!palettes.length) return;
    const css = exportAsCSS(palettes);
    try {
      await navigator.clipboard.writeText(css);
      showToast('CSS custom properties copied!');
    } catch {
      showToast('Copy failed — try again');
    }
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <h1 className={styles.title}>
              <span className={styles.titleIcon}>◆</span> Colour Palette Generator
            </h1>
            <p className={styles.subtitle}>
              Explore colour harmonies — click any swatch to copy its hex value
            </p>
          </div>
          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={handleGenerate}>
              ✦ Generate
            </button>
            {palettes.length > 0 && (
              <button className={styles.btnSecondary} onClick={handleExportCSS}>
                ⬡ Export CSS
              </button>
            )}
          </div>
        </div>
        {baseColour && (
          <div className={styles.baseBadge}>
            <span
              className={styles.baseDot}
              style={{
                background: `hsl(${baseColour.h}, ${baseColour.s}%, ${baseColour.l}%)`,
              }}
            />
            <span className={styles.baseText}>
              Base: H{Math.round(baseColour.h)}° S{Math.round(baseColour.s)}% L
              {Math.round(baseColour.l)}%
            </span>
          </div>
        )}
      </header>

      <main className={styles.main}>
        {palettes.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>◇</div>
            <p>Hit <strong>Generate</strong> to create colour palettes</p>
          </div>
        ) : (
          palettes.map((palette) => (
            <PaletteSection
              key={palette.label}
              palette={palette}
              onCopyHex={handleCopyHex}
            />
          ))
        )}
      </main>

      <footer className={styles.footer}>
        <p>
          Built with React + Vite •{' '}
          <a
            href="https://github.com/Kriskit/colour-palette"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source on GitHub
          </a>
        </p>
      </footer>

      {toast && <Toast message={toast} />}
    </div>
  );
}
