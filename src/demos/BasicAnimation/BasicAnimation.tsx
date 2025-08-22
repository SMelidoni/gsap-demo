import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./BasicAnimation.css";

export default function BasicAnimation() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current && circleRef.current) {
      gsap.set([boxRef.current, circleRef.current], { opacity: 0, y: 20 });
      gsap.to([boxRef.current, circleRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      });
    }
  }, []);

  const playTo = () => {
    if (!boxRef.current) return;
    gsap.to(boxRef.current, {
      x: 400,
      rotation: 360,
      backgroundColor: "#ffb86b",
      duration: 1.2,
      ease: "power3.inOut",
    });
  };

  const playFrom = () => {
    if (!boxRef.current) return;
    gsap.from(boxRef.current, {
      x: -400,
      rotation: -180,
      backgroundColor: "#8ecae6",
      duration: 1,
      ease: "back.out(1.4)",
    });
  };

  const playFromTo = () => {
    if (!boxRef.current) return;
    gsap.fromTo(
      boxRef.current,
      { x: 0, scale: 0.6, backgroundColor: "#ffd8a8" },
      {
        x: 300,
        scale: 1,
        backgroundColor: "#c8a8ff",
        duration: 1,
        ease: "power2.out",
      }
    );
  };

  const reset = () => {
    if (!boxRef.current) return;
    gsap.killTweensOf(boxRef.current);
    gsap.set(boxRef.current, {
      clearProps: "all",
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
    });
  };

  return (
    <div className="basic-demo">
      <div className="controls">
        <button onClick={playTo}>to()</button>
        <button onClick={playFrom}>from()</button>
        <button onClick={playFromTo}>fromTo()</button>
        <button onClick={reset} className="ghost">
          Reset
        </button>
      </div>

      <div className="stage">
        <div ref={boxRef} className="box" />
        <div ref={circleRef} className="circle" />
      </div>

      <p className="hint">
        Try each button to see how GSAP to, from, and fromTo behave.
      </p>
    </div>
  );
}
