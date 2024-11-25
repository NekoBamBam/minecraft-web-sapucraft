import React, { useState } from "react";

const ImageWithDaisyUIModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Imagen Pequeña */}
      <img
        src="https://via.placeholder.com/150"
        alt="Thumbnail"
        className="w-32 h-32 cursor-pointer rounded-md"
        onClick={() => setIsOpen(true)}
      />

      {/* Modal DaisyUI */}
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <img
              src="https://via.placeholder.com/150"
              alt="Enlarged"
              className="w-full h-auto rounded-md"
            />
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithDaisyUIModal;



