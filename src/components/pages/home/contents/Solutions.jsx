import "../../../../styles/pages/home/contents/Solutions.css";
import erp from "../../../../assets/images/home/erp.webp";
import partners from "../../../../assets/images/home/partners.webp";
import development from "../../../../assets/images/home/development.webp";
import consulting from "../../../../assets/images/home/consulting.webp";

export const Solutions = () => {
  return (
    <div className="Solutions px-4 py-4 px-md-5 py-md-5">
      <div className="py-4">
        <p className="mb-0 info-tag">SYNERIS SOLUTIONS</p>
        <h3>YOUR STRATEGIC TECHNOLOGY PARTNER</h3>

        <div className="row mt-4 pt-md-2 gy-sm-2 gy-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="Solution-Card">
              <div className="Solution-Card-Img">
                <img src={consulting} alt="erp-image" />
              </div>
              <div className="px-3 pt-3">
                <h6>IT Consulting & Strategy</h6>
                <p>
                  We provide expert IT consulting services to help businesses
                  make strategic decisions, optimize processes, and enhance
                  overall performance with cutting-edge technology.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="Solution-Card">
              <div className="Solution-Card-Img">
                <img src={erp} alt="erp-image" />
              </div>

              <div className="px-3 pt-3">
                <h6>ERP Implementation & Support</h6>
                <p>
                  Expertise in implementing and supporting SAP Business One and
                  SAP S/4 HANA ERP solutions to streamline business operations
                  and drive efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="Solution-Card">
              <div className="Solution-Card-Img">
                <img src={development} alt="erp-image" />
              </div>

              <div className="px-3 pt-3">
                <h6>Custom Software Development</h6>
                <p>
                  We develop tailored software solutions to meet your unique
                  business needs, enhancing efficiency and scalability with
                  innovative technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="Solution-Card">
              <div className="Solution-Card-Img">
                <img src={partners} alt="erp-image" />
              </div>

              <div className="px-3 pt-3">
                <h6>Business Process Reengineering</h6>
                <p>
                  Redesign and optimize business workflows to enhance
                  productivity, ensuring seamless operations and long-term
                  growth through innovative process improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
