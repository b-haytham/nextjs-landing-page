import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface CompanyProps {}

const Company: React.FC<CompanyProps & ImageProps> = ({
  src,
  width,
  height,
}) => {
  return (
    <motion.div 
      style={{margin: 30}}
      whileHover={{
        rotateX: [-60, 60, -60],
        rotate: 360,
        scale: [1, 1.2, 1],
        transition: {
          repeatType: "reverse",
          repeat: Infinity,
        },
      }}
      whileTap={{
        rotateX: 0,
        rotate: 0,
        scale: 0.7,
        transition: {
          repeat: 0,
        },
      }}
    >
      <Image src={src} width={width} height={height} />
    </motion.div>
  );
};

export default Company;
