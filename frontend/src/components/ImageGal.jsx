import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ImageGal({ images, page }) {
  return (
    <>
      <div className="max-h-[550px] p-4 flex items-center justify-between">
        <ImageGallery
          items={images}
          thumbnailPosition={page === "order" ? "left" : "right"}
          autoPlay={true}
          useBrowserFullscreen={false}
          showPlayButton={false}
          showFullscreenButton={false}
          renderItem={(item) => (
            <div className=" w-[450px] border-2 rounded-2xl p-4 ">
              <img src={item.original} alt={item.original} />
            </div>
          )}
          renderThumbInner={(item) => (
            <img
              src={item.thumbnail}
              alt=""
              className="object-cover rounded-xl border-2 "
            />
          )}
          renderRightNav={(onClick, disabled) => (
            <button
              onClick={onClick}
              disabled={disabled}
              className="bg-gray-800 w-30 dark:bg-gray-100 dark:text-black text-white p-4 rounded-2xl absolute right-0 bottom-0 3 z-10"
            >
              Next
            </button>
          )}
          renderLeftNav={(onClick, disabled) => (
            <button
              onClick={onClick}
              disabled={disabled}
              className="bg-gray-800 w-30 dark:bg-gray-100 dark:text-black text-white p-4 rounded-2xl absolute left-0 bottom-0 z-10"
            >
              Prev
            </button>
          )}
        />
      </div>
    </>
  );
}

export default ImageGal;
