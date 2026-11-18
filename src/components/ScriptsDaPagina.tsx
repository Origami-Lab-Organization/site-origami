import Script from "next/script";

/* Os scripts de comportamento do site (public/assets/js) continuam em
   JavaScript puro e mexem direto no DOM: scroll da home, marquees, menu, FAQ.
   Rodam depois da hidratação (afterInteractive) para o React nunca encontrar
   um DOM que ele não gerou. */

type NomeDoScript = "main" | "pagina" | "servico";

export function ScriptsDaPagina({ scripts }: { scripts: NomeDoScript[] }) {
  return (
    <>
      {scripts.map((nome) => (
        <Script key={nome} src={`/assets/js/${nome}.js`} strategy="afterInteractive" />
      ))}
    </>
  );
}
