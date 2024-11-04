import React from "react";
import texture from "../assets/dirtTexture.jpeg";
import "swiper/swiper-bundle.css";
import { SwiperSlide, Swiper } from "swiper/react";
import player from "../assets/skin.png";
import player2 from "../assets/skin2.png";
import player3 from "../assets/skin3.png";
import player4 from "../assets/skin4.png";
import { Link } from "react-router-dom";

function Players() {
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
  return (
    <div className="h-screen w-screen">
      <div
        className="border border-purple-500 top-1/3 relative mr-36 ml-36 p-5"
        style={{
          backgroundImage: `url(${texture})`,
        }}
      >
        <Swiper
          className="flex justify-around"
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          pagination
        >
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
      <div className="flex border border-red-500 justify-center top-1/2 relative">
        <p>hola</p>
      </div>
    </div>
  );
}

export default Players;
