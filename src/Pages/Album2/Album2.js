import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

function Album2() {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [viewerIsOpen1, setViewerIsOpen1] = useState(false);

  const openLightbox = useCallback(({index }) => {
    setCurrentImage1(index);
    setViewerIsOpen1(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage1(0);
    setViewerIsOpen1(false);
  };
  return (
    <div>
      <div
        style={{
          padding: "2% 10% 2% 10%",
          backgroundColor: "#F6F6F3",
          textAlign: "center",
        }}
      >
        <h1>Erika + Arturo</h1>
      </div>
      <div style={{ padding: "0 10% 0 10%", backgroundColor: "#F6F6F3" }}>
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
      </div>
    </div>
  );
}

export default Album2;
