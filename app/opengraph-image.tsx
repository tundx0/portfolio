import { ImageResponse } from "next/og";

export const alt = "Olatunde Adegboyebo — Full Stack & Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f6f4ef";
const INK = "#1c1a17";
const INK_MUTED = "#8a847a";
const ACCENT = "#a8412a";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: PAPER,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 18,
                height: 18,
                backgroundColor: ACCENT,
                marginRight: 16,
              }}
            />
            <div
              style={{
                fontSize: 26,
                letterSpacing: 6,
                color: INK,
                fontWeight: 700,
              }}
            >
              OLA
            </div>
          </div>
          <div style={{ fontSize: 22, color: INK_MUTED, letterSpacing: 4 }}>
            PORTFOLIO
          </div>
        </div>

        {/* Center */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <div style={{ width: 48, height: 3, backgroundColor: ACCENT, marginRight: 20 }} />
            <div style={{ fontSize: 24, color: INK_MUTED, letterSpacing: 8 }}>
              HELLO
            </div>
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: INK,
              lineHeight: 1.05,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Olatunde</span>
            <span>Adegboyebo</span>
          </div>
          <div
            style={{
              fontSize: 34,
              color: ACCENT,
              marginTop: 28,
            }}
          >
            Full Stack &amp; Backend Engineer
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid rgba(28,26,23,0.15)`,
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 24, color: INK_MUTED }}>
            olaportfolio.vercel.app
          </div>
          <div style={{ fontSize: 24, color: INK_MUTED }}>Lagos, Nigeria</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
