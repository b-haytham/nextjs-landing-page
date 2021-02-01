import FooterComponent from "rc-footer";
//#FFD700
//#FFD700
interface FooterProps {}
import { Text } from "@chakra-ui/react";
import FooterBottomComponent from "./FooterBottomComponent";

const Footer: React.FC<FooterProps> = () => {
	return (
		<FooterComponent
			columnLayout="space-around"
			backgroundColor="#FFD700"
			style={{
				borderRadius: "100px 100px 0 0",
				boxShadow: "-2px -1px 12px 0px #FFD700",
			}}
			columns={[
				{
					style: { color: "black", fontWeight: "bolder" },
					title: (
						<Text
							fontFamily="Fredoka One, cursive;"
							fontSize="1.4rem"
						>
							Column Title 1
						</Text>
					),
					items: [
						{
							title: "Title 1",
							description: "description 1",
						},
						{
							title: "Title 2",
							description: "description 2",
						},
						{
							title: "Title 3",
							description: "description 3",
						},
					],
				},
				{
					style: { color: "black", fontWeight: "bolder" },
					title: (
						<Text
							fontFamily="Fredoka One, cursive;"
							fontSize="1.4rem"
						>
							Column Title 2
						</Text>
					),
					items: [
						{
							title: "Title 1",
							description: "description 1",
						},
						{
							title: "Title 2",
							description: "description 2",
						},
						{
							title: "Title 3",
							description: "description 3",
						},
					],
				},
				{
					style: { color: "black", fontWeight: "bolder" },
					title: (
						<Text
							fontFamily="Fredoka One, cursive;"
							fontSize="1.4rem"
						>
							Column Title 3
						</Text>
					),
					items: [
						{
							title: "Title 1",
							description: "description 1",
						},
						{
							title: "Title 2",
							description: "description 2",
						},
						{
							title: "Title 3",
							description: "description 3",
						},
					],
				},
			]}
			bottom={<FooterBottomComponent />}
		/>
	);
};

export default Footer;
