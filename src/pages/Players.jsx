import "swiper/swiper-bundle.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

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
    <div className="w-full h-full flex justify-center items-center flex-col gap-4">
      <Swiper
        className="border w-1/2 h-12"
        spaceBetween={0.5}
        slidesPerView={2}
        effect="cube"
        loop={true}
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
                  <img src={player.logo} alt={player.id} className="h-12" />
                </button>
              </SwiperSlide>
            );
          })
        ) : (
          <p>Ha ocurrido un error al cargar la información</p>
        )}
      </Swiper>
      <div className="border border-red-500 w-1/2 h-1/2">
        {currentPlayer ? (
          <div className="flex">
            <div className="text-2xl text-purple-600 w-1/2">
              <p>{currentPlayer.id}</p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                obcaecati quidem fuga quibusdam esse, aut dolore deleniti? Aut
                sed nobis quidem aliquam eius, quisquam eum ut minus
                perspiciatis ratione placeat.
              </p>
            </div>
            <div className="flex w-1/2 h-full justify-end">
              <img src={currentPlayer.skin} alt="" />
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
