import HeroImg from "../assets/HeroImg.jpeg";
import Footer from "../components/Footer";
import fondoblock from "../assets/block-texture.jpg";
import logo from "../assets/icono2.png";

function Home() {
  return (
    <div>
      <div className="hero h-screen w-screen relative z-10">
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
            <div className="text-[#05AF9E]  text-2xl">
              <img src={logo} alt="" />
            </div>
            <p className="mb-5 text-[#E0D2C3]">
              Ven y adentrate en la emocionante aventura al son de la guitarra
              payando y el sapucay de un gaucho de fondo
            </p>
            <span>Jugadores en linea: 0</span>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div
          className="flex flex-col justify-center items-center h-full w-full"
          style={{
            backgroundImage: `url(${fondoblock})`,
            backgroundRepeat: "repeat",
          }}
        >
          <p className="text-2xl text-blue-400">REGLAS</p>
          <p className="flex flex-col text-xl">
            1-Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            excepturi autem, nisi, sunt a ex recusandae doloremque veniam
            consequuntur mollitia, totam nostrum repellendus architecto
            blanditiis consequatur quos! Totam, doloribus ratione. lorem
          </p>
          <p>
            2- Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            unde libero assumenda, minima distinctio nisi ullam hic ipsa, quos
            accusantium iusto dolorum vel. Adipisci ab itaque non sed amet.
            Praesentium!
          </p>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
