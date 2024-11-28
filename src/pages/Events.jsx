import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import event from "../assets/event.jpeg"

function Events() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "events");
    getDocs(queryCollection).then((res) =>
      setData(res.docs.map((events) => ({ id: events.id, ...events.data() })))
    );
  }, []);

  return (
<div className="bg-gradient-to-r from-[#451669] to-[#470f1c]">
    <div className="flex flex-col items-center justify-start min-h-screen pt-44 gap-12 ">
        {data
          ? data.map((event, index) => {
            return (
              <div
              key={index}
              className="flex flex-col justify-center items-center gap-6 w-3/4 h-1/3 rounded-lg bg-black shadow-2xl drop-shadow-md shadow-fuchsia-500"
              >
                  <p className="text-6xl text-white font-arial font-extrabold ">{event.name}</p>
                  <img src={event.image} alt="" className="h-96 " />
                  <p className="text-green-500">{event.date}</p>
                  <p className="text-yellow-500">{event.lugar}</p>
                  <p className="w-1/2 text-slate-200">{event.description}</p>
                </div>
              );
            })
            : false}
 
    </div>
            </div>
  );
}

export default Events;
