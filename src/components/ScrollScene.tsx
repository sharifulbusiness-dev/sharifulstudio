import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

/** Shared, render-loop-safe scroll progress (0 → 1 over the whole page). */
const useScrollProgress = () => {
  const progress = useRef(0);
  useFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const raw = max > 0 ? window.scrollY / max : 0;
    // buttery easing towards the target
    progress.current += (raw - progress.current) * 0.08;
  });
  return progress;
};

const ChromeForm = () => {
  const group = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const p = useScrollProgress();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const s = p.current;
    const narrow = state.viewport.aspect < 1;

    if (group.current) {
      // drifts down, back, and across the page as you scroll
      group.current.position.y = -s * 2.4;
      group.current.position.x =
        (narrow ? 0.4 : 2.1) + Math.sin(s * Math.PI * 1.5) * (narrow ? 0.5 : 1.1);
      group.current.position.z = -s * 4.5;
      group.current.rotation.y = s * Math.PI * 3 + t * 0.08;
      group.current.rotation.x = s * Math.PI * 1.2;
      const scale = (narrow ? 0.6 : 0.9) * (1 + Math.sin(s * Math.PI) * 0.18);
      group.current.scale.setScalar(scale);
    }

    if (knot.current) {
      knot.current.rotation.z = -s * Math.PI * 2;
    }
    if (ring.current) {
      ring.current.rotation.x = Math.PI / 2 + s * Math.PI * 2;
      ring.current.scale.setScalar(1 + s * 0.35);
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh ref={knot}>
          <torusKnotGeometry args={[0.85, 0.24, 220, 40]} />
          <meshStandardMaterial
            color="#e8eaee"
            metalness={1}
            roughness={0.08}
            envMapIntensity={2.2}
          />
        </mesh>


        <mesh ref={ring}>
          <torusGeometry args={[2.1, 0.006, 8, 160]} />
          <meshBasicMaterial color="#9aa1ad" />
        </mesh>
      </Float>
    </group>
  );
};

const ScrollScene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 4]} intensity={1.6} />
          <directionalLight position={[-5, -2, -3]} intensity={0.7} color="#c9ced8" />
          <ChromeForm />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ScrollScene;
