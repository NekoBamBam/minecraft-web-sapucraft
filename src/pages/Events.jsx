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
    <div className="flex flex-col items-center justify-start min-h-screen pt-44 ">
      <div
        className="absolute inset-0 h-full "
        style={{
          backgroundImage: `url(${event})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      >
        {data
          ? data.map((event, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-2"
                >
                  <p className="text-2xl ">{event.name}</p>
                  <img src={event.image} alt="" className="h-96" />
                  <p>{event.date}</p>
                  <p className="w-1/2">{event.description}</p>
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
}

export default Events;
