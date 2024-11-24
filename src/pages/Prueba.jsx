import React from "react";

const PhotoGallery = () => {
  const photos = [
    { id: 1, url: "https://via.placeholder.com/150", title: "Foto 1" },
    { id: 2, url: "https://via.placeholder.com/150", title: "Foto 2" },
    { id: 3, url: "https://via.placeholder.com/150", title: "Foto 3" },
    { id: 4, url: "https://via.placeholder.com/150", title: "Foto 4" },
    { id: 5, url: "https://via.placeholder.com/150", title: "Foto 5" },
    { id: 6, url: "https://via.placeholder.com/150", title: "Foto 6" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Galería de Fotos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {photos.map((photo) => (
          <div key={photo.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{photo.title}</h2>
              <p>Descripción breve de la foto.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
