import "../../../../styles/pages/industry/contents/IndustryOption.css";

export const IndustryOption = () => {
  return (
    <div className="IndustryOption px-4 px-md-5 py-5">
      {/* <div className="py-4">
        <p className="mb-0 info-tag">TAILORED INDUSTRY SOLUTIONS</p>
        <h3 className="info-ind-main">
          DRIVE EFFICIENCY, INNOVATION, AND SUSTAINABLE GROWTH
        </h3>
      </div> */}

      <div className="row gx-4 gy-4">
        <div className="col-12 col-sm-6">
          <div className="Ind-Card">
            <div className="Ind-Img">
              <img src="/assets/images/gif/manufacture.gif" alt="" />
            </div>

            <h6 className="ind-head">Manufacturing</h6>
            <p className="ind-info-des">
              We offer specialized ERP solutions designed for both Process and
              Discrete Manufacturing. Our solutions streamline key processes
              like Bill of Materials (BOM), product costing, production routing,
              by-product management, and more. From batch tracking and expiry
              management to resource capacity monitoring, we ensure your
              manufacturing operations are optimized for efficiency and
              cost-effectiveness
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="Ind-Card">
            <div className="Ind-Img">
              <img src="/assets/images/gif/delivery.gif" alt="" />
            </div>

            <h6 className="ind-head">Trading & Distribution</h6>
            <p className="ind-info-des">
              Designed for Retail, Wholesale, B2B, and Drop Shipping, our ERP
              solutions simplify the management of complex distribution
              networks. With features like branch and cost center management,
              POS systems, e-commerce integration, and mobile solutions for
              field sales teams, we deliver end-to-end capabilities that enhance
              sales, streamline inventory management, and elevate customer
              service for trading and distribution businesses.
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="Ind-Card">
            <div className="Ind-Img">
              <img src="/assets/images/gif/service.gif" alt="" />
            </div>

            <h6 className="ind-head">Professional Services</h6>
            <p className="ind-info-des">
              Designed for businesses in Financial Management and Project
              Management, our solutions focus on expense tracking, project
              budgeting, profitability analysis, and document management. We
              also offer seamless integration and scalability with third-party
              tools to ensure your business can grow and adapt as needed.
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-6">
          <div className="Ind-Card">
            <div className="Ind-Img">
              <img src="/assets/images/gif/lifeScience.gif" alt="" />
            </div>

            <h6 className="ind-head">Life Sciences</h6>
            <p className="ind-info-des">
              Whether you're in Pharmaceuticals, Biotechnology, Medical Devices,
              or Diagnostics, our ERP solutions are equipped to handle batch and
              serial tracking, expiry and manufacture date management, and
              warranty tracking. We support the unique requirements of life
              sciences companies, ensuring compliance and operational
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
