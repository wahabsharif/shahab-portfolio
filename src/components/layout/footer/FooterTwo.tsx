import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo/shahab-munir-logo-landscape.png";
import gsap from "gsap";
import chroma from "chroma-js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WALogo from "public/images/wahab-sharif-logo.svg";

gsap.registerPlugin(ScrollTrigger);
const FooterTwo = () => {
  const currentYear = new Date().getFullYear();

  const animatedTextRef = useRef<any>(null);
  const [animatedTextContent, setAnimatedTextContent] = useState("");

  useEffect(() => {
    const animatedChars = document.querySelectorAll(".animated-char");

    if (animatedChars.length > 0) {
      const folksBD = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".animated-text",
          start: "bottom 100%-=50px",
        },
      });

      const folksGradient = chroma.scale(["#52ceea", "#ffffff"]);

      animatedChars.forEach((charElement, index) => {
        const delay = index * 0.04;

        folksBD.to(
          charElement,
          {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power3.out",
            transformOrigin: "center bottom",
          },
          delay
        );

        folksBD.to(
          charElement,
          {
            yPercent: -20,
            ease: "elastic",
            duration: 0.8,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            duration: 1.5,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            color: () => {
              return folksGradient(index / animatedChars.length).hex();
            },
            ease: "power2.out",
            duration: 0.3,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            yPercent: 0,
            ease: "back",
            duration: 0.8,
          },
          delay + 0.7
        );

        folksBD.to(
          charElement,
          {
            color: "#ffffff",
            duration: 1.4,
          },
          delay + 0.9
        );
      });
    }
  }, [animatedTextContent]);

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    const textContent = animatedTextRef.current?.textContent;
    if (textContent) {
      setAnimatedTextContent(textContent);
      animatedText.innerHTML = "";
    }
  }, []);

  return (
    <footer className="footer-two section pb-0">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer-two__left">
              <div className="logo">
                <Link href="/">
                  <Image src={logo} priority alt="Image" width={250} />
                </Link>
              </div>
              <div className="paragraph">
                <p>
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online. From website design
                  and development.
                </p>
              </div>
              <div className="section__content-cta">
                <h2>
                  <Link
                    href="mailto:shahabmunir98@gmail.com"
                    className="folks-text animated-text"
                    ref={animatedTextRef}
                  >
                    shahabmunir98@gmail.com
                    {animatedTextContent.split("").map((char, index) => (
                      <span
                        aria-hidden="true"
                        className="animated-char"
                        key={index}
                      >
                        {char}
                      </span>
                    ))}
                  </Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-7 offset-xl-1 col-xxl-5 offset-xxl-3">
            <div className="footer-two__right">
              <div className="social justify-content-start justify-content-lg-start">
                <Link
                  href="https://www.facebook.com/profile.php?id=100069850357888"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                  <span>Facebook</span>
                </Link>
                {/* <Link href="https://www.twitter.com/" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                  <span>Twitter</span>
                </Link> */}
                <Link
                  href="https://www.linkedin.com/in/shahab-munir-48b208213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                  <span>Linkedin</span>
                </Link>
                {/* <Link href="https://www.instagram.com/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                </Link> */}
                {/* <Link href="https://www.dribble.com/" target="_blank">
                  <i className="fa-light fa-basketball"></i>
                  <span>Dribble</span>
                </Link> */}
              </div>
              <div className="footer__single-meta section__content-cta">
                {/* <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  901 N Pitt Str., Suite 170 Alexandria, USA
                </Link> */}
                <Link href="tel:+923177906015">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +92-317-790-6015
                </Link>
                <Link href="mailto:shahabmunir98@gmail.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  shahabmunir98@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12 col-xl-6">
              <div className="footer__copyright-text text-center text-xl-start">
                <p>
                  Copyright &copy;
                  <span id="copyYear">{currentYear}</span> Shahab Munir. All
                  Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="justify-content-center justify-content-xl-end">
                <Link href="https://wahabsharif.me/" target="_blank">
                  Designed and Developed With Passion by
                  <Image
                    src={WALogo}
                    alt="Wahab Sharif Logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
