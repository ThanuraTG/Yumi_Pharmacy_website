import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Animated Counter component that increments from `from` to `to`
 * when it scrolls into view. Smooth and gentle count-up.
 */
export function AnimatedCounter({ 
  from = 0, 
  to = 0, 
  duration = 2.6, 
  suffix = '', 
  prefix = '', 
  className = '' 
}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    const start = from;
    const end = typeof to === 'number' ? to : parseInt(to, 10);
    if (isNaN(end)) return;

    const totalFrames = Math.max(45, Math.round(duration * 60));
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Gentle, smooth ease-out quartic
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(start + (end - start) * easedProgress);
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/**
 * Relaxed and smooth cubic ease for gentle UI motion (ease-out quart style)
 */
const SMOOTH_EASE = [0.22, 1, 0.36, 1];

export function FadeIn({ children, delay = 0, duration = 0.9, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUp({ children, delay = 0, duration = 0.95, distance = 26, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInDown({ children, delay = 0, duration = 0.85, distance = 20, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeft({ children, delay = 0, duration = 1.0, distance = 30, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children, delay = 0, duration = 1.0, distance = 30, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ZoomIn({ children, delay = 0, duration = 0.85, scale = 0.94, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ZoomInUp({ children, delay = 0, duration = 0.95, scale = 0.94, distance = 22, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale, y: distance }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideInUp({ children, delay = 0, duration = 0.85, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: '35%' }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
