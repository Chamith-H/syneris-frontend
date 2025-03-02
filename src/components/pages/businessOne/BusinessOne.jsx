import "../../../styles/pages/businessOne/BusinessOne.css";

export const BusinessOne = () => {
  return (
    <div className="BusinessOne">
      <div className="SapBOneIntro">
        <div className="SapBOne-Background">
          <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
            <div className="py-5 px-4 ps-md-5 pe-md-4">
              <div className="py-4">
                <h5>SAP BUSINESS ONE</h5>
                <p className="mb-0">
                  SAP Business One is a comprehensive, integrated ERP solution
                  designed to streamline operations, improve decision-making,
                  and drive growth for small and medium-sized businesses.
                  Whether you're managing inventory, finances, or production,
                  SAP Business One provides the tools you need to take your
                  business to the next level
                </p>
                <img
                  className="b1Logo-Sub mt-4"
                  src="/assets/images/home/sapB1.png"
                  alt="sap-b1"
                />
              </div>
            </div>

            <div className="d-flex d-lg-none w-100 justify-content-center">
              <img
                className="sap-mobi-img"
                src="/assets/images/sap/sapMobiBack.webp"
                alt=""
              />
            </div>

            <div className="d-lg-flex justify-content-end align-items-end pt-lg-5 d-none ">
              <img
                className="sap-com-img"
                src="/assets/images/sap/sapBack.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="BusinessOneOptions px-4 py-5 px-md-5">
        <div className="row gx-4 gy-4">
          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src="/assets/images/sap/operations.gif" alt="" />
              </div>

              <h6 className="ind-head">Streamlined Operations</h6>
              <p className="ind-info-des">
                SAP Business One automates and integrates key business
                processes, reducing manual tasks and improving efficiency. From
                financials to inventory management, everything works seamlessly
                together, giving you more time to focus on growing your
                business.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src="/assets/images/sap/realTime.gif" alt="" />
              </div>

              <h6 className="ind-head">Real-Time Insights</h6>
              <p className="ind-info-des">
                Gain real-time visibility into every aspect of your business.
                SAP Business One’s powerful reporting tools and dashboards
                provide actionable insights, allowing you to make data-driven
                decisions faster and with greater confidence.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src="/assets/images/sap/scalability.gif" alt="" />
              </div>

              <h6 className="ind-head">Scalability and Flexibility</h6>
              <p className="ind-info-des">
                As your business grows, SAP Business One grows with you. The
                solution can be easily customized and scaled to meet evolving
                business needs, supporting expansion into new markets and
                increased operational complexity.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src="/assets/images/sap/cost.gif" alt="" />
              </div>

              <h6 className="ind-head">Cost Efficiency</h6>
              <p className="ind-info-des">
                Reduce operating costs by improving processes, optimizing
                inventory, and minimizing waste. SAP Business One helps you keep
                costs in check, while improving profitability and cash flow
                management.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="Ind-Card">
              <div className="Ind-Img">
                <img src="/assets/images/sap/tools.gif" alt="" />
              </div>

              <h6 className="ind-head mb-0">Integration with Key Tools</h6>
              <p className="ind-info-des mt-0">
                SAP Business One easily integrates with other tools and systems,
                allowing your business to operate efficiently across
                departments. It also supports third-party integrations to
                further extend your system’s capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
