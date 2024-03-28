import Image from "next/image";
import Link from "next/link";
import five from "public/images/portfolio/five.png";
import four from "public/images/portfolio/four.png";
import one from "public/images/portfolio/one.png";
import three from "public/images/portfolio/three.png";
import two from "public/images/portfolio/two.png";
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
                className={activeFilter === ".stationary" ? "active" : ""}
                onClick={() => handleTabClick(".stationary")}
              >
                <span>02</span>
                Stationary
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
          {/* Stationary Designs */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main stationary ${
              activeFilter === ".stationary" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={two} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Stationary Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main stationary ${
              activeFilter === ".stationary" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={two} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Stationary Design</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main stationary ${
              activeFilter === ".stationary" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={two} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Stationary Design</Link>
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
                <Image src={three} alt="Image" />
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
                <Image src={three} alt="Image" />
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
                <Image src={three} alt="Image" />
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
                <Image src={five} alt="Image" />
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
                <Image src={five} alt="Image" />
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
                <Image src={five} alt="Image" />
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
                <Image src={one} alt="Image" />
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
                <Image src={one} alt="Image" />
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
                <Image src={one} alt="Image" />
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
