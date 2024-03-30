import React from "react";
import Image from "next/image";
import Link from "next/link";
import samp from "public/images/portfolio/fifteen.png";

const PortfolioMain = () => {
  return (
    <section className="section portfolio-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-4 col-lg-4">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={samp} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-4">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={samp} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={samp} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={samp} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={samp} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={samp} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-4">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={samp} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-4">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={samp} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioMain;
