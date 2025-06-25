import React, { useEffect } from "react";
import investsevice from "../assets/images/investsevice.png";
import investmeantbg from "../assets/images/investmeantbg.png";
import investmeanticon from "../assets/icons/investmeanticon.svg";
import ServiceCard from "../components/ServiceCard";

const InvestmentServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Mutual Fund",
      description:
        "Diverse, research-backed mutual fund portfolios tailored to your risk profile and financial goals.",
    },
    {
      title: "Bonds",
      description:
        "Fixed-income securities that provide steady returns with minimal risk - ideal for conservative investors.",
    },
    {
      title: "Fixed Deposits",
      description:
        "Safe and stable investment option with guaranteed returns and flexible tenures.",
    },
    {
      title: (
        <>
          PMS <span>(Portfolio Management Services)</span>
        </>
      ),
      description:
        "Professionally managed, customized portfolios for high-net-worth individuals seeking personalized strategies.",
    },
    {
      title: (
        <>
          AIF <span>(Alternative Investment Funds)</span>
        </>
      ),
      description:
        "Exclusive investment vehicles for sophisticated investors - includes private equity, hedge funds, and more.",
    },
    {
      title: (
        <>
          SIF <span>(Specialised Investment Funds)</span>
        </>
      ),
      description:
        "A Specialised Investment Fund (SIF) is a new type of investment fund in India designed to bridge the gap between mutual funds and portfolio management services (PMS). SIFs are primarily targeted at sophisticated investors with a higher risk appetite.",
    },
    {
      title: "Retirement Planning",
      description:
        "Comprehensive planning to ensure your post-retirement life is financially secure and stress-free.",
    },
    {
      title: "Goal-Based Planning",
      description:
        "Plan for specific life milestones like education, marriage, or a dream home with precision-driven strategies.",
    },
    {
      title: "Claim the Unclaimed",
      description:
        "Recover lost or forgotten investments of yours & your Ancestors and make dormant assets work for you again.",
    },
    {
      title: "Loan Against Mutual Fund",
      description:
        "Get liquidity without liquidating - borrow against your mutual fund holdings at attractive rates.",
    },
    {
      title: "Will & Estate Planning",
      description:
        "Secure your legacy with structured, legally sound estate plans and wills tailored to your family’s needs.",
    },
  ];

  return (
    <>
      <div
        className="about-banner-section py-16 text-center bg-gray-100 relative"
        style={{
          backgroundImage: `url(${investmeantbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-[70px] font-bold text-[#fff]">
            Investment Services
          </h1>
          <p className="text-[26px] mt-4 text-gray-600 text-[#fff]">
            Home / Services
          </p>
        </div>
      </div>

      <div className="investmeant-services">
        <div className="wealthy-container">
          <div className="investmeant-services-innerdetail">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={investsevice}
                alt="service image"
                icon={investmeanticon}
                iconAlt="service icon"
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentServices;
