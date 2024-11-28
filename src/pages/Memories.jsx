import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import event from "../assets/memo.png";
import sapulogo from "../assets/sapulogo.png";
import arg from "../assets/arg.webp";
import modo from "../assets/juntos.jpeg";
import ModalImage from "react-modal-image";

function Memories() {
  const [data, setData] = useState(undefined);

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
    <div className="h-screen w-full flex flex-col bg-cover overflow-auto relative bg-[#C34F1F] gap-40 lg:gap-0">
      <div className="h-full w-full">
        <div className="">
          {/*img fondo*/}
          <img src={event} alt="" className="w-full h-auto" />
          {/*Logo SapuCraft*/}
          <img
            src={sapulogo}
            alt=""
            className="absolute lg:h-40 lg:bottom-24 lg:left-8 lg:ml-0"
          />
        </div>
        {/*Bandera Argentina*/}
        <div className="ml-1 lg:ml-0">
          <img
            src={arg}
            alt=""
            className="absolute w-10 h-10 lg:h-20 lg:w-20 lg:bottom-10 lg:left-8 rounded-xl lg:top-72 top-40"
          />
          <p className="text-white text-xl  font-mono underline absolute lg:bottom-16 lg:left-10 top-24 lg:top-full ">
            2024|+20 Players|Rancio Army Inc.
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center gap-10 justify-start min-h-screen lg:pt-32">
        <div className="lg:flex items-center lg:gap-8">
          {/*img amistad*/}
          <img
            src={modo}
            alt=""
            className="rounded-2xl h-80 w-80 relative lg:right-10 left-5 lg:left-0 mb-5 lg:mb-0"
          />
          <div className="flex flex-col lg:gap-10 relative lg:top-0 gap-4">
            <p className="text-2xl font-bold text-white text-center font-serif">
              La ronda de la amistad
            </p>
            <p className="lg:h-40 lg:w-96 w-full text-white flex items-center justify-center relative top-5 text-lg font-futura">
              En la sombra del algarrobo, un fogón de luz prendía, y en su
              ronda, unos amigos compartían alegría. Amistad, dijo el más viejo,
              es el lazo mas sincero, no se compra con riquezas ni se paga con
              dinero. Otro gaucho respondió, con guitarra y su dulzor: Es el
              yugo en los pesares y el abrazo en el dolor. Si el camino es de
              espinas, la amistad es el sosten, que el amigo verdadero te
              levanta siempre bien.
            </p>
          </div>
        </div>
        <div className="mt-20  flex flex-col items-center">
          <p className="text-2xl text-white font-arial">GALERIA</p>
          {/*Flechita*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            class="bi bi-arrow-down text-white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
            />
          </svg>
        </div>
        {/*img memories*/}
        <div className="lg:grid grid-cols-3 justify-center gap-10">
          {data
            ? data.map((memorie, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-evenly mb-8 w-full max-w-md px-4 "
                  >
                    {memorie.image ? (
                      <ModalImage
                        small={memorie.image}
                        large={memorie.image}
                        hideDownload={false}
                        hideZoom={false}
                        className="lg:w-full cursor-pointer lg:rounded-2xl rounded-md"
                      />
                    ) : (
                      <p>La imagen no ha cargado correctamente</p>
                    )}
                    <p className="mt-2 text-center text-white ">
                      {memorie.description}
                    </p>
                  </div>
                );
              })
            : false}
        </div>
      </div>
    </div>
  );
}

export default Memories;
