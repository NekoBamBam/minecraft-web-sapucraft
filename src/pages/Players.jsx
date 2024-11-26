import "swiper/swiper-bundle.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

function Players() {
  const [data, setData] = useState(undefined);
  const [currentPlayer, setCurrentPlayer] = useState(undefined);

  /* Trae los datos de la base */
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "players");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((players) => ({ id: players.id, ...players.data() }))
      )
    );
  }, []);

  return (
    <div className="w-full h-full flex justify-evenly items-center bg-gradient-to-b from-[#2D3142] to-[#4F5D75] overflow-hidden">
      {/* Donacion */}
      <div className="absolute left-5  w-1/6 h-2/3  rounded-lg bg-gradient-to-r from-[#EB07A1] to-[#EB68D9] overflow-y-scroll">
        <p className="text-2xl flex justify-center text-yellow-500 font-black">
          DONACIONE$
        </p>
        <ul className="mt-10 list-disc ml-5 text-white  ">
          {data
            ? [...data] // Crea una copia para no mutar el original
                .sort((a, b) => b.donation - a.donation)
                .map((player) => {
                  return (
                    <li key={player.id}>
                      {player.id + " " + "$" + player.donation}
                    </li>
                  );
                })
            : false}
        </ul>
      </div>
      {/* Swiper */}
      <div className="flex flex-col justify-center items-center gap-32 w-full h-full ">
        <div className="w-1/2 h-12 bg-[#BFC0C0] rounded-md pagination ml-40">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={4}
            loop={true}
            pagination={{ clickable: true, el: ".custom-pagination" }}
          >
            {data ? (
              data.map((player) => {
                return (
                  <SwiperSlide key={player.id}>
                    <button
                      onClick={() =>
                        setCurrentPlayer({
                          id: player.id,
                          logo: player.logo,
                          skin: player.skin,
                          alias: player.alias,
                          info: player.info,
                        })
                      }
                    >
                      <div
                        className="tooltip tooltip-right z-40 "
                        data-tip={player.id}
                      >
                        <img
                          src={player.logo}
                          alt={player.id}
                          className="h-12 z-30 rounded-md "
                        />
                      </div>
                    </button>
                  </SwiperSlide>
                );
              })
            ) : (
              <p className="flex justify-center w-full ">Players</p>
            )}
          </Swiper>
          <div className="custom-pagination  flex justify-center "></div>
        </div>
        {/* Swiper END */}

        {/* Players information */}
        <div className=" shadow-2xl drop-shadow-md shadow-fuchsia-500 w-3/4 h-1/3 rounded-lg bg-gray-900 border ml-60">
          {currentPlayer ? (
            <div className="flex h-full w-full justify-end pt-3 ">
              {/* Username */}
              <div className="text-6xl font-black font-icon text-white w-96 pl-5">
                <p>{currentPlayer.id}</p>
                <p className="text-2xl text-green-500">alias: {currentPlayer.alias} </p>
              </div>
              <div className=" flex justify-center items-center ml-5 ">
                {/* Player information */}
                <p className="-mb-6  w-72 text-xl text-gray-200 ">
                 {currentPlayer.info}
                </p>
              </div>
              {/* Player skin image */}
              <div className=" flex flex-col-reverse w-80">
                <img src={currentPlayer.skin} alt="" className="h-96" />
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
}

export default Players;
