import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal({ open, onClose, images, initialIndex }) {
  if (!open) return null;

  return (
    <div className="overflow-y-hidden overflow-x-hidden fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="overflow-y-hidden overflow-x-hidden relative w-full max-w-screen-xl mx-auto">
        <div className="overflow-x-hidden absolute top-0 right-0 pt-4 pr-4">
          <button onClick={onClose} className="text-3xl text-white">
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="overflow-x-hidden rounded-lg shadow-xl h-full md:p-10 md:pb-10 xs:py-20 xs:p-0 overflow-hidden">
          <div className="overflow-x-hidden relative w-full h-full">
            <Carousel
              showArrows={true}
              stopOnHover={true}
              transitionTime={800}
              useKeyboardArrows={true}
              dynamicHeight={false}
              emulateTouch={true}
              infiniteLoop={true}
              showThumbs={false}
              selectedItem={initialIndex} // Establecer el índice inicial
            >
              {images.map((image, index) => (
                <div key={index} className="overflow-x-hidden w-full h-full">
                  <img
                    src={image}
                    className="overflow-x-hidden w-full h-full max-h-[600px] object-contain"
                    style={{ maxHeight: "80vh" }} // Ajusta la altura al 80% del alto de la ventana
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
