import "../../../../styles/pages/home/contents/Industries.css";
import lifeGif from "../../../../assets/images/gif/lifeScience.gif";
import manufacture from "../../../../assets/images/gif/manufacture.gif";
import delivery from "../../../../assets/images/gif/delivery.gif";
import pService from "../../../../assets/images/gif/service.gif";

export const Industries = () => {
  return (
    <div className="Industries px-4 py-4 px-md-5 py-md-5">
      <div className="pt-4">
        <p className="mb-0 info-tag">INDUSTRIES WE SUPPORT</p>
        <h3>
          TAILORED INDUSTRY SOLUTIONS THAT DRIVE EFFICIENCY, INNOVATION, AND
          SUSTAINABLE GROWTH
        </h3>

        <p className="industry-des">
          We provide ERP and softare solutions tailored to the specific needs of
          your industry. Our customized services empower businesses across
          various sectors to unlock growth, enhance efficiency, and drive
          innovation. Discover how our solutions can fuel your success with a
          focus on your unique industry requirements.
        </p>

        <div className="row mt-4 gx-4 gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="industry-card px-3 py-4">
              <img src={manufacture} alt="gif" className="industryGif" />
              <p className="mt-3">Manufacturing</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="industry-card px-3 py-4">
              <img src={delivery} alt="gif" className="industryGif" />
              <p className="mt-3">Trading & Distribution</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="industry-card px-3 py-4">
              <img src={pService} alt="gif" className="industryGif" />
              <p className="mt-3">Professional Services</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="industry-card px-3 py-4">
              <img src={lifeGif} alt="gif" className="industryGif" />
              <p className="mt-3">Life Sciences</p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <a href="/industries">
            Learn More <span>&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
