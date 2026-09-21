import { useEffect, useRef } from 'react';

// Decorative, event-driven canvas: React never re-renders on pointer movement.
export default function PixelMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const surface = canvas.parentElement;
    const context = canvas.getContext('2d');
    if (!context) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const spacing = 24;
    let width = 0;
    let height = 0;
    let frame = 0;
    let previousTime = 0;
    let pixels = [];
    let pointer = null;

    const draw = (time) => {
      frame = 0;
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
      previousTime = time;
      const blend = 1 - Math.exp(-elapsed / 100);
      let settling = false;
      context.clearRect(0, 0, width, height);

      // A fine connected mesh, softened toward the edges of the panel.
      context.lineWidth = 0.5;
      context.strokeStyle = 'rgba(70, 116, 170, 0.07)';
      context.beginPath();
      for (let x = 12; x < width; x += spacing) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
      }
      for (let y = 12; y < height; y += spacing) {
        context.moveTo(0, y);
        context.lineTo(width, y);
      }
      context.stroke();

      for (const pixel of pixels) {
        const distance = pointer ? Math.hypot(pixel.x - pointer.x, pixel.y - pointer.y) : Infinity;
        const target = motion.matches ? 0 : Math.max(0, 1 - distance / 125) ** 2;
        pixel.heat += (target - pixel.heat) * blend;
        if (Math.abs(target - pixel.heat) > 0.002) settling = true;
        else pixel.heat = target;

        const size = pixel.baseSize + pixel.heat * 15;
        const opacity = pixel.baseOpacity + pixel.heat * 0.25;
        context.fillStyle = `rgba(0, 122, 255, ${opacity})`;
        context.fillRect(pixel.x - size / 2, pixel.y - size / 2, size, size);
      }

      // Stop drawing once the hover transition has settled.
      if (settling) frame = requestAnimationFrame(draw);
      else previousTime = 0;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      const bounds = surface.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
      pixels = [];
      for (let x = 12; x < width; x += spacing) {
        for (let y = 12; y < height; y += spacing) {
          const cluster = Math.exp(-((x - width * 0.88) ** 2 + (y - height * 0.3) ** 2) / 21000);
          const accent = (Math.round(x / spacing) * 7 + Math.round(y / spacing) * 11) % 9 === 0;
          pixels.push({
            x, y, heat: 0,
            baseSize: accent ? 4 + cluster * 6 : 2,
            baseOpacity: accent ? 0.06 + cluster * 0.13 : 0.12,
          });
        }
      }
      schedule();
    };

    const move = (event) => {
      if (motion.matches || event.pointerType === 'touch') return;
      const bounds = surface.getBoundingClientRect();
      pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      schedule();
    };
    const leave = () => {
      pointer = null;
      schedule();
    };
    const changeMotion = () => {
      pointer = null;
      pixels.forEach((pixel) => { pixel.heat = 0; });
      schedule();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(surface);
    surface.addEventListener('pointermove', move, { passive: true });
    surface.addEventListener('pointerleave', leave);
    surface.addEventListener('pointercancel', leave);
    motion.addEventListener('change', changeMotion);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      surface.removeEventListener('pointermove', move);
      surface.removeEventListener('pointerleave', leave);
      surface.removeEventListener('pointercancel', leave);
      motion.removeEventListener('change', changeMotion);
    };
  }, []);

  return <canvas ref={canvasRef} className="pixel-mesh" aria-hidden="true" />;
}
