import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./BasicAnimation.css";

export const BasicAnimation = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  const getVar = (name: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  useEffect(() => {
    if (boxRef.current && circleRef.current) {
      gsap.set([boxRef.current, circleRef.current], { opacity: 0, y: 20 });
      gsap.to([boxRef.current, circleRef.current], {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });
    }
  }, []);

  // Moves the box to the right and rotates it.
  const playTo = () => {
    if (!boxRef.current) return;
    gsap.killTweensOf(boxRef.current);
    gsap.to(boxRef.current, {
      x: 400,
      rotation: 360,
      backgroundColor: getVar("--color-orange"),
      duration: 1,
      ease: "power3.inOut",
    });
  };

  // Animates the box from the left into its original position.
  const playFrom = () => {
    if (!boxRef.current) return;
    gsap.killTweensOf(boxRef.current);
    gsap.from(boxRef.current, {
      x: -400,
      rotation: -180,
      duration: 1,
      ease: "back.out(1.4)",
    });
  };

  // Animates the box from a smaller scale and left position to the right and full size.
  const playFromTo = () => {
    if (!boxRef.current) return;
    gsap.killTweensOf(boxRef.current);
    gsap.fromTo(
      boxRef.current,
      { x: 0, scale: 0.6, backgroundColor: getVar("--color-peach") },
      {
        x: 300,
        scale: 1,
        backgroundColor: getVar("--color-purple"),
        duration: 1,
        ease: "power2.out",
      }
    );
  };

  const reset = () => {
    if (!boxRef.current) return;
    gsap.killTweensOf(boxRef.current);
    gsap.to(boxRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      backgroundColor: getVar("--color-peach"),
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <div className="basic-demo">
      <div className="description">
        <h2>What is Basic Animation?</h2>
        <p>
          Basic animations are the foundation of GSAP. They involve moving
          elements from one state to another over time using tweens (transitions
          between values).
        </p>
        <h3>When to use Basic Animation:</h3>
        <ul>
          <li>
            <strong>Single element animations:</strong> Moving, scaling, or
            rotating one element at a time
          </li>
          <li>
            <strong>Property changes:</strong> Animating colours, opacity, size,
            or position
          </li>
        </ul>
      </div>

      <div className="method-explanations">
        <h3>Animation Methods:</h3>
        <div className="methods">
          <div className="method">
            <h4>
              <code>gsap.to()</code>
            </h4>
            <p>
              Animates an element <strong>to</strong> new values. Start from
              where it is now, end at the values you specify.
            </p>
          </div>
          <div className="method">
            <h4>
              <code>gsap.from()</code>
            </h4>
            <p>
              Animates an element <strong>from</strong> temporary values back to
              its current position. Useful for "fly-in" effects.
            </p>
          </div>
          <div className="method">
            <h4>
              <code>gsap.fromTo()</code>
            </h4>
            <p>
              Animates <strong>from</strong> one set of values{" "}
              <strong>to</strong> another. You control both the starting point
              and destination.
            </p>
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={playTo}>to()</button>
        <button onClick={playFrom}>from()</button>
        <button onClick={playFromTo}>fromTo()</button>
        <button onClick={reset} className="ghost">
          Reset
        </button>
      </div>

      <p className="hint">
        Try each button to see how GSAP to, from, and fromTo behave differently.
      </p>

      <div className="stage">
        <div ref={boxRef} className="box" />
        <div ref={circleRef} className="circle" />
      </div>
    </div>
  );
};
