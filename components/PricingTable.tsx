import {
	Box,
	Button,
	Table,
	Tbody,
	Td,
	Text,
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface PricingTableProps {
	isGreaterThan1000: boolean;
}

const PricingTable: React.FC<PricingTableProps> = ({}) => {
	return (
		<Box>
			<Text fontSize="1.4rem" fontWeight={700} textAlign="center" my={20}>
				Pricing Table
			</Text>

			<Box
				className="table-scroll-bar"
				px={20}
				mb={150}
				overflowX="scroll"
			>
				<Table minWidth="864px" colorScheme="orange">
					<Thead>
						<Tr>
							<Th>{""}</Th>
							<Th color="#FFD700">Free Plan</Th>
							<Th color="#277ecf">Pro</Th>
							<Th color="#FFD700">Entreprise</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>lorem ipsum</Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>

							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
						</Tr>
						<Tr>
							<Td>lorem ipsum</Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
						</Tr>
						<Tr>
							<Td>lorem ipsum</Td>
							<Td></Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
						</Tr>
						<Tr>
							<Td>lorem ipsum</Td>
							<Td></Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
						</Tr>
						<Tr>
							<Td>lorem ipsum</Td>
							<Td></Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
						</Tr>
						<Tr>
							<Td>lorem ipsum</Td>
							<Td></Td>
							<Td></Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
						</Tr>
						<Tr>
							<Td>lorem ipsum</Td>
							<Td></Td>
							<Td></Td>
							<Td>
								<AiFillCheckCircle color="green" />
							</Td>
						</Tr>
					</Tbody>
					<Tfoot>
						<Tr>
							<Th></Th>
							<Th>
								<Button
									variant="outline"
									backgroundColor={"#FFD700"}
									color={"white"}
								>
									Subscribe
								</Button>
							</Th>
							<Th>
								<Button
									variant="outline"
									backgroundColor={"#277ecf"}
									color={"white"}
								>
									Subscribe
								</Button>
							</Th>
							<Th>
								<Button
									variant="solid"
									backgroundColor={"#FFD700"}
									color={"white"}
								>
									Subscribe
								</Button>
							</Th>
						</Tr>
					</Tfoot>
				</Table>
			</Box>
		</Box>
	);
};

export default PricingTable;
