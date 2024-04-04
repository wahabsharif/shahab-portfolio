import React from "react";
import Image from "next/image";
import Link from "next/link";
import samp from "public/images/portfolio/fifteen.png";
import branding from "public/images/branding/branding-1.png";

import catalogue1 from "public/images/catalogue/catalogue-1.png";
import catalogue2 from "public/images/catalogue/catalogue-2.png";
import catalogue3 from "public/images/catalogue/catalogue-3.png";

import logo1 from "public/images/logos/logo-1.png";
import logo2 from "public/images/logos/logo-2.png";
import logo3 from "public/images/logos/logo-3.png";

import stationery1 from "public/images/stationery/stationery-1.png";
import stationery2 from "public/images/stationery/stationery-2.png";
import stationery3 from "public/images/stationery/stationery-3.png";

const PortfolioMain = () => {
  return (
    <section className="section portfolio-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={branding} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Branding</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={catalogue1} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Catalogue</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={catalogue2} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Catalogue</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={catalogue3} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Catalogue</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={logo1} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Logo</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={logo2} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Logo</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={logo3} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Logo</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={stationery1} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Stationery</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={stationery2} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Stationery</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="#">
                  <Image src={stationery3} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="#">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="#">Stationery</Link>
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
