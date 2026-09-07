import { ImageResponse } from "next/og";

export const alt = "Esteban Leandro Marin. Big ideas. Built right. Full-stack engineering and applied AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "56px 64px", background: "#2354e8", color: "#f4ff62" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
          <span>ESTEBAN LEANDRO MARIN</span>
          <span>FULL STACK + APPLIED AI</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 128, fontWeight: 700, letterSpacing: "-7px", lineHeight: 0.95 }}>
          <span>BIG IDEAS.</span>
          <span>BUILT RIGHT.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
          <span>estebanleandro.com</span>
          <span style={{ background: "#ffb4dc", color: "#171714", padding: "12px 24px", borderRadius: "40px" }}>Developer. Thinker. Maker.</span>
        </div>
      </div>
    ),
    size,
  );
}
