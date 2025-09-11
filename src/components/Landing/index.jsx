"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import styles from "./style.module.scss";
import { slideUp } from "./animation";

export default function LandingPage() {

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
    </motion.main>
  );
}
