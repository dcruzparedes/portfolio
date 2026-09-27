import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Daniel Cruz Paredes — Full-stack developer & DevOps";

export default function Image() {
  return ogImage("en");
}
