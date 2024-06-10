import React, { useRef, useEffect, RefObject } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: React.ReactElement;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const magnetic: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const element = magnetic.current;
    if (!element) return;

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();

      // Adjusting the scale to reduce the effect
      const scale = 0.1; // Change this value to adjust the effect
      const x = (clientX - (left + width / 2)) * scale;
      const y = (clientY - (top + height / 2)) * scale;

      gsap.to(element, { x, duration: 1, ease: "elastic.out(1, 0.3)" });
      gsap.to(element, { y, duration: 1, ease: "elastic.out(1, 0.3)" });
    };

    const mouseLeave = () => {
      gsap.to(element, { x: 0, y: 0, duration: 1 });
    };

    element.addEventListener("mousemove", mouseMove);
    element.addEventListener("mouseleave", mouseLeave);

    return () => {
      element.removeEventListener("mousemove", mouseMove);
      element.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;
