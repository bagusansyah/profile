import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(31, 41, 55) 50%, rgb(16, 185, 129) 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.18em", opacity: 0.85 }}>
          BAGUS NADIANSAH
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            AI & Full-Stack Engineer
          </div>
          <div style={{ maxWidth: "880px", fontSize: 28, lineHeight: 1.35, opacity: 0.9 }}>
            Portfolio profesional yang menampilkan proyek AI, web development, GIS,
            dan resume dalam satu website yang siap diindeks mesin pencari.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
