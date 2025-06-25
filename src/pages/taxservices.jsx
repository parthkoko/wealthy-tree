import React, { useEffect } from "react";
import investsevice from "../assets/images/investsevice.png";
import taxbg from "../assets/images/taxbg.png";
import incomtextimg from "../assets/images/incomtextimg.png";
import gstimg from "../assets/images/gstimg.png";
import rocimg from "../assets/images/rocimg.png";
import auditimg from "../assets/images/auditimg.png";
import otherservicesimg from "../assets/images/otherservicesimg.png";
import investmeanticon from "../assets/icons/investmeanticon.svg";
import texticon from "../assets/icons/texticon.svg";
import gst from "../assets/icons/gst.svg";
import roc from "../assets/icons/roc.svg";
import auditicon from "../assets/icons/auditicon.svg";
import otherservices from "../assets/icons/otherservices.svg";
import ServiceCard from "../components/ServiceCard";

const TaxServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const taxAndFinancialServices = [
    {
      title: "Income Tax",
      description:
        "Expert income tax planning, filing, and compliance to optimize your tax liabilities.",
      image: incomtextimg,
      icon: texticon,
    },
    {
      title: "GST",
      description:
        "Complete GST registration, filing, and advisory services to keep your business compliant.",
        image: gstimg,
      icon: gst,
    },
    {
      title: (
        <>
          ROC <span>(Registrar of Companies)</span>
        </>
      ),
      description:
        "Company compliance, filings, annual returns, and director-related services under one roof.",
         image: rocimg,
      icon: roc,
    },
    {
      title: "Audit",
      description:
        "Ensure financial transparency and compliance with our expert audit solutions. From statutory to internal audits, we deliver accuracy you can trust.",
         image: auditimg,
      icon: auditicon,
    },
    {
      title: "Other Financial Services",
      description:
        "Customized financial solutions including advisory, and compliance services for individuals and enterprises.",
         image: otherservicesimg,
      icon: otherservices,
    },
  ];

  return (
    <>
      <div
        className="about-banner-section py-16 text-center bg-gray-100 relative"
        style={{
          backgroundImage: `url(${taxbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-[70px] font-bold text-[#fff]">Tax Services</h1>
          <p className="text-[26px] mt-4 text-[#fff]">Home / Services</p>
        </div>
      </div>
      <div className="investmeant-services">
        <div className="wealthy-container">
          <div className="investmeant-services-innerdetail">
            {taxAndFinancialServices.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                alt="tax service image"
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

export default TaxServices;
