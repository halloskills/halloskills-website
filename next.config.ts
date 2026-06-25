import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // CSP: erlaubt HubSpot embed, Google Fonts, jsdelivr Icons, eigene Assets
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: Next.js inline + HubSpot + Google Analytics (nach Consent)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hs-scripts.com https://js.hsforms.net https://meetings.hubspot.com https://www.googletagmanager.com https://www.google-analytics.com",
      // Styles: self + Google Fonts + Relume CDN
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://d22po4pjz3o32e.cloudfront.net",
      // Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images: eigene + CDN Placeholder + Icons
      "img-src 'self' data: blob: https://d22po4pjz3o32e.cloudfront.net https://cdn.jsdelivr.net https://www.google-analytics.com",
      // Frames: HubSpot Meeting Embed + YouTube (Testimonial-Video)
      "frame-src https://meetings.hubspot.com https://app.hubspot.com https://www.youtube.com https://www.youtube-nocookie.com",
      // Connections: HubSpot API + GA
      "connect-src 'self' https://api.hubspot.com https://forms.hubspot.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
