import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import mate from "../assets/mate.png";
import arg from "../assets/arg.png";
import caballo from "../assets/caballo.png";

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
    <div className=" from-[#2D3142] ">
      <div className="flex flex-col  items-center justify-start min-h-screen pt-44 gap-20 ">
        {data
          ? data.map((event, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-6 w-3/4 h-1/3 rounded-2xl bg-black shadow-2xl drop-shadow-md shadow-fuchsia-500"
                >
                  <img
                    src={mate}
                    alt="Decoración izquierda"
                    className="absolute left-14 top-1/3 h-12 opacity-70"
                  />
                  <img
                    src={mate}
                    alt="Decoración derecha"
                    className="absolute right-14 top-2/3 h-12 opacity-70"
                  />
                  <img
                    src={caballo}
                    alt="Decoración derecha"
                    className="absolute right-14 top-10 h-12 opacity-70"
                  />
                  <img
                    src={caballo}
                    alt="Decoración izquierda"
                    className="absolute left-14 top-2/3 h-12 opacity-70"
                  />
                  <img
                    src={arg}
                    alt="Decoración derecha"
                    className="absolute right-14 top-1/3 h-12 opacity-70"
                  />
                  <img
                    src={arg}
                    alt="Decoración izquierda"
                    className="absolute left-14 top-10 h-12 opacity-70  "
                  />
                  <p className="text-5xl text-white font-arial font-extrabold ">
                    {event.name}
                  </p>
                  <img src={event.image} alt="" className="h-96 rounded-lg" />
                  <p className="text-green-500">Fecha: {event.date}</p>
                  <p className="text-yellow-500">Lugar: {event.lugar}</p>
                  <p className="w-1/2 text-slate-200">
                    Descripción: {event.description}
                  </p>
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
}

export default Events;
