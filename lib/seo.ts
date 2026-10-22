import type { Metadata } from "next";
import { appStoreUrl } from "@/lib/appStoreListing";
import { SITE_URL, type Lang } from "@/lib/i18n";

/**
 * What a shared link shows. `app/opengraph-image.tsx` draws the card, named here because Next
 * attaches that file only below a root layout, and this app has one per language tree instead.
 */
export const OPEN_GRAPH = {
  siteName: "Oyno",
  type: "website",
  images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/jpeg" }],
};

/** Metadata for a page that exists in English only: a canonical and a card that match the title.
 * The card is spelled out because a page's `openGraph` replaces the layout's, not merges into it. */
export function englishPageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE_URL}${path}`;
  return { title, description, alternates: { canonical: url }, openGraph: { ...OPEN_GRAPH, title, description, url } };
}

/** The trail Google shows instead of the URL. */
export function breadcrumbList(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Oyno",
  url: SITE_URL,
  logo: `${SITE_URL}/ico/icon-512.png`,
  email: "tim@oyno.app",
};

/** Who makes Oyno and what it is, for the home page in every language. */
export function homeStructuredData(lang: Lang, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION,
      {
        "@type": "MobileApplication",
        name: "Oyno",
        operatingSystem: "iOS",
        applicationCategory: "LifestyleApplication",
        inLanguage: lang,
        description,
        publisher: { "@id": ORGANIZATION["@id"] },
        ...(appStoreUrl && { installUrl: appStoreUrl }),
      },
    ],
  };
}

/** A guide or a post, written by the maker. */
export function articleStructuredData(article: { title: string; description: string; published: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    image: `${SITE_URL}/opengraph-image`,
    mainEntityOfPage: `${SITE_URL}${article.path}`,
    author: { "@type": "Person", name: AUTHOR.name, jobTitle: AUTHOR.role, url: SITE_URL },
    publisher: ORGANIZATION,
  };
}

/** The byline every article carries: the founder story on the home page is his. */
export const AUTHOR = { name: "Tim", role: "Maker of Oyno" };
