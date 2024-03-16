"use client"

import * as React from "react";
import ZoomImage from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "@/styles/zoom.css"

export default function Zoom({ children }: React.PropsWithChildren) {
  return <ZoomImage>{children}</ZoomImage>;
}
