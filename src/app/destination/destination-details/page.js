"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Link from "next/link";
import DestinationActivitis from "@/components/destinationSlider/DestinationActivitis";
import DestinationLocationGallery from "@/components/destinationSlider/DestinationLocationGallery";

const Page = () => {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 6,
      imageBig: "/assets/img/innerpage/gallery-06.jpg",
    },
    {
      id: 1,
      imageBig: "/assets/img/innerpage/gallery-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/gallery-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/gallery-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/gallery-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/gallery-05.jpg",
    },
  ];
  return (
    <>
      <Breadcrumb
        pagename="Destination Details"
        pagetitle="Destination Details"
      />
      <div className="destination-details-wrap mb-120 pt-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <h2>Welcome To Egypt</h2>
              <p>
                Egypt has one of the longest histories of any country, tracing
                its heritage along the Nile Delta back to the 6th–4th millennia
                BCE. Considered a cradle of civilisation, Ancient Egypt saw some
                of the earliest developments of writing, agriculture,
                urbanisation, organised religion and central government.[15]
                Egypt's long and rich cultural heritage is an integral part of
                its national identity, which reflects its unique
                transcontinental location being simultaneously Mediterranean,
                Middle Eastern and North African.[16] Egypt was an early and
                important centre of Christianity, but was largely Islamised in
                the seventh century. Modern Egypt dates back to 1922, when it
                gained independence from the British Empire as a monarchy.
                Following the 1952 revolution, Egypt declared itself a republic,
                and in 1958 it merged with Syria to form the United Arab
                Republic, which dissolved in 1961.
              </p>
              <div className="destination-gallery mb-40 mt-40">
                <div className="row g-4">
                  <div className="col-lg-4 col-sm-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/innerpage/gallery-06.jpg" alt="" />
                      <a data-fancybox="gallery-01">
                        <i
                          onClick={() =>
                            setOpenimg({ openingState: true, openingIndex: 0 })
                          }
                          className="bi bi-eye"
                        />{" "}
                        Discover Island
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/innerpage/gallery-01.jpg" alt="" />
                      <a
                        data-fancybox="gallery-01"
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 1 })
                        }
                      >
                        <i className="bi bi-eye" /> Discover Island
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/innerpage/gallery-02.jpg" alt="" />
                      <a
                        data-fancybox="gallery-01"
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 2 })
                        }
                      >
                        <i className="bi bi-eye" /> Discover Island
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/innerpage/gallery-03.jpg" alt="" />
                      <a
                        data-fancybox="gallery-01"
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 3 })
                        }
                      >
                        <i className="bi bi-eye" /> Discover Island
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/innerpage/gallery-04.jpg" alt="" />
                      <a
                        data-fancybox="gallery-01"
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 4 })
                        }
                      >
                        <i className="bi bi-eye" /> Discover Island
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/innerpage/gallery-05.jpg" alt="" />
                      <a
                        data-fancybox="gallery-01"
                        onClick={() =>
                          setOpenimg({ openingState: true, openingIndex: 5 })
                        }
                      >
                        <i className="bi bi-eye" /> Discover Island
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="destination-sidebar">
                <div className="destination-info mb-30">
                  <div className="single-info">
                    <span>Destination:</span>
                    <h5>Egypt</h5>
                  </div>
                  <div className="single-info">
                    <span>Population:</span>
                    <h5>90.5 million</h5>
                  </div>
                  <div className="single-info">
                    <span>Capital City:</span>
                    <h5>Cairo</h5>
                  </div>
                  <div className="single-info">
                    <span>Language:</span>
                    <h5>Egyptian Arabic</h5>
                  </div>
                  <div className="single-info">
                    <span>Currency:</span>
                    <h5>Egyptian pound</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DestinationActivitis />
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={images.map(function (elem) {
          return { src: elem.imageBig };
        })}
      />
    </>
  );
};

export default Page;
