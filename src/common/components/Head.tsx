import React from "react";
import { Script } from "gatsby";

export function SEO({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={description} />
      <meta name="author" content="Chun Rapeepat" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://cl-management.retro.finance" />
      <meta property="og:image" content="https://retro.finance/cover.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Retro_finance" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://retro.finance/cover.png" />
      <Script>
        {`var ffWidgetId = "bbf56663-84dc-4b55-bf9c-333b5b4c2720";
    var ffWidgetScript = document.createElement("script");
    ffWidgetScript.type = "text/javascript";
    ffWidgetScript.src = "https://freddyfeedback.com/widget/freddyfeedback.js";
    document.head.appendChild(ffWidgetScript);`}
      </Script>
    </>
  );
}
