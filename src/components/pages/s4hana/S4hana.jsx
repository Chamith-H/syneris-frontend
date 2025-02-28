import "../../../styles/pages/s4hana/s4hana.css";
import b1Logo from "../../../assets/images/home/sapS4.png";
import sapCom from "../../../assets/images/sap/s4Back.webp";
import sapMobil from "../../../assets/images/sap/s4Mobi.webp";

import practise from "../../../assets/images/sap/practise.gif";
import innovation from "../../../assets/images/sap/innovation.gif";
import fast from "../../../assets/images/sap/fast.gif";
import update from "../../../assets/images/sap/update.gif";
import security from "../../../assets/images/sap/security.gif";
import integrate from "../../../assets/images/sap/integrate.gif";

export const S4Hana = () => {
  return (
    <div className="S4Hana">
      <div className="SapS4HanaIntro">
        <div className="SapS4Hana-Background">
          <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
            <div className="py-5 px-4 ps-md-5 pe-md-4">
              <div className="py-4">
                <h5>SAP S4HANA PUBLIC CLOUD</h5>
                <p className="mb-0">
                  SAP S/4HANA is an intelligent, next-generation ERP suite
                  designed to help large enterprises and fast-growing businesses
                  drive digital transformation. Built on an advanced in-memory
                  database, SAP S/4HANA enables real-time analytics, streamlined
                  business processes, and enhanced automation powered by AI and
                  machine learning. Whether managing finance, supply chain,
                  manufacturing, or customer experience, SAP S/4HANA delivers
                  the agility, scalability, and innovation needed to thrive in
                  the digital economy.
                </p>
                <img className="b1Logo-Sub mt-4" src={b1Logo} alt="sap-b1" />
              </div>
            </div>

            <div className="d-flex d-lg-none w-100 justify-content-center">
              <img className="sap-mobi-img" src={sapMobil} alt="" />
            </div>

            <div className="d-lg-flex justify-content-end align-items-end pt-lg-5 d-none ">
              <img className="sap-com-img" src={sapCom} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="S4HanaOptions px-4 py-5 px-md-5">
        <div className="row gx-4 gy-4">
          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src={practise} alt="" />
              </div>

              <h6 className="ind-head">Proven Best Practices</h6>
              <p className="ind-info-des">
                Comes with business processes that incorporate industry standard
                best practices.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src={fast} alt="" />
              </div>

              <h6 className="ind-head">Fast Time to Value</h6>
              <p className="ind-info-des">
                Jump-starts you with a guided implementation process, fast
                technical setup, and a role-based, intuitive interface.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src={update} alt="" />
              </div>

              <h6 className="ind-head">Automatic and Continual Updates</h6>
              <p className="ind-info-des">
                Updates fully managed by SAP so you don’t need extensive IT
                resources or face disruption to the business.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src={innovation} alt="" />
              </div>

              <h6 className="ind-head">Continuous Innovation</h6>
              <p className="ind-info-des">
                Adds the latest technology, such as built-in AI, machine
                learning, robotic process automation, and analytics so your
                business can operate better.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src={security} alt="" />
              </div>

              <h6 className="ind-head mb-0">
                Security, Compliance, and Scalability
              </h6>
              <p className="ind-info-des mt-0">
                Handles technical operations including backup and disaster
                recovery, system maintenance, data protection, and best-in-class
                uptimes to give you peace of mind.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src={integrate} alt="" />
              </div>

              <h6 className="ind-head mb-0">Open and Extensible</h6>
              <p className="ind-info-des mt-0">
                Provides ready-to-go APIs with supporting tools and
                documentation so you can easily integrate with your partners or
                build on top.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
