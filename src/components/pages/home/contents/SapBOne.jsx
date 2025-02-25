import "../../../../styles/pages/home/contents/SapBOne.css";
import sapB1 from "../../../../assets/images/home/sapB1.png";

export const SAPBOne = () => {
  return (
    <div className="SapBOne px-4 py-4 px-md-5 py-md-5">
      <div className="py-4">
        <p className="mb-0 info-tag">SAP BUSINESS ONE</p>
        <h3>THE COMPLETE ERP SOLUTION FOR GROWING BUSINESSES</h3>

        <p className="sap-description">
          SAP Business One is a comprehensive, integrated ERP solution designed
          to streamline operations, improve decision-making, and drive growth
          for small and medium-sized businesses. Whether you're managing
          inventory, finances, or production, SAP Business One provides the
          tools you need to take your business to the next level.
        </p>

        <div className="d-flex w-100 flex-column align-items-between flex-md-row justify-content-md-between align-items-md-end mt-4">
          <div className="d-flex align-items-center">
            <img className="b1Img" src={sapB1} alt="sapb1" />
          </div>

          <div className="d-flex justify-content-end">
            <a href="/sap-business-one" className="mt-4 mt-md-0">
              Learn More <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
