"use client";
import { useEffect, useRef } from "react";
import BrandFlower from "@/components/brand-flower";
export default function BloomScene({ className = "" }) {
  const host = useRef(null);
  useEffect(() => {
    const el = host.current;
    let dead = false,
      dispose = () => {},
      started = false;
    const media = matchMedia("(prefers-reduced-motion:reduce)");
    if (media.matches || navigator.connection?.saveData) return;
    const observer = new IntersectionObserver(
      async (entries) => {
        if (started || !entries.some((e) => e.isIntersecting)) return;
        started = true;
        try {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("webgl2", {
            alpha: true,
            antialias: true,
            powerPreference: "low-power",
          });
          if (!context) {
            el.dataset.sceneStatus = "unsupported";
            return;
          }
          const THREE = await import("three");
          if (dead) return;
          const renderer = new THREE.WebGLRenderer({
            canvas,
            context,
            alpha: true,
            antialias: true,
            powerPreference: "low-power",
          });
          renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
          renderer.setClearColor(0, 0);
          renderer.outputColorSpace = THREE.SRGBColorSpace;
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 30);
          camera.position.z = 8;
          const flower = new THREE.Group();
          flower.rotation.set(-0.18, 0.2, -0.15);
          scene.add(flower);
          scene.add(new THREE.HemisphereLight(0xfff6e8, 0x594036, 2.4));
          const light = new THREE.DirectionalLight(0xffe8da, 4);
          light.position.set(-3, 4, 6);
          scene.add(light);
          const sphere = new THREE.SphereGeometry(1, 24, 16);
          const pink = new THREE.MeshStandardMaterial({
            color: 0xe6a1b5,
            roughness: 0.3,
            metalness: 0.08,
          });
          const cream = new THREE.MeshStandardMaterial({
            color: 0xf2d6a2,
            roughness: 0.45,
          });
          const green = new THREE.MeshStandardMaterial({
            color: 0x8d9d71,
            roughness: 0.5,
          });
          for (let i = 0; i < 9; i++) {
            const angle = (i * Math.PI * 2) / 9;
            const petal = new THREE.Mesh(sphere, pink);
            petal.scale.set(0.31, 0.67, 0.22);
            petal.position.set(
              Math.sin(angle) * 0.75,
              Math.cos(angle) * 0.75 + 0.45,
              0,
            );
            petal.rotation.z = -angle;
            flower.add(petal);
          }
          const center = new THREE.Mesh(sphere, cream);
          center.scale.set(0.4, 0.4, 0.24);
          center.position.set(0, 0.45, 0.17);
          flower.add(center);
          const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0.1, 0),
            new THREE.Vector3(0.1, -0.7, 0),
            new THREE.Vector3(-0.12, -1.6, 0),
          ]);
          const tube = new THREE.TubeGeometry(curve, 20, 0.055, 8, false);
          flower.add(new THREE.Mesh(tube, green));
          const leaf = new THREE.Mesh(sphere, green);
          leaf.scale.set(0.48, 0.16, 0.1);
          leaf.position.set(0.42, -0.8, 0);
          leaf.rotation.z = 0.6;
          flower.add(leaf);
          el.appendChild(renderer.domElement);
          let visible = true,
            raf = 0,
            last = 0,
            phase = 0,
            tx = 0.2,
            ty = -0.18;
          const moving = () =>
            document.documentElement.dataset.motion !== "off" && !media.matches;
          const draw = (now) => {
            raf = 0;
            if (dead || !visible || document.hidden) return;
            const dt = Math.min((now - last) / 1000 || 0.016, 0.04);
            last = now;
            if (moving()) {
              phase += dt;
              flower.rotation.y = THREE.MathUtils.damp(
                flower.rotation.y,
                tx + Math.sin(phase * 0.6) * 0.14,
                4,
                dt,
              );
              flower.rotation.x = THREE.MathUtils.damp(
                flower.rotation.x,
                ty,
                4,
                dt,
              );
              flower.position.y = Math.sin(phase * 0.9) * 0.06;
            }
            renderer.render(scene, camera);
            if (moving()) raf = requestAnimationFrame(draw);
          };
          const wake = () => {
            cancelAnimationFrame(raf);
            if (visible && !document.hidden) {
              last = performance.now();
              raf = requestAnimationFrame(draw);
            }
          };
          const resize = new ResizeObserver(() => {
            const r = el.getBoundingClientRect();
            if (!r.width || !r.height) return;
            renderer.setSize(r.width, r.height);
            camera.aspect = r.width / r.height;
            camera.updateProjectionMatrix();
            wake();
          });
          resize.observe(el);
          const vis = new IntersectionObserver((entries) => {
            visible = entries[0].isIntersecting;
            wake();
          });
          vis.observe(el);
          const mutation = new MutationObserver(wake);
          mutation.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-motion"],
          });
          const pointer = (e) => {
            if (!visible || !moving()) return;
            const r = el.getBoundingClientRect();
            tx = Math.max(
              -0.45,
              Math.min(0.45, (e.clientX - r.left) / r.width - 0.5),
            );
            ty = Math.max(
              -0.3,
              Math.min(0.3, (-(e.clientY - r.top) / r.height) * 0.3),
            );
          };
          const lost = (e) => {
            e.preventDefault();
            cancelAnimationFrame(raf);
            el.classList.remove("scene-ready");
          };
          renderer.domElement.addEventListener("webglcontextlost", lost);
          window.addEventListener("pointermove", pointer, { passive: true });
          document.addEventListener("visibilitychange", wake);
          media.addEventListener("change", wake);
          dispose = () => {
            cancelAnimationFrame(raf);
            resize.disconnect();
            vis.disconnect();
            mutation.disconnect();
            window.removeEventListener("pointermove", pointer);
            document.removeEventListener("visibilitychange", wake);
            media.removeEventListener("change", wake);
            renderer.domElement.removeEventListener("webglcontextlost", lost);
            sphere.dispose();
            tube.dispose();
            pink.dispose();
            cream.dispose();
            green.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
            renderer.domElement.remove();
            el.classList.remove("scene-ready");
          };
          renderer.render(scene, camera);
          el.classList.add("scene-ready");
          el.dataset.sceneStatus = "ready";
          wake();
        } catch {
          dispose();
          el.dataset.sceneStatus = "fallback";
          el.classList.remove("scene-ready");
        }
      },
      { rootMargin: "100px" },
    );
    observer.observe(el);
    return () => {
      dead = true;
      observer.disconnect();
      dispose();
    };
  }, []);
  return (
    <div ref={host} className={"bloom-scene " + className} aria-hidden="true">
      <BrandFlower />
    </div>
  );
}
