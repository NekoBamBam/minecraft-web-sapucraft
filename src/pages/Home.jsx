import HeroImg from "../assets/HeroImg.jpeg";
import Footer from "../components/Footer";
import convi from "../assets/convi.jpg";
import logo from "../assets/icono2.png";
import modo from "../assets/modo.jpeg";
import hack from "../assets/hack.jpg";

function copiarUrl() {
  let url = document.getElementById("url");
  let button = document.getElementById("ButonCopiar");
  navigator.clipboard.writeText(url.textContent);
  button.textContent = "copiar";
}

function Home() {
  return (
    <div>
      {/* Hero */}
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
          {/* Logo */}
          <div className="max-w-md">
            <div className="text-[#05AF9E]  text-2xl">
              <img src={logo} alt="" />
            </div>
            {/* Description */}
            <p className="mb-5 text-[#E0D2C3]">
              Ven y adentrate en la emocionante aventura al son de la guitarra
              payando y el sapucai de un gaucho de fondo
            </p>
            <span className="text-green-500">Jugadores en linea: 2</span>
            {/* Modal message */}
            <div className="mt-10">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn bg-orange-900 text-white font-arial"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Querés colaborar?
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 id="url" className="font-bold text-lg font-arial ">
                    0000003100030147433454
                  </h3>

                  <p className="py-4 font-arial">Alias para la causa!</p>
                  <button id="ButonCopiar" onClick={copiarUrl}>
                    copiar
                  </button>

                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn ">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      {/* RULES */}
      <div className="h-screen bg-gradient-to-r from-[#011526A1] to-[#044D8CA1]">
        <div className="flex justify-start gap-4 mt-16  font-arial font-extrabold ">
          <p className="text-8xl text-white">REGLAS</p>
          <p className="text-xs">
            Respeto mutuo: No insultar ni acosar a otros jugadores. Este es un
            espacio amigable para todos. Nada de trampas: No se permite el uso
            de hacks, mods de ventaja o exploits que arruinen la experiencia.
            Evita el griefing: No destruir construcciones ajenas, a menos que el
            dueño lo permita. No robar: Respeta los cofres, pertenencias y
            recursos de otros jugadores. Prohibido el spam: No abuses del chat
            con mensajes repetitivos o innecesarios.
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
      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
