import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./../../styles/HomeLayout.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeLayout() {
  useEffect(() => {
    AOS.init();
  }, []);
  const comments = [
    {
      img: "/assets/images/comment.png",
      name: "Joe Smith",
      job: "Business Manager",
      comment:
        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry”",
    },

    {
      img: "/assets/images/comment1.png",
      name: "Paula Mora",
      job: "Business Manager",
      comment:
        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry”",
    },
    {
      img: "/assets/images/comment2.png",
      name: "Sarah Owo",
      job: "Graphic Designer",
      comment:
        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry”",
    },
    {
      img: "/assets/images/comment.png",
      name: "Rhonda Rhodes",
      job: "Business Manager",
      comment:
        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry”",
    },
    {
      img: "/assets/images/comment1.png",
      name: "Ali Dool",
      job: "Frontend Developer",
      comment:
        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry”",
    },
  ];

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const hasWindow = typeof window !== "undefined";

  const width = hasWindow ? window.innerWidth : null;

  console.log(width, width < 524);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },

      loop: true,
      rtl: true,
      slides: {
        perView: width <= 524 ? 1 : width < 800 ? 2 : 3,
        spacing: 10,
      },
      created() {
        setLoaded(true);
      },
    },

    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div>
      {/* hero section */}

      <div className="container" id="home">
        <div className={styles.hero + " flex spaced__between"}>
          <div className={styles.heroContent}>
            <p
              className={styles.upperCase}
              data-aos="fade-left"
              data-aos-duration="700"
            >
              EXPERT MEDICAL TREATMENT
            </p>
            <div
              className={styles.heroText}
              data-aos="fade-left"
              data-aos-duration="900"
            >
              We follow a holistic approach to health care.
            </div>
            <p data-aos="fade-left" data-aos-duration="500">
              Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod.
            </p>
            <button
              data-aos="fade-left"
              className={styles.heroBtn + " btn"}
              data-aos-duration="500"
            >
              Book an Appointment
            </button>
          </div>
          <div className={styles.heroImage}>
            <img
              src="/assets/images/hero.png"
              alt=""
              data-aos="fade-up"
              data-aos-duration="900"
            />
            <div
              className={styles.tot + " flex center_x spaced__between"}
              data-aos="fade-left"
            >
              <div className="text-30 bold">5K+</div>
              <div>Happy Patients</div>
            </div>
            <div
              className={styles.tot + " flex center_x spaced__between"}
              data-aos="fade-right"
            >
              <div className="text-30 bold">20+</div>
              <div>Expert Doctor</div>
            </div>
          </div>
        </div>
        {/* logo of sopnsers  */}
        <div className={styles.logoSponsers + " flex spaced__between"}>
          <div>
            <Image
              src="/assets/images/sponser-logo-1.svg"
              alt="logo sponser"
              width={160}
              height={39}
            />
          </div>
          <div>
            <Image
              src="/assets/images/sponser-logo-2.svg"
              alt="logo sponser"
              width={160}
              height={39}
            />
          </div>
          <div>
            <Image
              src="/assets/images/sponser-logo-3.svg"
              alt="logo sponser"
              width={160}
              height={39}
            />
          </div>
          <div>
            <Image
              src="/assets/images/sponser-logo-4.svg"
              alt="logo sponser"
              width={160}
              height={39}
            />
          </div>
          <div>
            <Image
              src="/assets/images/sponser-logo-5.svg"
              alt="logo sponser"
              width={160}
              height={39}
            />
          </div>
        </div>

        {/* services section */}
        <div className="container">
          <div className={styles.services + " flex column"}>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-offset="160"
              className={styles.colored + " txt-c bold"}
              id="services"
            >
              SERVICES
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-offset="160"
              className={styles.heading}
            >
              Experienced in multiple medical practices
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-offset="160"
              className={styles.servicesDescription}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys.
            </p>

            <div className={styles.servicesSlider}>
              <div
                className={styles.service}
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-offset="200"
              >
                <Image
                  src="/assets/images/service.svg"
                  alt=""
                  width={58}
                  height={58}
                />
                <p className={styles.serviceHeading}>Medical</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              {/*  */}
              <div
                className={styles.service}
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-offset="200"
              >
                <Image
                  src="/assets/images/service.svg"
                  alt=""
                  width={58}
                  height={58}
                />
                <p className={styles.serviceHeading}>Individual & Family</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              {/*  */}
              <div
                className={styles.service}
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-offset="200"
              >
                <Image
                  src="/assets/images/service.svg"
                  alt=""
                  width={58}
                  height={58}
                />
                <p className={styles.serviceHeading}>Medicaid</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              {/*  */}
              <div
                className={styles.service}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-offset="200"
              >
                <Image
                  src="/assets/images/service.svg"
                  alt=""
                  width={58}
                  height={58}
                />
                <p className={styles.serviceHeading}>Employer</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* video demo section */}
      </div>
      <div id="about" className={styles.vdSection + " flex column centered"}>
        <div
          className={styles.colored + " txt-c bold"}
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="160"
        >
          DR. MATTHEW ANDERSON
        </div>
        <div
          className={styles.heading}
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="160"
        >
          Watch video to learn why he is the right doctor for you
        </div>
        <div
          className={styles.vd}
          data-aos="zoom-out-up"
          data-aos-duration="900"
        >
          <iframe
            width="100%"
            height="340"
            src="https://www.youtube.com/embed/pc1jlelzmPY"
            title="Explanatory video: Healthcare market"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* about TESTIMONIAL */}
      <div className="container">
        <div className={styles.about + " flex"}>
          <div className={styles.aboutImage}>
            <div data-aos="fade-right" data-aos-duration="1200">
              <img src="/assets/images/meeting.png" alt="" />
            </div>
            <Image
              src="/assets/images/ceo.svg"
              alt=""
              width={180}
              height={227}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="120"
            />
          </div>
          <div
            className={styles.aboutContent}
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className={styles.colored + " txt-c bold"}>ABOUT US</div>
            <div className={styles.heading + " txt-l"}>
              A dedicated doctor with the core mission to help
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium fuga impedit repudiandae, perferendis et rerum iusto
              dolore alias voluptate debitis quis iure
            </p>
            <p>
              perspiciatis id quisquam ipsum repellendus voluptas exercitationem
              ex voluptatem, nisi veritatis sed ratione. Nemo consequatur
              quibusdam non reiciendis.
            </p>
            <div className="flex sm-col">
              <button className={styles.heroBtn + " btn"}>
                Book an Appointment
              </button>
              <button className="btn primary-outline">About us</button>
            </div>
          </div>
        </div>
      </div>

      {/* </TESTIMONIALS / comments*/}

      <div className={styles.test}>
        <div className="container flex column centered">
          <p
            className={styles.colored + " txt-c bold"}
            data-aos="fade-up-left"
            data-aos-duration="900"
            data-aos-offset="160"
          >
            TESTIMONIALS
          </p>
          <p
            className={styles.heading + " txt-c"}
            data-aos="fade-up-right"
            data-aos-duration="900"
            data-aos-offset="160"
          >
            Our Patients Says
          </p>
          {/* <div/> */}
        </div>

        <div className="relative container">
          <Image
            className={styles.quote}
            src="/assets/images/quote-top.svg"
            width={90}
            height={90}
            alt=""
          />
          <Image
            className={styles.quote}
            src="/assets/images/quote-bottom.svg"
            width={90}
            height={90}
            alt=""
          />

          <div ref={sliderRef} className={styles.comments + "  keen-slider"}>
            {comments.map(({ job, img, name, comment }, i) => {
              return (
                <div
                  className={
                    styles.comment + "  keen-slider__slide number-slide1"
                  }
                  key={i}
                >
                  <p>{comment}</p>
                  <footer className="flex center_x">
                    <Image src={img} alt="" width={60} height={60} />
                    <div className="column">
                      <div className={styles.colored}> {name} </div>
                      <p>{job}</p>
                    </div>
                  </footer>
                </div>
              );
            })}
          </div>
          {instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
          {/* </div> */}
        </div>
        {/*  */}
      </div>

      <div className="">
        <div
          className={styles.touch + " flex column centered container"}
          id="contact"
        >
          <div className={styles.heading}>
            Get in touch to book your first appointment
          </div>
          <p>Booking an appointment is quick and simple</p>
          <div className={styles.inputs + " flex centered"}>
            <input type="text" placeholder="Enter your email address" />
            <button className={styles.heroBtn + " btn"}>Submit</button>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className={styles.footer}>
        <div className="container flex spaced__between">
          <div className={styles.social + " flex column"}>
            <Image
              src="/assets/images/logo.png"
              width={150}
              height={40}
              alt="Logo DOCTOR X "
            />
            <p>
              Build a better website for your medical and healthcare business
              today.
            </p>
            <div className={styles.icons + " flex spaced__between"}>
              <Image
                src="/assets/images/fb.svg"
                width={24}
                height={24}
                alt="fb"
              />
              <Image
                src="/assets/images/twitter.svg"
                width={24}
                height={24}
                alt="twiter"
              />
              <Image
                src="/assets/images/ig.svg"
                width={24}
                height={24}
                alt="instagram"
              />
            </div>
          </div>
          <div className={styles.footer_links + "  flex spaced__between"}>
            <ul>
              <li> Resources </li>
              <li> Blog </li>
              <li> Services </li>
              <li> Contact </li>
              <li> Privacy </li>
            </ul>
            <ul>
              <li> Company </li>
              <li> Our Sponsers </li>
              <li> Friends </li>
              <li> Why Us </li>
              <li> Trade </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="cpd">
        Created By Nights Of Crying And{" "}
        <a
          href="http://github.com/khaledseleem0"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            window.open("https://twitter.com/Khaled70834970");
          }}
        >
          @Khalid Seleem
        </a>
      </div>
    </div>
  );
}

export default HomeLayout;
