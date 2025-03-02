import "../../../../styles/pages/home/contents/SapS4Hana.css";
import sapB1 from "../../../../assets/images/home/sapS4.png";
import b1Img from "../../../../assets/images/sap/s4Home.png";

export const SapS4Hana = () => {
  return (
    <div className="SapS4Hana px-4 py-4 px-md-5 py-md-5">
      <div className="py-4">
        <p className="mb-0 info-tag">SAP S/4HANA PUBLIC CLOUD</p>
        <h3 className="main-t-all">THE INTELLIGENT ERP FOR THE DIGITAL AGE</h3>

        <div className="d-lg-flex mt-4 pt-2">
          <div className="d-flex justify-content-center justify-cotent-lg-start">
            <img src={b1Img} className="s4ImgHome" alt="" />
          </div>

          <div className="ps-lg-5 mt-4 mt-lg-0">
            <div className="ps-lg-5">
              <p className="sap-description">
                SAP S/4HANA is an intelligent, next-generation ERP suite
                designed to help large enterprises and fast-growing businesses
                drive digital transformation. Built on an advanced in-memory
                database, SAP S/4HANA enables real-time analytics, streamlined
                business processes, and enhanced automation powered by AI and
                machine learning. Whether managing finance, supply chain,
                manufacturing, or customer experience, SAP S/4HANA delivers the
                agility, scalability, and innovation needed to thrive in the
                digital economy.
              </p>

              <div className="d-flex align-items-center">
                <img className="b1Img" src={sapB1} alt="sapb1" />
              </div>
            </div>

            <div className="d-flex w-100 justify-content-end mt-lg-5">
              <div className="d-flex justify-content-end">
                <a href="/sap-s4-hana" className="mt-4 mt-md-0">
                  Learn More <span>&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
