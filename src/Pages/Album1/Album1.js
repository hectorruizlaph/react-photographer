import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import "./Album1.css";

function Album1() {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [viewerIsOpen1, setViewerIsOpen1] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage1(index);
    setViewerIsOpen1(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage1(0);
    setViewerIsOpen1(false);
  };
  return (
    <div className="container">
      <div className="section">
        {photos.map((x) => {
          <div
            style={{
              backgroundImage: `url(${x.src})`,
              width: "100px",
              backgroundSize: "auto 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>;
        })}

        <div className="album-container">
          <h1>Elizabeth + Josh</h1>
        </div>
        {/* <div style={{ padding: "0 10% 0 10%", backgroundColor: "#F6F6F3" }}>
        <Gallery
          className=".image-gallery"
          photos={photos}
          onClick={openLightbox}
          direction={"column"}
          margin={10}
          sizes="(min-width: 480px) 50vw,
            (min-width: 1024px) 100vw,
            100vw"
        />
        <ModalGateway>
          {viewerIsOpen1 ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage1}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div> */}
      </div>
    </div>
  );
}

export default Album1;
