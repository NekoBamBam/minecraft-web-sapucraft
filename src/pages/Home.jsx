import HeroImg from "../assets/HeroImg.jpeg";
import logo from "../assets/sapucraft.png";

function Home() {
  return (
    <div className="hero h-screen relative z-10">
      <div
        className="absolute inset-0 h-full"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1px)",
          zIndex: -1,
        }}
      ></div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div>
            <img src={logo} alt="" />
          </div>
          <p className="mb-5 text-[#E0D2C3]">
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
