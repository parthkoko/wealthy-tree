import React, { useEffect } from "react";
import investmeantbg from "../assets/images/investmeantbg.png";
import investmeanticon from "../assets/icons/investmeanticon.svg";
import investsevice from "../assets/images/investsevice.png";
import bondsimg from "../assets/images/bondsimg.png";
import depositimg from "../assets/images/depositimg.png";
import pmsimg from "../assets/images/pmsimg.png";
import aifimg from "../assets/images/aifimg.png";
import sifimg from "../assets/images/sifimg.png";
import planningimg from "../assets/images/planningimg.png";
import goalimg from "../assets/images/goalimg.png";
import claimimg from "../assets/images/claimimg.png";
import loanfoundimg from "../assets/images/loanfoundimg.png";
import estateimg from "../assets/images/estateimg.png";
import bonds from "../assets/icons/bonds.svg";
import mutualfond from "../assets/icons/mutualfond.svg";
import deposit from "../assets/icons/deposit.svg";
import pms from "../assets/icons/pms.svg";
import aif from "../assets/icons/aif.svg";
import sif from "../assets/icons/sif.svg";
import planning from "../assets/icons/planning.svg";
import goal from "../assets/icons/goal.svg";
import claim from "../assets/icons/claim.svg";
import loanfound from "../assets/icons/loanfound.svg";
import estate from "../assets/icons/estate.svg";
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
      image: investsevice,
      icon:mutualfond,
    },
    {
      title: "Bonds",
      description:
        "Fixed-income securities that provide steady returns with minimal risk - ideal for conservative investors.",
        image: bondsimg,
      icon: bonds,
    },
    {
      title: "Fixed Deposits",
      description:
        "Safe and stable investment option with guaranteed returns and flexible tenures.",
       image: depositimg,
      icon: deposit,
    },
    {
      title: (
        <>
          PMS <span>(Portfolio Management Services)</span>
        </>
      ),
      description:
        "Professionally managed, customized portfolios for high-net-worth individuals seeking personalized strategies.",
        image: pmsimg,
      icon: pms,
    },
    {
      title: (
        <>
          AIF <span>(Alternative Investment Funds)</span>
        </>
      ),
      description:
        "Exclusive investment vehicles for sophisticated investors - includes private equity, hedge funds, and more.",
        image: aifimg,
      icon: aif,
    },
    {
      title: (
        <>
          SIF <span>(Specialised Investment Funds)</span>
        </>
      ),
      description:
        "A Specialised Investment Fund (SIF) is a new type of investment fund in India designed to bridge the gap between mutual funds and portfolio management services (PMS). SIFs are primarily targeted at sophisticated investors with a higher risk appetite.",
       image: sifimg,
      icon: sif,
    },
    {
      title: "Retirement Planning",
      description:
        "Comprehensive planning to ensure your post-retirement life is financially secure and stress-free.",
        image: planningimg,
      icon: planning,
    },
    {
      title: "Goal-Based Planning",
      description:
        "Plan for specific life milestones like education, marriage, or a dream home with precision-driven strategies.",
        image: goalimg,
      icon: goal,
    },
    {
      title: "Claim the Unclaimed",
      description:
        "Recover lost or forgotten investments of yours & your Ancestors and make dormant assets work for you again.",
       image: claimimg,
      icon: claim,
    },
    {
      title: "Loan Against Mutual Fund",
      description:
        "Get liquidity without liquidating - borrow against your mutual fund holdings at attractive rates.",
      image: loanfoundimg,
      icon: loanfound,
    },
    {
      title: "Will & Estate Planning",
      description:
        "Secure your legacy with structured, legally sound estate plans and wills tailored to your family’s needs.",
        image: estateimg,
      icon: estate,
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
                image={service.image}
                alt="service image"
                icon={service.icon}
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
