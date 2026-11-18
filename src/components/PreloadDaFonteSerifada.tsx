import { preload } from "react-dom";

/** A Instrument Serif aparece acima da dobra na home e nos cases: pré-carrega as duas variantes. */
export function PreloadDaFonteSerifada() {
  preload("/assets/fonts/instrument-serif-normal-400-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/assets/fonts/instrument-serif-italic-400-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return null;
}
