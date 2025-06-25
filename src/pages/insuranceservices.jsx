import React, { useEffect } from "react";
import investsevice from "../assets/images/investsevice.png";
import insurancebg from "../assets/images/insurancebg.png";
import investmeanticon from "../assets/icons/investmeanticon.svg";
import ServiceCard from "../components/ServiceCard";

const InsuranceServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const insuranceServices = [
    {
      title: "Life Insurance",
      description:
        "Ensure your family’s financial safety even in your absence. We help you choose the right term and endowment plans.",
    },
    {
      title: "Health Insurance",
      description:
        "Stay protected from rising medical costs with customized health coverage that fits your lifestyle.",
    },
    {
      title: "General Insurance",
      description:
        "Safeguard your assets - home, travel, vehicles, and more - with the right general insurance plans.",
    },
  ];

  return (
    <>
      <div
        className="about-banner-section py-16 text-center bg-gray-100 relative"
        style={{
          backgroundImage: `url(${insurancebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-[70px] font-bold text-[#fff]">
            Insurance Services
          </h1>
          <p className="text-[26px] mt-4 text-[#fff]">Home / Services</p>
        </div>
      </div>
      <div className="investmeant-services">
        <div className="wealthy-container">
          <div className="investmeant-services-innerdetail">
            {insuranceServices.map((service, index) => (
              <ServiceCard
                key={index}
                image={investsevice}
                alt="insurance service image"
                icon={investmeanticon}
                iconAlt="insurance icon"
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

export default InsuranceServices;
