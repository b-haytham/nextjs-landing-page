import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import LazyMount from "react-lazy-mount";

interface AnimatedTextProps {
  componentName: string;
}

const variants = {
  hidden: {
    y: -150,
    opacity: 0,
    scale: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

export const MountLazy: React.FC = ({ children }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}>
      <LazyMount trigger={inView}>{children}</LazyMount>
    </div>
  );
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  componentName,
}) => {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView({});

  console.log(componentName, "--", inView);

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
