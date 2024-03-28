import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import banneronethumb from "public/images/banner/banner-one-thumb.png";
import star from "public/images/star.png";
import videoframe from "public/images/video-frame.png";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  We are Creative
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> digital agency
                  </span>
                </h1>
                <div className="banner__content-inner">
                  <p>
                    We are a comprehensive agency offering website design,
                    development, and digital marketing services, with a focus on
                    SEO and content marketing strategies aimed at expanding
                    brand presence and recognition.
                  </p>
                  <div className="cta section__content-cta">
                    <div className="single">
                      <h5 className="fw-7">3+</h5>
                      <p className="fw-5">years of experience</p>
                    </div>
                    <div className="single">
                      <h5 className="fw-7">100+</h5>
                      <p className="fw-5">completed projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={banneronethumb}
          alt="Image"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt="Image" className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@xpovio.com">
            mail : shahabmunir98@gmail.com
          </Link>
          <Link href="tel:923177906015">Call : +92 317 790 6015</Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link
            href="https://www.linkedin.com/in/shahab-munir-48b208213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100069850357888"
            target="_blank"
          >
            facebook
          </Link>
        </div>
      </section>
    </>
  );
};

export default Banner;
