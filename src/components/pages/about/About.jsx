import "../../../styles/pages/about/About.css";
import operation from "../../../assets/images/about/process.gif";
import growth from "../../../assets/images/about/growth.gif";
import innovation from "../../../assets/images/about/idea.gif";
import visionImg from "../../../assets/images/about/vision.jpg";
import valueImg from "../../../assets/images/about/values.jpg";

export const About = () => {
  return (
    <div className="About">
      <div className="AboutIntro">
        <div className="About-Background px-4 py-4 px-md-5 py-md-5">
          <div className="py-4">
            <h5>ABOUT US</h5>
            <p className="mb-0">
              Syneris Solutions is a leading IT consultant and technology
              solutions provider. We help businesses navigate strategic
              decisions, optimize processes, and enhance performance through
              innovative IT solutions, ERP implementation and support, and
              software development. Our partnerships with leading software
              vendors ensure we deliver cutting-edge technology to meet your
              business needs.
            </p>
          </div>
        </div>
      </div>

      <div className="About-Vission">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 vision-title-back"></div>
              <div className="col-6 py-5">
                <img className="vision-side-img my-4" src={visionImg} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center py-5 py-md-0 px-4 pe-md-5 vision-des">
            <h5>OUR VISION</h5>
            <p className="vis-p">
              To be the preferred partner for digital transformation and
              business process optimization across industries.
            </p>
          </div>
        </div>
      </div>

      <div className="About-Mission p-4 p-md-5">
        <div className="row gx-5 py-5 py-lg-0">
          <div className="col-lg-3 d-flex align-items-center vision-t">
            <h5 className="mission-title mb-4 mb-lg-0">
              OUR <br className="d-none d-lg-block" />
              MISSION
            </h5>
          </div>
          <div className="col-sm-6 col-lg-3 mission-card">
            <div className="mis-card-img">
              <img src={operation} alt="" />
            </div>

            <h6 className="mt-2">Streamlining Operations</h6>
            <p>
              Deliver best-in-class ERP and business solutions to enhance
              operational efficiency.
            </p>
          </div>
          <div className="col-sm-6 col-lg-3 mission-card">
            <div className="mis-card-img">
              <img src={growth} alt="" />
            </div>

            <h6 className="mt-2">Driving Strategic Growth</h6>
            <p>
              Provide expert business consultation to drive growth and
              competitiveness
            </p>
          </div>
          <div className="col-sm-6 col-lg-3 mission-card">
            <div className="mis-card-img">
              <img src={innovation} alt="" />
            </div>

            <h6 className="mt-2">Inspiring Innovation</h6>
            <p>
              Foster innovation and collaboration through modern technology and
              bespoke software solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="About-Vission">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 vision-title-back"></div>
              <div className="col-6 py-5">
                <img className="vision-side-img my-4" src={valueImg} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center px-4 pe-md-5 vision-des py-5">
            <h5>OUR VALUES</h5>
            <p className="mb-1 value-ps">
              <span>Innovation:</span>&nbsp;Constantly evolving with the lates
              technology to deliver value-driven solutions
            </p>

            <p className="mb-1 value-ps">
              <span>Customer-Centric:</span>&nbsp;Ensuring customer satisfaction
              by addressing unique business challenges
            </p>

            <p className="mb-1 value-ps">
              <span>Integrity:</span>&nbsp;Upholding trust, transparency, and
              ethical practices
            </p>

            <p className="mb-1 value-ps">
              <span>Collaboration:</span>&nbsp;Working closely with clients and
              partners for shared success
            </p>
          </div>
        </div>
      </div>

      <div className="about-team px-4 px-md-5 py-5">
        <div className="py-4">
          <p className="mb-0 info-tag">OUR TEAM</p>
          <h3>MEET OUR BRILLIANT MINDS</h3>

          <p className="team-m-des">
            We are a team of experienced professionals, united by a passion for
            innovation and excellence. With diverse expertise, we collaborate to
            drive progress and deliver impactful solutions. Committed to
            professionalism, integrity, and continuous improvement, we tackle
            challenges effectively and create lasting value. Whether you need
            strategic guidance or technical expertise, we’re here to support
            your success.
          </p>

          {/* <div className="d-flex mt-4">
            <div className="team-img-box">
              <img src={prageeth} alt="" />

              <div className="team-des">
                <h6 className="text-center mb-0">Prageeth Wanigasuriya</h6>
                <p className="text-center">Chief Consulting Officer</p>
              </div>
            </div>

            <div className="team-img-box ms-5">
              <img src={akila} alt="" />

              <div className="team-des">
                <h6 className="text-center mb-0">Akila Sajith Kumar</h6>
                <p className="text-center">Chief Innovation Officer</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
