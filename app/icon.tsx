import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1A1A1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#F8F9FA",
            fontSize: 13,
            fontFamily: "Georgia, serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          MW
        </span>
      </div>
    ),
    { ...size }
  );
}
