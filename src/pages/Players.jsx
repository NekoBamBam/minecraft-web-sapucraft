import "swiper/swiper-bundle.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Players() {
  const [data, setData] = useState();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "players");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((players) => ({ id: players.id, ...players.data() }))
      )
    );
  }, []);
  console.log(data);

  return (
    <div className="w-full h-full flex justify-center items-center  flex-col gap-4">
      <Swiper className="border w-3/4" spaceBetween={0.5} slidesPerView={2}>
        {data
          ? data.map((player) => {
              return (
                <SwiperSlide>
                  <img src={player.logo} alt="" />
                </SwiperSlide>
              );
            })
          : false}
      </Swiper>
    </div>
  );
}

export default Players;
