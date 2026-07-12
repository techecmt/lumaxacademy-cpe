import { ImageResponse } from "next/og";

export const alt =
  "Lumax Academy — Skills Training Academy in Singapore, Beach Road";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #10143a 0%, #193764 65%, #1f477c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 30,
            fontWeight: 700,
            color: "#faa426",
            letterSpacing: "4px",
          }}
        >
          LUMAX ACADEMY
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 950,
          }}
        >
          Skills Training Academy in Singapore
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 30,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Nursing Aide · Caregiving · Healthcare Administration · Barista Arts
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            color: "#faa426",
            fontWeight: 700,
          }}
        >
          The Plaza, 7500A Beach Road · near Nicoll Highway &amp; Bugis MRT
        </div>
      </div>
    ),
    { ...size }
  );
}
