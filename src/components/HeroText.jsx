import React, { useRef } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(GSAPSplitText);

const HeroText = () => {
  const textRef = useRef(null);
  const texts = ["I Am Akinola Victor", "I Am Glad to Meet You"];
  let currentIndex = 0;

  useGSAP(() => {
    const animateText = (newText) => {
      // reset text
      textRef.current.textContent = newText;

      // split into characters
      const split = new GSAPSplitText(textRef.current, { type: "chars" });
      const chars = split.chars;

      // initial state
      gsap.set(chars, { opacity: 0, y: 20 });

      // animate in
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.05,
        onComplete: () => {
          gsap.delayedCall(2, () => {
            currentIndex = (currentIndex + 1) % texts.length;
            split.revert(); // revert 
            animateText(texts[currentIndex]);
          });
        },
      });
    };

    animateText(texts[currentIndex]);
  }, []);

  return (
    <p
      ref={textRef}
      className="font-semibold text-2xl home-logo lg:text-4xl text-center"
      style={{ overflow: "hidden" }}
    >
      I Am Akinola Victor
    </p>
  );
};

export default HeroText;
