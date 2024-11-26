import React, { useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Imagen seleccionada

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "memories");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((memories) => ({ id: memories.id, ...memories.data() }))
      )
    );
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* Galería de imágenes */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className="w-32 h-32 object-cover rounded-md cursor-pointer hover:scale-110 transition-transform"
          onClick={() => openModal(image)}
        />
      ))}

      {/* Modal */}
      {isOpen && selectedImage && (
        <div className="modal modal-open fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-box bg-white rounded-lg p-4 shadow-lg relative">
            <button
              className="absolute top-2 right-2 btn btn-sm btn-circle"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
