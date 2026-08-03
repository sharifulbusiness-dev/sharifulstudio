import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as THREE from "three";

/** Shared, render-loop-safe scroll progress (0 → 1 over the whole page). */
const useScrollProgress = () => {
  const progress = useRef(0);
  useFrame((_, delta) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const raw = max > 0 ? window.scrollY / max : 0;
    // frame-rate independent buttery easing (≈ iOS spring feel)
    const k = 1 - Math.pow(0.0025, Math.min(delta, 0.05));
    progress.current += (raw - progress.current) * k;
  });
  return progress;
};

// smooth, slow ease used across the scene
const easeInOut = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ChromeForm = ({ lowPower }: { lowPower: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const p = useScrollProgress();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const s = p.current;
    const e = easeInOut(Math.min(Math.max(s, 0), 1));
    const narrow = state.viewport.aspect < 1;

    if (group.current) {
      group.current.position.y = -e * 2.2;
      group.current.position.x =
        (narrow ? 0.45 : 2.8) + Math.sin(e * Math.PI * 1.2) * (narrow ? 0.35 : 1.0);
      group.current.position.z = -e * 5.2;
      group.current.rotation.y = e * Math.PI * 2.2 + t * 0.05;
      group.current.rotation.x = e * Math.PI * 0.9;
      const scale = (narrow ? 0.58 : 0.9) * (1 + Math.sin(e * Math.PI) * 0.14);
      group.current.scale.setScalar(scale);
    }

    if (knot.current) knot.current.rotation.z = -e * Math.PI * 1.6;
    if (ring.current) {
      ring.current.rotation.x = Math.PI / 2 + e * Math.PI * 1.6;
      ring.current.scale.setScalar(1 + e * 0.3);
    }
  });

  return (
    <group ref={group}>
      <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.45}>
        <mesh ref={knot}>
          <torusKnotGeometry
            args={[0.85, 0.24, lowPower ? 110 : 200, lowPower ? 20 : 32]}
          />
          <meshStandardMaterial
            color="#e8eaee"
            metalness={1}
            roughness={0.08}
            envMapIntensity={2.2}
          />
        </mesh>

        <mesh ref={ring}>
          <torusGeometry args={[2.1, 0.006, 6, lowPower ? 80 : 140]} />
          <meshBasicMaterial color="#9aa1ad" />
        </mesh>
      </Float>
    </group>
  );
};

const ScrollScene = () => {
  const raw = useMotionValue(1);
  const opacity = useSpring(raw, { stiffness: 60, damping: 24, mass: 0.6 });

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const s = max > 0 ? window.scrollY / max : 0;
      // fully clears before contact / footer so nothing ghosts behind the text
      const v =
        s < 0.12
          ? 1 - (s / 0.12) * 0.55
          : s < 0.62
            ? 0.45 - ((s - 0.12) / 0.5) * 0.27
            : Math.max(0, 0.18 * (1 - (s - 0.62) / 0.16));
      raw.set(v);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [raw]);

  const { lowPower, reduced } = useMemo(() => {
    if (typeof window === "undefined") return { lowPower: true, reduced: false };
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = window.innerWidth < 900;
    const cores = navigator.hardwareConcurrency ?? 4;
    return {
      lowPower: coarse || small || cores <= 4,
      reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    };
  }, []);

  if (reduced) return null;

  return (
    <motion.div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity }}>
      <Canvas
        dpr={lowPower ? [1, 1.25] : [1, 1.75]}
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        gl={{
          antialias: !lowPower,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 4]} intensity={1.6} />
          <directionalLight position={[-5, -2, -3]} intensity={0.7} color="#c9ced8" />
          <ChromeForm lowPower={lowPower} />
          <Environment preset="studio" resolution={lowPower ? 64 : 128} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default ScrollScene;
