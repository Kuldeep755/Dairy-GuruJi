export function constructMetadata({
  title = "Dairy Guru Ji | व्यापार नहीं, रिश्ते बनाते हैं",
  description = "Farmer-first dairy nutrition brand focusing on long-term animal health and honest guidance.",
  image = "/images/logo-dairy-guruji.png",
  icons = "/favicon.ico",
  noIndex = false,
} = {}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@dairyguruji",
    },
    icons,
    metadataBase: new URL("https://dairyguruji.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
