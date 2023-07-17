import React, { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Location from "../Components/Location";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const h1Ref = useRef(null);
  const pTextRef = useRef(null);
  const btnH1Ref = useRef(null);
  const btnPRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      h1Ref.current,
      {
        opacity: 0,
        y: 100,
        skewY: 20,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        skewY: 0,
      }
    )
    .fromTo(
      pTextRef.current,
      {
        opacity: 0,
        y: 100,
        skewY: 20,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        skewY: 0,
      },
      "-=0.5"
    )
    .fromTo(
      [btnH1Ref.current, btnPRef.current],
      {
        opacity: 0,
        y: 100,
        skewY: 20,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        skewY: 0,
      },
      "-=0.5"
    )
    .fromTo(
      imgRef.current,
      {
        opacity: 0,
        scale : 1.1,
        y: 105,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        scale: 1,
      },
      "-=0.5"
    );
  }, []);

  // useEffect(() => {
  //   let proxy = { skew: 5 },
  //     skewSetter = gsap.quickSetter(imgRef.current, "skewY", "deg"),
  //     clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 5 degrees.

  //   ScrollTrigger.create({
  //     trigger: imgRef.current,
  //     onUpdate: (self) => {
  //       // console.log("vel", self.getVelocity()) // fater we scroll fater the velocity, so that we can use it to change the skew
  //       let skew = clamp(self.getVelocity());

  //       if (Math.abs(skew) > Math.abs(proxy.skew) / -300) {
  //         proxy.skew = skew;
  //         gsap.to(proxy, {
  //           skew: 0,
  //           duration: 1,
  //           ease: "power3",
  //           overwrite: true,
  //           onUpdate: () => skewSetter(proxy.skew),
  //         });
  //       }
  //     },
  //   });
  // });

  return (
    <>
      <section className={styles.navbar}>
        <h1 ref={btnH1Ref}>
          <Link href="/">The Bali Hills</Link>
        </h1>
        <p ref={btnPRef}>
          <Link href="/">Contact Us</Link>
        </p>
      </section>
      <div className={styles.homepage}>
        <section className={styles.hero_text}>
          <section className={styles.upper_text_wrapper}>
            <p ref={pTextRef}>
              Own your dream plot in Bali at The Bali Hills, starting from $9600.
            </p>
          </section>
          <section className={styles.lower_text_wrapper}>
            <h1 ref={h1Ref}>
              Experience The Bali Exquisite <br /> Bali Living
            </h1>
          </section>
        </section>
        <section className={styles.image_wrapper}><img ref={imgRef} src="/Images/Hero.jpg" alt="" /></section>
      </div>
      <Location />
    </>
  );
}
