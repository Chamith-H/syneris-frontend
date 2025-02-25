import "../../../../styles/pages/home/contents/SapS4Hana.css";
import sapB1 from "../../../../assets/images/home/sapS4.png";

export const SapS4Hana = () => {
  return (
    <div className="SapS4Hana px-4 py-4 px-md-5 py-md-5">
      <div className="py-4">
        <p className="mb-0 info-tag">SAP S/4HANA</p>
        <h3 className="main-t-all">THE INTELLIGENT ERP FOR THE DIGITAL AGE</h3>

        <p className="sap-description">
          SAP S/4HANA is an intelligent, next-generation ERP suite designed to
          help large enterprises and fast-growing businesses drive digital
          transformation. Built on an advanced in-memory database, SAP S/4HANA
          enables real-time analytics, streamlined business processes, and
          enhanced automation powered by AI and machine learning. Whether
          managing finance, supply chain, manufacturing, or customer experience,
          SAP S/4HANA delivers the agility, scalability, and innovation needed
          to thrive in the digital economy.
        </p>

        <div className="d-flex w-100 flex-column align-items-between flex-md-row justify-content-md-between align-items-md-end mt-4">
          <div className="d-flex align-items-center">
            <img className="b1Img-s4" src={sapB1} alt="sapb1" />
          </div>

          <div className="d-flex justify-content-end">
            <a href="/sap-s4-hana" className="mt-4 mt-md-0">
              Learn More <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
