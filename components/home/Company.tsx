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
        scale: 1.3
      }}
      whileTap={{
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
