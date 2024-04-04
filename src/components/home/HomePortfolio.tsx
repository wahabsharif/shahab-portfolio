import Image from "next/image";
import Link from "next/link";

// Stationery Images
import stationery1 from "public/images/stationery/stationery-1.png";
import stationery2 from "public/images/stationery/stationery-2.png";
import stationery3 from "public/images/stationery/stationery-3.png";

// Logo Images
import logo1 from "public/images/logos/logo-1.png";
import logo2 from "public/images/logos/logo-2.png";
import logo3 from "public/images/logos/logo-3.png";

// Catalogue Images
import catalogue1 from "public/images/catalogue/catalogue-1.png";
import catalogue2 from "public/images/catalogue/catalogue-2.png";
import catalogue3 from "public/images/catalogue/catalogue-3.png";

import four from "public/images/portfolio/two.png";
import one from "public/images/portfolio/two.png";
import { useState } from "react";
import "swiper/swiper-bundle.css";

const HomePortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleTabClick = (filter: any) => {
    setActiveFilter(filter);
  };
  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-xl-4 text-center">
            <div className="portfolio-two__filter-btn section__header g-ind">
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleTabClick("*")}
              >
                <span>01</span>
                All
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".stationery" ? "active" : ""}
                onClick={() => handleTabClick(".stationery")}
              >
                <span>02</span>
                stationery
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".logo" ? "active" : ""}
                onClick={() => handleTabClick(".logo")}
              >
                <span>03</span>
                Logo
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".social" ? "active" : ""}
                onClick={() => handleTabClick(".social")}
              >
                <span>04</span>
                Social Media
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".carousel" ? "active" : ""}
                onClick={() => handleTabClick(".carousel")}
              >
                <span>05</span>
                Carousel
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".catalogue" ? "active" : ""}
                onClick={() => handleTabClick(".catalogue")}
              >
                <span>06</span>
                Catalogue
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".flyer" ? "active" : ""}
                onClick={() => handleTabClick(".flyer")}
              >
                <span>07</span>
                Flyer
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".tShirt" ? "active" : ""}
                onClick={() => handleTabClick(".tShirt")}
              >
                <span>08</span>
                T-Shirt
              </button>
            </div>
          </div>
        </div>

        <div className="row masonry-grid">
          {/* stationery Designs */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main stationery ${
              activeFilter === ".stationery" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={stationery1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">stationery Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main stationery ${
              activeFilter === ".stationery" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={stationery2} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">stationery Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main stationery ${
              activeFilter === ".stationery" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={stationery3} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">stationery Design</Link>
                </h4>
              </div>
            </div>
          </div>

          {/* Logo Designs */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main logo ${
              activeFilter === ".logo" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={logo1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Logo Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main logo ${
              activeFilter === ".logo" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={logo2} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Logo Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main logo ${
              activeFilter === ".logo" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={logo3} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Logo Design</Link>
                </h4>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main social ${
              activeFilter === ".social" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={four} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Social Media Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main social ${
              activeFilter === ".social" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={four} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Social Media Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main social ${
              activeFilter === ".social" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={four} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Social Media Design</Link>
                </h4>
              </div>
            </div>
          </div>

          {/* Carousel Design */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main carousel ${
              activeFilter === ".carousel" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={stationery1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Carousel Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main carousel ${
              activeFilter === ".carousel" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={stationery1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Carousel Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main carousel ${
              activeFilter === ".carousel" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={stationery1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Carousel Design</Link>
                </h4>
              </div>
            </div>
          </div>

          {/* Catalogue Design */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main catalogue ${
              activeFilter === ".catalogue" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={catalogue1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Catalogue Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main catalogue ${
              activeFilter === ".catalogue" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={catalogue2} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Catalogue Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main catalogue ${
              activeFilter === ".catalogue" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={catalogue3} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Catalogue Design</Link>
                </h4>
              </div>
            </div>
          </div>

          {/* Flyer Design */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main flyer ${
              activeFilter === ".flyer" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Flyer Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main flyer ${
              activeFilter === ".flyer" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Flyer Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main flyer ${
              activeFilter === ".flyer" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Flyer Design</Link>
                </h4>
              </div>
            </div>
          </div>
          {/* T-Shirt Design */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main tShirt ${
              activeFilter === ".tShirt" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">T-Shirt Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main tShirt ${
              activeFilter === ".tShirt" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">T-Shirt Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main tShirt ${
              activeFilter === ".tShirt" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">T-Shirt Design</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
