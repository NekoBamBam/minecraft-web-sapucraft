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
    <div className="flex flex-col items-center justify-start min-h-screen pt-44 ">
        {data
          ? data.map((event, index) => {
            return (
              <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 w-3/4 h-1/3 rounded-lg bg-gray-900 border-4 border-white"
              >
                  <p className="text-6xl text-red-800 font-arial font-extrabold ">{event.name}</p>
                  <img src={event.image} alt="" className="h-96 " />
                  <p>{event.date}</p>
                  <p className="w-1/2 ">{event.description}</p>
                </div>
              );
            })
            : false}
 
    </div>
            </div>
  );
}

export default Events;
