import { Box } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";

interface CompanyProps {}

const Company: React.FC<CompanyProps & ImageProps> = ({
	src,
	width,
	height,
}) => {
	return (
		<Box margin={30}>
			<Image src={src} width={width} height={height} />
		</Box>
	);
};

export default Company;
