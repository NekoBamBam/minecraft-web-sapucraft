import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

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
    <div>
      {/*  <img src={pelea} alt="" />
      <p
        className="text-8xl font-arial font-black text-white text-center bottom-32 relative"
        style={{
          textShadow:
            "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
        }}
      >
        EVENTOS
      </p> */}

      <div className="flex flex-col top-0 border items-center justify-start min-h-screen pt-4 gap-20 ">
        {data
          ? data.map((event, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-6 w-full h-full top-0"
                >
                  <div className="relative w-full h-full ">
                    <img
                      src={event.image}
                      alt=""
                      className="lg:h-full lg:w-full border "
                    />
                    <p className="absolute bottom-screen left-10 top-20 font-sans text-white text-6xl font-bold p-2 rounded-md" style={{
    textShadow: "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
  }}>
                      {event.name}
                    </p>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn absolute bottom-10 right-80 bg-violet-900 text-white"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      Mas información
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle "
                    >
                      <div className="modal-box ">
                        <h3 className="font-bold text-xl text-green-500 ">
                          Fecha: {event.date}!
                        </h3>
                        <p className="text-lg text-yellow-500">
                          Lugar: {event.lugar}
                        </p>
                        <p className="py-4 text-white">
                          Descripción: {event.description}
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
}

export default Events;
