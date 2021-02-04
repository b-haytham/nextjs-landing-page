import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";

import { useInView } from "react-intersection-observer";
import LazyMount from "react-lazy-mount";

interface AnimatedTextProps {
  componentName?: string;
  translateX?: boolean
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  componentName,
  translateX
}) => {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView({});

  const variants = useMemo(()=> {
    return {
      hidden: {
        x: translateX ? 600 : 0,
        y: -150,
        opacity: 0,
        scale: 0,
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
      },
    };
  }, [translateX]) 

  useEffect(() => {
    controls.start("visible");
  }, [inView]);

  return (
    <div ref={ref}>
      {inView && (
        <motion.div variants={variants} initial="hidden" animate={controls}>
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedText;