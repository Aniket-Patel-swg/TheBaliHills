import React, { useEffect, useRef } from "react";
import styles from "../styles/Location.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 1,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "bottom 80%",
          markers: false, // Show markers for scrollTrigger (optional)
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      [textRef.current, headingRef.current],
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 80%",
            markers: false,
        }
      }
    );
  });

  return (
    <>
      <div className={styles.location_section}>
        <section className={styles.image_wrapper}>
          <img ref={imgRef} src="/Images/calltoaction.jpg" alt="" />
        </section>
        <section className={styles.location_heading_wrapper}>
          <section className={styles.heading}>
            <h1 ref={headingRef}>Where is TheBaliHills?</h1>
          </section>
          <section className={styles.location_text_wrapper}>
            <p ref={textRef}>
              Discover an enchanting real estate venture amidst Bali's
              captivating landscape. This ambitious project offers a range of
              real estate services, including property acquisition, sales,
              rentals, and management. Experience an exquisite living
              environment surrounded by Bali's stunning hilly terrain. Enjoy the
              tranquility and natural beauty of lush greenery, rolling hills,
              and breathtaking vistas, creating a serene and peaceful haven away
              from city life.
            </p>
          </section>
        </section>
      </div>
    </>
  );
};

export default Location;
