import { useState } from "react";
import { ServiceCard, Servidescripton } from "../index";
export default function OurServices() {
  const serviceData = [
    {
      label: "Air",
      description:
        "We offer a wide range of air freight solutions worldwide, with a strong focus on shipments from . Partnering with multiple leading airlines, we provide competitive rates and ensure fast, secure delivery for all types of shipment packaging – including boxes, pallets, cartons, and more.",
      highlights: [
        {
          hl: "Global Reach: Extensive international air freight network, specializing in efficient shipments from Southeast Asia, Europe, and Middle East.",
        },
        {
          hl: "Competitive Pricing: Access to multiple leading airlines enables cost-effective solutions for diverse shipping needs.",
        },
        {
          hl: "Fast & Secure Delivery: Reliable, time-sensitive transportation with strict schedules and secure handling for all types of packaging. ",
        },
        {
          hl: "Advanced Technology: Real-time tracking and digital tools provide live updates and complete visibility throughout the shipping process.",
        },
        {
          hl: "Streamlined Operations: Efficient documentation and seamless customs clearance ensure smooth, hassle-free shipments from origin to destination. ",
        },
      ],
    },
    {
      label: "Domestic",
      description:
        "We offer reliable trucking and trailer freight services across a wide range of states, maintaining the highest quality standards. With a strong network of trusted partners and carriers, we ensure timely and secure deliveries for all types of cargo.Our extensive coordination and management capabilities allow us to offer flexible and efficient transportation solutions tailored to your business needs.",
      highlights: [
        {
          hl: "Door-to-Door Transportation: Specialized pickup and delivery services, including dedicated Full Truckload (FTL) solutions for seamless end-to-end logistics.",
        },
        {
          hl: "Flexible PTL Services: Cost-effective Part Truckload (PTL) options for smaller or shared shipments without compromising reliability.",
        },
        {
          hl: "Customized Logistics Solutions: Tailor-made transportation plans designed to meet each client's unique cargo and delivery requirements.",
        },
        {
          hl: "Nationwide Support: Professional assistance and operational support across India, ensuring dependable service wherever your cargo needs to go.",
        },
        {
          hl: "Experienced Operations Team: Skilled logistics professionals dedicated to efficient planning, coordination, and on-time delivery for smooth transportation.",
        },
      ],
    },
    {
      label: "Ocean",
      description:
        "Our ocean freight solutions are optimized for efficiency and reliability, ensuring your goods are transported by sea with care and precision. We work hard to keep shipments on schedule and costs under control. With careful cargo handling and clear communication, we make sure your deliveries arrive safely and on time.",
      highlights: [
        {
          hl: "Timely Deliveries: Strict adherence to schedules with minimized delays from weather, port congestion, or customs.",
        },
        {
          hl: "Cost-Effective Solutions: Competitive pricing through smart route planning, cargo consolidation (LCL/FCL), and optimized operations.",
        },
        {
          hl: "Efficient Cargo Handling: Fast loading/unloading, proper stowage, and reduced turnaround times to protect your cargo.",
        },
        {
          hl: "Streamlined Documentation: Quick, accurate paperwork and compliance with international shipping regulations for smooth customs clearance.",
        },
        {
          hl: "Real-Time Tracking: Up-to-date cargo status and transparent communication for complete shipment visibility.",
        },
      ],
    },
  ];
  const [description, setDescription] = useState("");

  return (
    <div className="flex min-h-screen gap-2">
      {/* images */}
      <div className="w-1/3">
        {serviceData.map((item) => (
          <div onClick={() => {setDescription(item); scrollTo({top:0, behavior:"smooth"})}} key={item.label}>
            <ServiceCard label={item.label} />
          </div>
        ))}
      </div>
      <div className="w-2/3">
          <Servidescripton description={description} />
      </div>
    </div>
  );
}
