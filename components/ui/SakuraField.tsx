"use client";

import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  size: number;
  vy: number;
  sway: number;
  phase: number;
  rot: number;
  vrot: number;
  flip: number;
  vflip: number;
  depth: number;
  color: string;
};

const COLORS = ["#e9b7b0", "#f0c9c2", "#dfa39a", "#f4d7d1", "#c9786a"];

// Drifting sakura petals on a 2D canvas. The cursor pushes a soft breeze.
const SakuraField = ({ density = 38 }: { density?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let petals: Petal[] = [];
    let frame = 0;
    let running = false;
    let wind = 0;
    let targetWind = 0;
    const pointer = { x: -9999, y: -9999 };

    const spawn = (initial: boolean): Petal => {
      const depth = 0.4 + Math.random() * 0.6;
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : -20,
        size: (6 + Math.random() * 7) * depth,
        vy: (0.35 + Math.random() * 0.5) * depth,
        sway: 0.4 + Math.random() * 0.9,
        phase: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.02,
        flip: Math.random() * Math.PI * 2,
        vflip: 0.01 + Math.random() * 0.03,
        depth,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(density * Math.min(1, width / 1200) + 10);
      petals = Array.from({ length: count }, () => spawn(true));
    };

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      // Fake a 3D tumble by squashing one axis.
      ctx.scale(1, Math.max(0.15, Math.abs(Math.cos(p.flip))));
      ctx.globalAlpha = 0.35 + p.depth * 0.5;
      ctx.fillStyle = p.color;
      const s = p.size;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.9, -s * 0.8, s * 0.8, s * 0.6, 0, s);
      ctx.bezierCurveTo(-s * 0.8, s * 0.6, -s * 0.9, -s * 0.8, 0, -s);
      // The notch at the tip of a cherry petal.
      ctx.moveTo(0, -s);
      ctx.lineTo(s * 0.18, -s * 0.72);
      ctx.lineTo(-s * 0.18, -s * 0.72);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      wind += (targetWind - wind) * 0.02;
      targetWind *= 0.98;

      for (const p of petals) {
        p.phase += 0.01;
        p.y += p.vy;
        p.x += Math.sin(p.phase + t * 0.0004) * p.sway * 0.5 + wind * p.depth;
        p.rot += p.vrot;
        p.flip += p.vflip;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 14000) {
          const force = (1 - dist2 / 14000) * 1.4;
          const d = Math.sqrt(dist2) || 1;
          p.x += (dx / d) * force;
          p.y += (dy / d) * force;
        }

        if (p.y > height + 20 || p.x < -40 || p.x > width + 40) {
          Object.assign(p, spawn(false), {
            x: wind > 0.3 ? -20 : wind < -0.3 ? width + 20 : Math.random() * width,
          });
        }
        drawPetal(p);
      }
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    let lastX: number | null = null;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (lastX !== null) {
        targetWind = Math.max(-2, Math.min(2, targetWind + (e.clientX - lastX) * 0.01));
      }
      lastX = e.clientX;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
      lastX = null;
    };

    // Only animate while the hero is on screen and the tab is visible.
    const observer = new IntersectionObserver(([entry]) =>
      entry.isIntersecting && !document.hidden ? start() : stop()
    );
    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default SakuraField;
