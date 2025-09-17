"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { slideUp } from "./animation";
import Dither from "./Dither";

export default function LandingPage() {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <div style={{ width: '100%', height: '900px', position: 'relative' }}>
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
      </div>
    </motion.main>
  );
}
