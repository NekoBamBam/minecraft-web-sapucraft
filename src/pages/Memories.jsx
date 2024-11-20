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
    <div className="w-full h-full flex items-start justify-center">
      <div className="">
        {data
          ? data.map((memorie, index) => {
              return (
                <div key={index} className="">
                  {memorie.image ? (
                    <img src={memorie.image} alt="" className="w-80" />
                  ) : (
                    <p>La imagen no ha cargado correctamente</p>
                  )}
                  <p>{memorie.description}</p>
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
}

export default Memories;
