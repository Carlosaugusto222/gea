import React, { useEffect } from "react";

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

const DEFAULT_CANONICAL = "https://geaidiomas.com.br/";
const DEFAULT_IMAGE = "https://geaidiomas.com.br/og-image.png";

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical = DEFAULT_CANONICAL,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely set or create meta tags
    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to safely set or create link tags
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // 2. Standard Search Engine Meta
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setLink("canonical", canonical);

    // 3. Open Graph (Facebook, WhatsApp, LinkedIn)
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "GEA Idiomas");
    setMeta("property", "og:locale", "pt_BR");

    // 4. Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, canonical, image, type, noindex]);

  // Also render React 19 native document metadata elements for immediate head reconciliation
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="GEA Idiomas" />
      <meta property="og:locale" content="pt_BR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};
