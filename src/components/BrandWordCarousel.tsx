"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home.module.css";

const BRAND_IMAGES = ["/images/brand/brand-word-01.png"];
const BETWEEN_SLIDES_DELAY = 600;

export default function BrandWordCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    BRAND_IMAGES.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((index) => (index + 1) % BRAND_IMAGES.length);
      setIsAnimating(true);
    }, BETWEEN_SLIDES_DELAY);
  };

  return (
    <div className={styles.brandCarousel} aria-hidden="true">
      <div className={styles.brandCarouselVerticalCenter}>
        {isAnimating ? (
          <img
            key={activeIndex}
            className={styles.brandWordMovingImage}
            src={BRAND_IMAGES[activeIndex]}
            alt=""
            draggable={false}
            onAnimationEnd={handleAnimationEnd}
          />
        ) : null}
      </div>
    </div>
  );
}
