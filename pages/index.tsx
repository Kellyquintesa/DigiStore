/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import Steps from "../components/organisms/Steps";
import Featured from "../components/organisms/Featured";
import Reached from "../components/organisms/Reached";
import Footer from "../components/organisms/Footer";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>DigiStore - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="We provide millions of ways to help players become true winners"
        />
        <link rel="shortcut icon" href="/icon/logo.png" />
      </Head>
      <Navbar />
      <MainBanner />

      {/* Transaction Steps */}
      <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
            It’s Really That <br /> Easy to Win the Game
          </h2>
          <Steps />
        </div>
      </section>

      {/* Featured */}
      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured <br /> Games This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            <Featured
              photo="Thumbnail-1"
              title="Super Mechs"
              category="Mobile"
            />
            <Featured
              photo="Thumbnail-2"
              title=" Call of Duty: Modern"
              category="Mobile"
            />
            <Featured
              photo="Thumbnail-3"
              title="Mobile Legends"
              category="Mobile"
            />
            <Featured
              photo="Thumbnail-4"
              title="Clash of Clans"
              category="Mobile"
            />
            <Featured photo="Thumbnail-5" title="Valorant" category="Desktop" />
          </div>
        </div>
      </section>

      <Reached />

      <section className="story pt-50 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
            <div
              className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
              data-aos="zoom-in"
            >
              <img
                src="/img/Header-9.png"
                width="612"
                height="452"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-5 col-12 ps-lg-60">
              <div className="">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                  Win the battle.
                  <br /> Be the Champion.
                </h2>
                <p className="text-lg color-palette-1 mb-30">
                  We provide millions of ways to
                  <br className="d-sm-block d-none" />
                  help players become <br className="d-sm-block d-none" /> true
                  winners
                </p>
                <div className="d-md-block d-flex flex-column w-100">
                  <a
                    className="btn btn-read text-lg rounded-pill"
                    href="/pageNotFound"
                    role="button"
                  >
                    Read Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
