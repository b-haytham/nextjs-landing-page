import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useGreaterThan from "../../utils/useGreaterThan";
import AnimatedListCard from "../Animated/AnimatedPricingCard";
import PricingCard from "./PricingCard";

interface PricingListProps {
  showTitle?: boolean;
  animate?: boolean;
}

const PricingList: React.FC<PricingListProps> = ({ showTitle, animate }) => {
  const { theme } = useContext(ThemeContext);
  const isGreaterThan = useGreaterThan(1000);
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

      <Flex
        alignItems="center"
        marginTop={20}
        justifyContent="space-evenly"
        wrap="wrap"
      >
        {isGreaterThan ? (
          <>
            <AnimatedListCard indx={0.5}>
              <PricingCard
                planName="Free Plan"
                planPrice={0}
                features={["feature one", "feature two", "feature three"]}
              />
            </AnimatedListCard>
            <AnimatedListCard indx={0.5}>
              <PricingCard
                planName="Pro"
                planPrice={50}
                features={["feature one", "feature two", "feature three"]}
                isPro
              />
            </AnimatedListCard>
            <AnimatedListCard indx={0.5}>
              <PricingCard
                planName="Entreprise"
                planPrice={100}
                features={["feature one", "feature two", "feature three"]}
              />
            </AnimatedListCard>
          </>
        ) : (
          <>
            <PricingCard
              planName="Free Plan"
              planPrice={0}
              features={["feature one", "feature two", "feature three"]}
            />
            <PricingCard
              planName="Pro"
              planPrice={50}
              features={["feature one", "feature two", "feature three"]}
              isPro
            />
            <PricingCard
              planName="Entreprise"
              planPrice={100}
              features={["feature one", "feature two", "feature three"]}
            />
          </>
        )}
      </Flex>
    </Box>
  );
};

export default PricingList;
