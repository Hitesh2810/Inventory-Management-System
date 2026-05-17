"use client";

import { useEffect, useState } from "react";

export function useMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return position;
}
