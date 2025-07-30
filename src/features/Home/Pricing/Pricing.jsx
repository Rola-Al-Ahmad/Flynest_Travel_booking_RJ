import React, { useMemo } from "react";
import Container from "../../../shared/components/atoms/Container";

import "./Pricing.css";
import PricingCard from "./components/PricingCard";

const Pricing = () => {
  const subTitle = useMemo(
    () => (
      <>
        simply choose the pricing plan <br /> thay fits you best
      </>
    ),
    []
  );

  const plans = useMemo(
    () => [
      {
        id: 1,
        name: "Basic",
        desc: "Ideal for individuals or small teams starting out",
        priceContent: {
          price: "$19",
          type: "One-time payment",
        },
        features: [
          {
            name: "Access to 10+ integrations",
          },
          {
            name: "Bulk messaging (up to 1,000)",
          },
          {
            name: "Email & chat support",
          },
          {
            name: "Online booking engine",
            disabled: true,
          },
          {
            name: "Business card scanner",
            disabled: true,
          },
        ],
        note: "No recurring fees. +2% per successful online booking",
      },
      {
        id: 2,
        name: (
          <>
            Pro <span className="popular-tag text-white">popular</span>
          </>
        ),
        desc: "Perfect for growing businesses and professionals",
        priceContent: {
          price: "$99",
          type: "One-time payment",
        },
        features: [
          {
            name: "Unlimited integrations",
          },
          {
            name: "Advanced messaging & automation",
          },
          {
            name: "Priority email support",
          },
          {
            name: "Online booking engine",
          },
          {
            name: "Business card scanner",
            disabled: true,
          },
        ],
        note: "No recurring fees. +1% per successful online booking",
      },
      {
        id: 3,
        name: "Enterprise",
        desc: "Tailored solutions for large teams or organizations",
        features: [
          {
            name: "All Pro features included",
          },
          {
            name: "Unlimited messaging & campaigns",
          },
          {
            name: "Dedicated account manager",
          },
          {
            name: "Team collaboration tools",
          },
          {
            name: "Advanced analytics & reports",
          },
          {
            name: "Online booking engine",
          },
          {
            name: "Business card scanner",
          },
        ],
        note: "Contact us for pricing and custom solutions",
      },
    ],
    []
  );
  return (
    <Container
      sectionName="pricing"
      title="package pricing plan"
      subtitle={subTitle}
      rowName="g-4"
    >
      {plans.map((item, index) => (
        <PricingCard key={index} plans={item} />
      ))}
    </Container>
  );
};

export default React.memo(Pricing);
