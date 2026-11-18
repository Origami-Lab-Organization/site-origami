/** JSON-LD da página. O "<" vira < para o conteúdo nunca fechar a tag <script>. */
export function DadosEstruturados({ dados }: { dados: object }) {
  const json = JSON.stringify(dados).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
