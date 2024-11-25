import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import event from "../assets/event.jpeg";
import steve from "../assets/steve.jpeg"

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
    <div className="border">
      <img src={event} alt="" />

      <div className="w-full h-screen flex flex-col items-center justify-start min-h-screen shadow-2xl pt-32 bg-gradient-to-t from-orange-300 to-orange-500 ">
        <div><img src={steve} alt=""className="relative w-1/4 h-96 overflow-hidden rounded-lg shadow-lg " />
          <div className="grid grid-cols-3 justify-center gap-20 ">
            {data
              ? data.map((memorie, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-evenly mb-8 w-full max-w-md px-4 bg-gray-500  "
                    >
                      {memorie.image ? (
                        <img src={memorie.image} alt="" className="w-auto " />
                      ) : (
                        <p>La imagen no ha cargado correctamente</p>
                      )}
                      <p className="mt-2 text-center">{memorie.description}</p>
                    </div>
                  );
                })
              : false}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memories;
