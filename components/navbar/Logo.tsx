import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  logoColor?: "YELLOW" | "BLUE";
}

const logoPath = (color?: "YELLOW" | "BLUE") => {
  if (!color) {
    return "/logo-yellow.png";
  }

  if (color === "YELLOW") {
    return "/logo-yellow.png";
  } else {
    return "/logo-blue.png";
  }
};

const Logo: React.FC<LogoProps> = ({ logoColor }) => {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.2, 1],
        transition: {
          repeatType: "reverse",
          repeat: Infinity,
        },
      }}
    >
      <Image src={logoPath(logoColor)} width={50} height={50} />
    </motion.div>
  );
};

export default Logo;
