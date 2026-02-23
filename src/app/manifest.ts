import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HostProSuite",
    short_name: "HostProSuite",
    description:
      "The smart way to manage short-term rentals. Direct bookings, zero commissions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#232F51",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
