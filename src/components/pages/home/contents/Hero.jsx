import "../../../../styles/pages/home/contents/Hero.css";
import heroImg from "../../../../assets/images/home/heroImg.png";

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="row g-0">
        <div className="col-6">
          <div className="px-5 py-5 d-flex flex-column justify-content-between h-100">
            <div className="mt-4">
              <h1 className="Hero-Main-Title">
                EMPOWERING <span>YOUR BUSINESS</span> THROUGH TECHNOLOGY
              </h1>

              <p className="Hero-Sub-Title">
                Transform your business with expert IT consulting services.
              </p>
            </div>

            <div className="d-flex">
              <div className="Icon-Rounder-header me-2">
                <i class="bi bi-facebook"></i>
              </div>

              <div className="Icon-Rounder-header me-2">
                <i class="bi bi-linkedin"></i>
              </div>

              <div className="Icon-Rounder-header me-2">
                <i class="bi bi-envelope-at-fill"></i>
              </div>

              <div className="Icon-Rounder-header">
                <i class="bi bi-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 d-flex justify-content-end">
          <img className="Hero-Image" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};
