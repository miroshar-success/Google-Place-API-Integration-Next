"use client";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

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
    {
      id: 6,
      imageBig: "/assets/img/innerpage/gallery-06.jpg",
    },
    {
      id: 7,
      imageBig: "/assets/img/innerpage/gallery-07.jpg",
    },
    {
      id: 8,
      imageBig: "/assets/img/innerpage/gallery-08.jpg",
    },
    {
      id: 9,
      imageBig: "/assets/img/innerpage/gallery-09.jpg",
    },
  ];
  return (
    <>
      <Header2 />
      <div className="destination-gallery pt-120 mb-120">
        <div className="container">
          <div className="row g-4 mb-70">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-06.jpg" alt="" />
                <a
                  data-fancybox="gallery-01"
                  onClick={() =>
                    setOpenimg({ openingState: true, openingIndex: 0 })
                  }
                >
                  <i className="bi bi-eye" /> Discover Island
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
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-07.jpg" alt="" />
                <a
                  data-fancybox="gallery-01"
                  onClick={() =>
                    setOpenimg({ openingState: true, openingIndex: 6 })
                  }
                >
                  <i className="bi bi-eye" /> Discover Island
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-08.jpg" alt="" />
                <a
                  data-fancybox="gallery-01"
                  onClick={() =>
                    setOpenimg({ openingState: true, openingIndex: 7 })
                  }
                >
                  <i className="bi bi-eye" /> Discover Island
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-09.jpg" alt="" />
                <a
                  data-fancybox="gallery-01"
                  onClick={() =>
                    setOpenimg({ openingState: true, openingIndex: 8 })
                  }
                >
                  <i className="bi bi-eye" /> Discover Island
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <a href="#" className="primary-btn1">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Newslatter />
      <Footer />
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
