import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedListProps {
    indx: number
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

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: (i: number)=> ({
      opacity: 1,
      transition: {
        delay: i * 0.8,
      },
    }),
    hidden: { opacity: 0 },
  }

const AnimatedListItem: React.FC<AnimatedListProps> = ({
    children,
    indx
  }) => {
    const controls = useAnimation();
    const { ref, inView, entry } = useInView({});
  
  
    useEffect(() => {
            controls.start("visible");
    }, [inView]);
  
    return (
      <div ref={ref}>
      {inView && <motion.div
        custom={indx}
        layout
        
        variants={item}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div> }
      </div>
    );
  };
  
  export default AnimatedListItem;
  