import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HostProSuite – Direct bookings. Total freedom. Zero commissions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #232F51 0%, #2d3b63 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 8,
          }}
        >
          HostProSuite
          <span style={{ color: "#F4A85D", marginLeft: 4 }}>™</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginTop: 24,
            maxWidth: 800,
          }}
        >
          Direct bookings. Total freedom. Zero commissions.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
            marginTop: 24,
            maxWidth: 700,
          }}
        >
          The smart way to manage short-term rentals in South Africa.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            backgroundColor: "#F4A85D",
            color: "#ffffff",
            padding: "14px 32px",
            borderRadius: 8,
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Get Started
        </div>
      </div>
    ),
    { ...size }
  );
}
