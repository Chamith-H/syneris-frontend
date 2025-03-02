import "../../../../styles/pages/home/contents/Industries.css";

export const Industries = () => {
  return (
    <div className="Industries px-4 py-4 px-md-5 py-md-5">
      <div className="pt-4">
        <p className="mb-0 info-tag">INDUSTRIES WE SUPPORT</p>
        <h3 className="main-t-all">
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
              <img
                src="/assets/images/gif/manufacture.gif"
                alt="gif"
                className="industryGif"
              />
              <p className="mt-3">Manufacturing</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="industry-card px-3 py-4">
              <img
                src="/assets/images/gif/delivery.gif"
                alt="gif"
                className="industryGif"
              />
              <p className="mt-3">Trading & Distribution</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="industry-card px-3 py-4">
              <img
                src="/assets/images/gif/service.gif"
                alt="gif"
                className="industryGif"
              />
              <p className="mt-3">Professional Services</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="industry-card px-3 py-4">
              <img
                src="/assets/images/gif/lifeScience.gif"
                alt="gif"
                className="industryGif"
              />
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
