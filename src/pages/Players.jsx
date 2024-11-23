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
    <div className="w-full h-full flex justify-evenly items-center bg-gradient-to-b from-[#2D3142] to-[#4F5D75]">
      <div className="w-1/6 h-2/3 ml-10 rounded-lg bg-[#2D3142]">
        <p className="text-2xl flex justify-center">Donaciones</p>
        <ul className="mt-10 list-disc ml-5">
          {data
            ? [...data] // Crea una copia para no mutar el original
                .sort((a, b) => b.donation - a.donation)
                .map((player) => {
                  return (
                    <li key={player.id}>{player.id + " " + player.donation}</li>
                  );
                })
            : false}
        </ul>
      </div>
      {/* Swiper */}
      <div className="flex flex-col justify-center items-center gap-24 w-full h-full">
        <div className="w-1/3 h-12 bg-[#BFC0C0] rounded-md pagination">
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
                        })
                      }
                    >
                      <div
                        className="tooltip tooltip-right z-40"
                        data-tip={player.id}
                      >
                        <img
                          src={player.logo}
                          alt={player.id}
                          className="h-12 z-30 rounded-md"
                        />
                      </div>
                    </button>
                  </SwiperSlide>
                );
              })
            ) : (
              <p className="flex justify-center w-full">A</p>
            )}
          </Swiper>
          <div className="custom-pagination  flex justify-center"></div>
        </div>
        {/* Swiper END */}

        {/* Players information */}
        <div className="shadow-2xl drop-shadow-sm w-11/12 h-1/3 rounded-lg bg-[#2D3142]">
          {currentPlayer ? (
            <div className="flex h-full w-full justify-end pt-5">
              {/* Username */}
              <div className="text-2xl text-[#EF8354]  w-1/4 pl-5">
                <p>{currentPlayer.id}</p>
              </div>
              <div className=" flex justify-center items-center w-1/2 ml-5">
                {/* Player information */}
                <p className="mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis veritatis mollitia blanditiis maiores sit
                  accusamus laborum doloribus itaque hic atque odio, tenetur
                  ratione illo illum, eius quos qui neque cumque!
                </p>
              </div>
              {/* Player skin image */}
              <div className=" flex flex-col-reverse w-1/2">
                <img src={currentPlayer.skin} alt="" className="h-80" />
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
