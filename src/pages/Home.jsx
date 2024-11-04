import HeroImg from "../assets/HeroImg.png";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="hero h-screen relative z-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      ></div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div className="text-[#35CE8D] text-2xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Bienvenidos a SapuCraft!")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .start();
              }}
            />
          </div>
          <p className="mb-5 text-white">
            Ven y adentrate en la emocionante aventura al son de la guitarra
            payando y el sapucay de un gaucho de fondo
          </p>
          <span>Jugadores en linea 0</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
