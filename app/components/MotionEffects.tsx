"use client";

import { useEffect, useRef } from "react";

export function MotionEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let frame = 0;
    let activeTilt: HTMLElement | null = null;

    const animate = () => {
      ringX += (targetX - ringX) * 0.14;
      ringY += (targetY - ringY) * 0.14;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    const resetTilt = () => {
      if (!activeTilt) return;
      activeTilt.style.setProperty("--tilt-x", "0deg");
      activeTilt.style.setProperty("--tilt-y", "0deg");
      activeTilt.style.setProperty("--glow-x", "50%");
      activeTilt.style.setProperty("--glow-y", "50%");
      activeTilt = null;
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      root.style.setProperty("--hero-rx", `${y * -13}deg`);
      root.style.setProperty("--hero-ry", `${x * 18}deg`);
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);

      const tilt = (event.target as HTMLElement).closest<HTMLElement>("[data-tilt]");
      if (tilt !== activeTilt) resetTilt();
      if (tilt) {
        activeTilt = tilt;
        const rect = tilt.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        tilt.style.setProperty("--tilt-x", `${(0.5 - py) * 9}deg`);
        tilt.style.setProperty("--tilt-y", `${(px - 0.5) * 11}deg`);
        tilt.style.setProperty("--glow-x", `${px * 100}%`);
        tilt.style.setProperty("--glow-y", `${py * 100}%`);
      }
    };

    const onPointerOver = (event: PointerEvent) => {
      const interactive = (event.target as HTMLElement).closest("a, button, [data-tilt]");
      ringRef.current?.classList.toggle("is-active", Boolean(interactive));
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerleave", resetTilt);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerleave", resetTilt);
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true"><span>VIEW</span></div>
      <div className="cursor-ambient" aria-hidden="true" />
    </>
  );
}
