"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_KEY = "haris-portfolio-intro-seen";

export function IntroExperience() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const removeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeIntro = useCallback(() => {
    try { window.sessionStorage.setItem(INTRO_KEY, "true"); } catch {}
    setLeaving(true);
    removeTimer.current = setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("intro-active");
    }, 800);
  }, []);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(INTRO_KEY)) {
        setVisible(false);
        return;
      }
    } catch {}

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    document.documentElement.classList.add("intro-active");
    const exitTimer = setTimeout(closeIntro, 3900);

    return () => {
      clearTimeout(exitTimer);
      if (removeTimer.current) clearTimeout(removeTimer.current);
      document.documentElement.classList.remove("intro-active");
    };
  }, [closeIntro]);

  if (!visible) return null;

  return (
    <div className={`intro-experience${leaving ? " is-leaving" : ""}`} role="dialog" aria-label="Portfolio introduction">
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-glow" aria-hidden="true" />
      <div className="intro-brand" aria-hidden="true">
        <Image src="/logo.png" alt="" width={58} height={58} priority />
        <span>Portfolio / 2026</span>
      </div>

      <div className="intro-stage" aria-hidden="true">
        <div className="intro-slide intro-slide-one">
          <span>Independent Software Engineer</span>
          <strong>HARIS<br />SOFYAN</strong>
        </div>
        <div className="intro-slide intro-slide-two">
          <span>Designing reliable digital systems</span>
          <strong>SOFTWARE <i>×</i><br />CLOUD</strong>
        </div>
        <div className="intro-slide intro-slide-three">
          <span>From architecture to production</span>
          <strong>BUILD. <em>SCALE.</em><br />DELIVER.</strong>
        </div>
      </div>

      <div className="intro-progress" aria-hidden="true"><i /><i /><i /></div>
      <button className="intro-skip" type="button" onClick={closeIntro}>Skip intro <span>↗</span></button>
    </div>
  );
}
