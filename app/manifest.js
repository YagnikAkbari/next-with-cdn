export default function manifest() {
  return {
    name: "Bloomnest PWA Test Push Notifications",
    short_name: "Bloomnest",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    theme_color: "#000000",
    background_color: "#e66262",
    display: "standalone",

    icons: [
      {
        src: "/icon-192X192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512X512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
