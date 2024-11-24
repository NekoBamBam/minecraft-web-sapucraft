import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";


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
    <div >
      <div className="flex flex-col items-center justify-start min-h-screen pt-44 bg-gradient-to-t from-[#372C27] to-[#BF9E5F]">
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
  );
}


export default Memories;
