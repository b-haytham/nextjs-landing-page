import { Box, Heading } from "@chakra-ui/react";

import FaqQ from "react-faq-component";

const Faq = () => {
	return (
		<>
			<Heading marginY={10} textAlign="center">
				Frequently Asked Questions (FAQ)
			</Heading>
			<Box minH="100vh" paddingX={20} paddingY={20} marginY={50}>
				<FaqQ data={data} styles={styles} />
			</Box>
		</>
	);
};

const styles = {
	rowTitleTextSize: "1.5rem",
	rowTitleColor: "grey",
	rowContentPaddingTop: "10px",
	rowContentPaddingBottom: "50px",
	rowContentPaddingLeft: "10px",
};

const data = {
	title: "How it works",

	rows: [
		{
			title: "Lorem ipsum dolor sit amet,",
			content:
				"Lorem ipsum dolor sit amet, consectetur Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
		},
		{
			title: "Nunc maximus, magna at ultricies elementum",
			content:
				"Lorem ipsum dolor sit amet, consectetur Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam",
		},
		{
			title: "Curabitur laoreet, mauris vel blandit fringilla",
			content:
				"Lorem ipsum dolor sit amet, consectetur Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam",
		},
		{
			title: "What is the package version",
			content:
				"Lorem ipsum dolor sit amet, consectetur Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam",
		},
		{
			title: "Nunc maximus, magna at ultricies elementum",
			content:
				"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
		},
		{
			title: "Curabitur laoreet, mauris vel blandit fringilla",
			content:
				"Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
		},
		{
			title: "What is the package version",
			content: "v1.0.5",
		},
	],
};

export default Faq;
