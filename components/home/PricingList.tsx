import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useCallback, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useGreaterThan from "../../utils/useGreaterThan";
import AnimatedListCard from "../Animated/AnimatedPricingCard";
import PricingCard from "./PricingCard";

interface PricingListProps {
  showTitle?: boolean;
  animate?: boolean;
}

const gridColumn = (greaterThan764: boolean, greaterThan1400: boolean) => {
 if(greaterThan764 && !greaterThan1400) {
   return 2 
 }else if(!greaterThan1400 && !greaterThan764) {
   return 1
 }else {
   return 4
 }
}

const PricingList: React.FC<PricingListProps> = ({ showTitle, animate }) => {
  const { theme } = useContext(ThemeContext);
  const isGreaterThan1000 = useGreaterThan(1000);
  const isGreaterThan1400 = useGreaterThan(1400);
  const isGreaterThan764 = useGreaterThan(764);

  const getGridColumnNumber = useCallback((Than764: boolean, than1400)=> {
    return gridColumn(Than764, than1400)
  }, [isGreaterThan1400, isGreaterThan764])

  return (
    <Box>
      {showTitle && (
        <Heading
          marginY={10}
          textAlign="center"
          color={theme === "DARK" && "#d1d1d1"}
        >
          Pricing
        </Heading>
      )}

      {/* <Flex
        alignItems="center"
        marginTop={20}
        justifyContent="space-evenly"
        wrap="wrap"
      > */}
      <SimpleGrid columns={getGridColumnNumber(isGreaterThan764, isGreaterThan1400)} justifyItems='center'>
        {isGreaterThan1000 ? (
          <>
            <AnimatedListCard minHeightPlaceholder={400} indx={0.2}>
              <PricingCard
                planName="Free Plan"
                planPrice={0}
                features={["feature one", "feature two", "feature three"]}
              />
            </AnimatedListCard>
            <AnimatedListCard minHeightPlaceholder={400} indx={0.4}>
              <PricingCard
                planName="Pro"
                planPrice={50}
                features={["feature one", "feature two", "feature three"]}
                isPro
              />
            </AnimatedListCard>

            <AnimatedListCard minHeightPlaceholder={400} indx={0.6}>
              <PricingCard
                planName="Entreprise"
                planPrice={100}
                features={["feature one", "feature two", "feature three"]}
              />
            </AnimatedListCard>
            <AnimatedListCard minHeightPlaceholder={400} indx={0.7}>
              <PricingCard
                planName="Custom"
                planPrice={50}
                features={["feature one", "feature two", "feature three"]}
              />
            </AnimatedListCard>
          </>
        ) : (
          <>
          <AnimatedListCard minHeightPlaceholder={400} indx={0.2}>
            <PricingCard
              planName="Free Plan"
              planPrice={0}
              features={["feature one", "feature two", "feature three"]}
            />
            </AnimatedListCard>
            <AnimatedListCard minHeightPlaceholder={400} indx={0.2}>
            <PricingCard
              planName="Pro"
              planPrice={50}
              features={["feature one", "feature two", "feature three"]}
              isPro
            />
            </AnimatedListCard>
            <AnimatedListCard minHeightPlaceholder={400} indx={0.2}>
            <PricingCard
              planName="Entreprise"
              planPrice={100}
              features={["feature one", "feature two", "feature three"]}
            />
            </AnimatedListCard>
            <AnimatedListCard minHeightPlaceholder={400} indx={0.2}>
            <PricingCard
                planName="Custom"
                planPrice={50}
                features={["feature one", "feature two", "feature three"]}
              />
              </AnimatedListCard>
          </>
        )}
        </SimpleGrid>
      {/* </Flex> */}
    </Box>
  );
};

export default PricingList;
