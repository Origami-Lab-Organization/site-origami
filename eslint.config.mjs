import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // As páginas usam <a> de propósito: navegação completa, para os scripts
      // de animação (public/assets/js) iniciarem do zero a cada página.
      "@next/next/no-html-link-for-pages": "off",
      // Imagens já otimizadas à mão (webp, dimensões fixas); next/image fica
      // para componentes novos.
      "@next/next/no-img-element": "off",
    },
  },
  // support.js é o runtime do arquivo de design original (LP Origami Lab.dc.html),
  // não é carregado pelo site.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "public/**", "support.js", "rascunhos/**", "dist/**"]),
]);

export default eslintConfig;
