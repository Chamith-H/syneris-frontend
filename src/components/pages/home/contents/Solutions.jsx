import "../../../../styles/pages/home/contents/Solutions.css";
import erp from "../../../../assets/images/home/erp.jpg";
import partners from "../../../../assets/images/home/partners.jpg";
import development from "../../../../assets/images/home/development.jpg";
import consulting from "../../../../assets/images/home/consulting.jpg";

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
                  Our team specializes in ERP solutions, ensuring seamless
                  implementation, integration, and ongoing support to improve
                  your business operations.
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
                <h6>Technology Partnerships</h6>
                <p>
                  Through our partnerships with leading software vendors, we
                  deliver state-of-the-art solutions that drive business success
                  and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
