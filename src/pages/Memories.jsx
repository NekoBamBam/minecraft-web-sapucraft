import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import event from "../assets/event.jpeg";
import sapulogo from "../assets/sapulogo.png";

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
    <div className="h-full w-full  bg-no-repeat bg-cover overflow-auto relative">

        <img src={event} alt="" className="w-full h-auto" />
        <img src={sapulogo} alt=""className="absolute h-16 " />
        <div className="w-full h-screen  flex flex-col items-center justify-start min-h-screen shadow-2xl pt-32 bg-orange-700 ">
          <div className="grid grid-cols-3 justify-center gap-10 bg-gradient-to-b from-orange-700 to-yellow-600">
            {data
              ? data.map((memorie, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-evenly mb-8 w-full max-w-md px-4 bg-black"
                    >
                      {memorie.image ? (
                        <img
                          src={memorie.image}
                          alt=""
                          className="w-full cursor-pointer"
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
