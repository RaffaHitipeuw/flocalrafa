"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { slideUp } from "./animation";
import dynamic from "next/dynamic";
import { Instagram, Linkedin } from "lucide-react";

// disable SSR untuk Dither biar ga bikin mismatch
const Dither = dynamic(() => import("./Dither"), { ssr: false });


export default function LandingPage() {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <div style={{ width: "100%", height: "900px", position: "relative" }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
        <div className={styles.hero}>
          <h1>Raffa Hitipeuw</h1>
          <p>Personal Portfolio '25</p>

          <div className={styles.socialButtons}>
            <a
              href="https://www.instagram.com/raffaaahitipeuw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-[22px] h-[22px]" />
            </a>
            <a
              href="https://id.linkedin.com/in/raffa-hitipeuw-30124b380"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-[22px] h-[22px]" />
            </a>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
