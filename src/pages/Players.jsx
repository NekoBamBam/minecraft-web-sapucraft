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
    <div className="w-full h-full flex justify-center items-center flex-col gap-40 bg-gradient-to-b from-[#2D3142] to-[#4F5D75]">
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
                    <div className="tooltip tooltip-right" data-tip={player.id}>
                      <img src={player.logo} alt={player.id} className="h-12" />
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
      <div className="shadow-2xl drop-shadow-sm w-1/2 h-1/3 rounded-lg bg-[#2D3142]">
        {currentPlayer ? (
          <div className="flex h-full w-full justify-end pt-5">
            <div className="text-2xl text-[#EF8354]  w-1/4 pl-5">
              <p>{currentPlayer.id}</p>
            </div>
            <div className=" flex justify-center items-center w-1/2 ml-5">
              <p className="mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis veritatis mollitia blanditiis maiores sit accusamus
                laborum doloribus itaque hic atque odio, tenetur ratione illo
                illum, eius quos qui neque cumque!
              </p>
            </div>
            <div className=" flex flex-col-reverse w-1/2">
              <img src={currentPlayer.skin} alt="" className="h-64" />
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default Players;
