import HeroImg from "../assets/HeroImg.jpeg";
import Footer from "../components/Footer";
import convi from "../assets/convi.jpg";
import logo from "../assets/icono2.png";
import modo from "../assets/modo.jpeg";
import hack from "../assets/hack.jpg";

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
            <div className="text-[#05AF9E] text-2xl">
              <img src={logo} alt="" />
            </div>
            <p className="mb-5 text-[#E0D2C3]">
              Ven y adentrate en la emocionante aventura al son de la guitarra
              payando y el sapucai de un gaucho de fondo
            </p>
            <span>Jugadores en linea: 0</span>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div className="flex flex-col items-center h-full w-full  bg-gradient-to-b from-[#011526A1] to-[#044D8CA1] ">
          <div className="flex justify-start gap-4 mt-16  font-arial font-extrabold ">
            <p className="text-8xl text-white">REGLAS</p>
            <p className="text-xs">
            Respeto mutuo: No insultar ni acosar a otros jugadores. Este es un espacio amigable para todos.
Nada de trampas: No se permite el uso de hacks, mods de ventaja o exploits que arruinen la experiencia.
Evita el griefing: No destruir construcciones ajenas, a menos que el dueño lo permita.
No robar: Respeta los cofres, pertenencias y recursos de otros jugadores.
Prohibido el spam: No abuses del chat con mensajes repetitivos o innecesarios.
            </p>
          </div>
          <div className="flex place-content-between p-10 gap-24 ">
            <div className="relative w-1/4 h-96 ">
              <img
                src={modo}
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
              <p className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold">
                Modo de Juego{" "}
              </p>
              
            </div>
            <div className="relative w-1/4 h-96 ">
              <img
                src={convi}
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
              <p className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold">
                Convivencia{" "}
              </p>
            </div>
            <div className="relative w-1/4 h-96 ">
              <img
                src={hack}
                alt=""
                className="rounded-md w-full h-full object-cover"
              />
              <p className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold">
                Hacking{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
