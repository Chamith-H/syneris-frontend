import "../../../../styles/pages/home/contents/Hero.css";
import hero2Img from "../../../../assets/images/home/hero2Img.png";
import hero2ImgSmall from "../../../../assets/images/home/hero2ImgSmall.png";

import { useEffect, useRef } from "react";
import { HeroSocial } from "./HeroSocial";

export const Hero = () => {
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const carouselElement = document.getElementById("carouselExample");
      if (carouselElement) {
        const carousel = new window.bootstrap.Carousel(carouselElement);
        carousel.next();
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const clearIntervalTime = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const carouselElement = document.getElementById("carouselExample");
      if (carouselElement) {
        const carousel = new window.bootstrap.Carousel(carouselElement);
        carousel.next();
      }
    }, 4000);
  };

  return (
    <div className="Hero-Section">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="Hero2">
              <div className="row g-0 position-relative">
                <div className="col-6"></div>

                <div className="col-6 d-flex justify-content-end">
                  <img
                    className="Hero-Image d-none d-md-block"
                    src={hero2Img}
                    alt=""
                  />
                  <img
                    className="Hero-Image d-md-none"
                    src={hero2ImgSmall}
                    alt=""
                  />
                </div>

                <div className="col-12 Hero-Content-Main">
                  <div className="row g-0 h-100">
                    <div className="col-12 col-md-6 h-100">
                      <div className="px-4 px-md-5 py-5 d-flex flex-column justify-content-between h-100">
                        <div className="mt-4">
                          <h1 className="Hero2-Main-Title text-center text-md-start">
                            EMPOWERING <span>YOUR BUSINESS</span> THROUGH
                            TECHNOLOGY
                          </h1>

                          <p className="Hero2-Sub-Title text-center text-md-start">
                            Transform your business with expert IT consulting
                            services
                          </p>
                        </div>

                        <HeroSocial />
                      </div>
                    </div>
                    <div className="d-none d-md-block col-md-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="Hero">
              <div className="row g-0">
                <div className="col-12 Hero-Content-Main-y">
                  <div className="row g-0 h-100">
                    <div className="col-12 col-md-6 h-100">
                      <div className="px-4 px-md-5 py-5 d-flex flex-column justify-content-between h-100">
                        <div className="mt-4">
                          <h1 className="Hero-Main-Title text-center text-md-start">
                            TRANSFORMING <span>CHALLENGES</span> INTO
                            OPPORTUNITIES
                          </h1>

                          <p className="Hero-Sub-Title text-center text-md-start">
                            Take your business to the next level with expert IT
                            solutions
                          </p>
                        </div>

                        <HeroSocial />
                      </div>
                    </div>
                    <div className="d-none d-md-block col-md-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="Hero3">
              <div className="row">
                <div className="col-12 Hero-Content-Main-x">
                  <div className="row g-0 h-100">
                    <div className="col-12 col-md-6 h-100">
                      <div className="px-4 px-md-5 py-5 d-flex flex-column justify-content-between h-100">
                        <div className="mt-4">
                          <h1 className="Hero3-Main-Title text-center text-md-start">
                            SMART <span>SOLUTIONS</span> FOR A DIGITAL FUTURE
                          </h1>

                          <p className="Hero3-Sub-Title text-center text-md-start">
                            Stay ahead of the competition with innovative IT
                            strategies
                          </p>
                        </div>

                        <HeroSocial />
                      </div>
                    </div>
                    <div className="d-none d-md-block col-md-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() => clearIntervalTime()}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={() => clearIntervalTime()}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
