import React from "react";
import "swiper/swiper-bundle.css";
import { SwiperSlide, Swiper } from "swiper/react";
import bodySkin from "../assets/skinBody.png";
import player from "../assets/skin.png";
import player2 from "../assets/skin2.png";
import player3 from "../assets/skin3.png";
import player4 from "../assets/skin4.png";
import { Link } from "react-router-dom";

const players = [
  {
    icon: player,
    player: "Lawcito",
  },
  {
    icon: player2,
    player: "NekoBamBam",
  },
  {
    icon: player3,
    player: "Fabrigreen",
  },
  {
    icon: player4,
    player: "Soldih",
  },
  {
    icon: "",
    player: "Soldih",
  },
  {
    icon: "",
    player: "Soldih",
  },
  {
    icon: "",
    player: "Soldih",
  },
];

function Players() {
  return (
    <div className="w-full h-full flex justify-center items-center  flex-col gap-4">
      <div className="border border-[#E46F18] rounded-md bg-[#353335] p-5 lg:w-1/3 w-full mt-10 lg:mt-0">
        <Swiper spaceBetween={10} slidesPerView={3} loop={true} pagination>
          {players.map(({ icon, player }, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to={`/${player}`}>
                  <img src={icon} alt={player} className="w-10 h-10" />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="lg:flex justify-center border border-[#E46F18] rounded-md bg-[#353335] lg:w-1/2 p-10 w-full">
        <div className="flex gap-4">
          <img src={player} alt="" className="w-10 h-10" />
          <p>Nombre: </p>
          <p>Alias:</p>
        </div>
        <div className="flex justify-end gap-4 items-end mt-5 lg:mt-0">
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            alias in placeat ea quia culpa pariatur porro sunt consectetur
            assumenda fuga sed nisi praesentium deleniti, ad sapiente eligendi
            sit unde!
          </p>
          <img src={bodySkin} alt="" className="h-52" />
        </div>
      </div>
    </div>
  );
}

export default Players;
