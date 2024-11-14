import "swiper/swiper-bundle.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { getFirestore, doc, getDocs, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

function Players() {
  const [data, useData] = useState({});

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "players", "0qzOfnZUvuDEdSboUIdm");
    getDoc(queryDoc).then(res => console.log(res));
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center  flex-col gap-4">
      {/*  <div className="border border-[#E46F18] rounded-md bg-[#353335] p-5 lg:w-1/3 w-full mt-10 lg:mt-0">
        <Swiper spaceBetween={10} slidesPerView={3} loop={true} pagination>
          {players.map(({ icon, player }, index) => {
            return <SwiperSlide key={index}>
              <div>hola</div>
            </SwiperSlide>;
          })}
        </Swiper>
      </div> */}
    </div>
  );
}

export default Players;
