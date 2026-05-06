"use client";

import { useEffect } from "react";

export default function LiveChat() {
  useEffect(() => {
    // Avoid loading twice
    if (document.getElementById("tawk-to-script")) return;

    const script = document.createElement("script");
    script.id = "tawk-to-script";
    script.async = true;
    script.src = "https://embed.tawk.to/default/1default";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById("tawk-to-script");
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return null;
}
