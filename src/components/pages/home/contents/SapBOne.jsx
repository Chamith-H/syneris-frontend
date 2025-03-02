import "../../../../styles/pages/home/contents/SapBOne.css";

export const SAPBOne = () => {
  return (
    <div className="SapBOne px-4 py-4 px-md-5 pt-md-5 py-md-0">
      <div className="py-4">
        <p className="mb-0 info-tag">SAP BUSINESS ONE</p>
        <h3 className="main-t-all">
          THE COMPLETE ERP SOLUTION FOR GROWING BUSINESSES
        </h3>

        <div className="d-lg-flex mt-4 pt-2">
          <div className="d-flex justify-content-center align-items-start justify-cotent-lg-start">
            <img
              src="/assets/images/sap/b1Home.png"
              className="b1ImgHome"
              alt=""
            />
          </div>

          <div className="ps-lg-5 mt-5 mt-lg-0">
            <div className="ps-lg-5">
              <p className="sap-description">
                SAP Business One is a comprehensive, integrated ERP solution
                designed to streamline operations, improve decision-making, and
                drive growth for small and medium-sized businesses. Whether
                you're managing inventory, finances, or production, SAP Business
                One provides the tools you need to take your business to the
                next level.
              </p>

              <div className="d-flex align-items-center">
                <img
                  className="b1Img"
                  src="/assets/images/home/sapB1.png"
                  alt="sapb1"
                />
              </div>
            </div>

            <div className="d-flex w-100 justify-content-end mt-lg-5">
              <div className="d-flex justify-content-end">
                <a href="/sap-business-one" className="mt-4 mt-md-0">
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
