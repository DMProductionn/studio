'use client';
import { useEffect, useRef } from 'react';

// Default export a React component so it can be previewed/embedded easily
export default function SatisfyingCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    // Physics params (mirrors the original)
    const params = {
      pointsNumber: 40,
      widthFactor: 0.3,
      mouseThreshold: 0.6, // kept for parity, not used directly
      spring: 0.4,
      friction: 0.5,
    } as const;

    // Pointer + trail state
    let mouseMoved = false;
    const pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
    const trail: { x: number; y: number; dx: number; dy: number }[] = new Array(params.pointsNumber)
      .fill(0)
      .map(() => ({ x: pointer.x, y: pointer.y, dx: 0, dy: 0 }));

    // HiDPI-safe canvas sizing
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      // Reset transform then scale so we can draw in CSS pixels
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    const updateMousePosition = (x: number, y: number) => {
      pointer.x = x;
      pointer.y = y;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseMoved = true;
      updateMousePosition(e.clientX, e.clientY);
    };
    const onClick = (e: MouseEvent) => updateMousePosition(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      mouseMoved = true;
      if (e.targetTouches && e.targetTouches[0]) {
        updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
      }
    };

    function drawFrame(t: number) {
      // Intro autonomous motion until mouse moves (parity with original)
      if (!mouseMoved) {
        pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth;
        pointer.y =
          (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Integrate trail physics
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        const prev = i === 0 ? pointer : trail[i - 1];
        const spring = i === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      }

      ctx.lineCap = 'round';
      ctx.strokeStyle = '#fff';
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }

      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      rafRef.current = window.requestAnimationFrame(drawFrame);
    }

    // Wire up
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    rafRef.current = window.requestAnimationFrame(drawFrame);

    // Cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[2147483647] overflow-hidden overscroll-none pointer-events-none cursor-none">
      {/* Fullscreen canvas that draws the trail; default cursor hidden over this area */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block pointer-events-none cursor-none mix-blend-difference"
      />
    </div>
  );
}
