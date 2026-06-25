"use client";

import { useEffect } from "react";
import React from "react";

export function HubSpotCalendar() {
  useEffect(() => {
    // HubSpot Meeting Embed Script
    const existing = document.querySelector('script[src*="MeetingsEmbedCode"]');
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="meetings-iframe-container min-h-[600px] w-full"
      data-src="https://meetings.hubspot.com/halloskills/beratung?embed=true"
    />
  );
}
