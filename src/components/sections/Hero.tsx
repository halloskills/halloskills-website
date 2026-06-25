"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden" style={{ backgroundColor: "#F5F7F9" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: "radial-gradient(ellipse at top right, #004B76, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: "#99CDD1", color: "#004B76" }}
          >
            <span>✓</span> AZAV-zertifiziert · 100% gefördert
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Georgia, serif", color: "#111827" }}
          >
            Arbeitslos? Starte deine{" "}
            <span style={{ color: "#004B76" }}>geförderte Weiterbildung</span>{" "}
            – 100% kostenlos.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
          >
            Mit HalloSkills findest du die passende Online-Weiterbildung für deinen Traumjob.
            Projektmanagement, Online Marketing oder KI & Digitalisierung –
            AZAV-zertifiziert und vollständig über den Bildungsgutschein finanziert.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/beratung-buchen"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md text-base font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95 shadow-lg"
              style={{ backgroundColor: "#004B76" }}
            >
              Jetzt kostenlose Beratung buchen
            </Link>
            <Link
              href="/kurse"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md text-base font-semibold border-2 transition-all duration-200 hover:bg-gray-50 active:scale-95"
              style={{ borderColor: "#004B76", color: "#004B76" }}
            >
              Kurse entdecken →
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {[
              "✓ Bildungsgutschein wird vollständig übernommen",
              "✓ AZAV-zertifizierter Bildungsträger",
              "✓ 100% online – flexibel von zuhause",
              "✓ Anerkanntes Zertifikat inklusive",
            ].map((item) => (
              <span key={item} className="text-sm text-gray-600">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
