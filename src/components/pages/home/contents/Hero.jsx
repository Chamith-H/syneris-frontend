import "../../../../styles/pages/home/contents/Hero.css";
import heroImg from "../../../../assets/images/home/heroImg.png";
import heroImgSmall from "../../../../assets/images/home/heroImgSmall.png";

export const Hero = () => {
  return (
    <div className="Hero-Section">
      <div className="Hero">
        <div className="row g-0 position-relative">
          <div className="col-6"></div>

          <div className="col-6 d-flex justify-content-end">
            <img
              className="Hero-Image d-none d-md-block"
              src={heroImg}
              alt=""
            />
            <img className="Hero-Image d-md-none" src={heroImgSmall} alt="" />
          </div>

          <div className="col-12 Hero-Content-Main">
            <div className="row g-0 h-100">
              <div className="col-12 col-md-6 h-100">
                <div className="px-4 px-md-5 py-5 d-flex flex-column justify-content-between h-100">
                  <div className="mt-4">
                    <h1 className="Hero-Main-Title text-center text-md-start">
                      EMPOWERING <span>YOUR BUSINESS</span> THROUGH TECHNOLOGY
                    </h1>

                    <p className="Hero-Sub-Title text-center text-md-start">
                      Transform your business with expert IT consulting
                      services.
                    </p>
                  </div>

                  <div className="d-flex justify-content-center justify-content-md-start">
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
              <div className="d-none d-md-block col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
