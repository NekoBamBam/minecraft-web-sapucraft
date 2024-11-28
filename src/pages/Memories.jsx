import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import event from "../assets/memo.png";
import sapulogo from "../assets/sapulogo.png";
import arg from "../assets/arg.webp";
import modo from "../assets/juntos.jpeg";

function Memories() {
  const [data, setData] = useState(undefined);
  const [image, setImage] = useState(undefined);

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
    <div className="h-screen w-full flex flex-col  bg-cover overflow-auto relative bg-[#C34F1F] ">
      <div className="h-full w-full">
        {/*img fondo*/}
        <img src={event} alt="" className="w-full h-auto" />
        {/*Logo SapuCraft*/}
        <img
          src={sapulogo}
          alt=""
          className="absolute h-40 bottom-24 left-8 "
        />
        {/*Bandera Argentina*/}
        <img
          src={arg}
          alt=""
          className="absolute h-20 w-20 bottom-10 left-8 rounded-xl top-72"
        />
        <p className="text-white text-xl  font-mono underline absolute bottom-16 left-10">
          2024|+20 Players|Rancio Army Inc.
        </p>
      </div>

      <div className="w-full h-full  flex flex-col items-center gap-10 justify-start min-h-screen  pt-32 ">
        <div className="flex items-center gap-4">
          {/*img amistad*/}
          <img
            src={modo}
            alt=""
            className="rounded-2xl h-80 w-80 relative right-10"
          />
          <div className="flex flex-col gap-10 relative top-0">
            <p className="text-2xl font-bold text-white text-center font-serif">
              La ronda de la amistad
            </p>
            <p className=" h-40 w-96 text-white flex items-center justify-center relative top-5 text-lg font-futura">
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
          <p className="text-2xl text-white font-arial ">GALERIA</p>
          {/*Flechita*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            class="bi bi-chevron-down text-white mt-7"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
        {/*img memories*/}
        <div className="grid grid-cols-3 justify-center gap-10 ">
          {data
            ? data.map((memorie, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-evenly mb-8 w-full max-w-md px-4 "
                  >
                    {memorie.image ? (
                      <img
                        src={memorie.image}
                        alt=""
                        className="w-full cursor-pointer rounded-2xl"
                        onClick={() => setImage(memorie.image)}
                      />
                    ) : (
                      <p>La imagen no ha cargado correctamente</p>
                    )}
                    <p className="mt-2 text-center text-white">
                      {memorie.description}
                    </p>
                  </div>
                );
              })
            : false}
        </div>
        {/*Agrandamiento de la img*/}
        {image ? (
          <div
            className="absolute flex justify-center items-center bg-black bg-opacity-90 h-full w-full top-0"
            onClick={() => setImage(undefined)}
          >
            <img src={image} alt="" className="h-96" />
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default Memories;
