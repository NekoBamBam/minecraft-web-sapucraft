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
  button.textContent = "copiado😎";
}
import OnlinePlayers from "../components/OnlinePlayers";

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
        <div className="hero-content text-neutral-content text-center ">
          {/* Logo */}
          <div className="max-w-md ">
            <div className="text-[#05AF9E]  text-2xl ">
              <img src={logo} alt="" />
            </div>
            {/* Description */}
            <p className="mb-5 text-[#E0D2C3]">
              Ven y adentrate en la emocionante aventura al son de la guitarra
              payando y el sapucai de un gaucho de fondo
            </p>
            <OnlinePlayers />
            {/* Modal message */}
            <div className="mt-10 ">
              {/*Botón colaboración*/}
              <button
                className="btn bg-orange-900 text-white font-arial "
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                ¿Querés colaborar?
              </button>
              <dialog id="my_modal_1" className="modal ">
                <div className="modal-box bg-black">
                  <h3 id="url" className="font-bold text-lg font-arial ">
                    0000003100030147433454
                  </h3>

                  <p className="py-4 font-arial text-green-500">
                    CVU para la causa!
                  </p>
                  <button id="ButonCopiar" onClick={copiarUrl}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-copy"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                      />
                    </svg>
                  </button>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn bg-orange-900">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      {/* RULES */}
      <div className="h-4/5 bg-gradient-to-r from-[#011526A1] to-[#044D8CA1]  border border-transparent ">
        <div className="flex justify-start gap-4 mt-16 font-arial font-extrabold ">
          <p className="text-8xl text-white ">REGLAS</p>
          <p className="text-sm">
            Bienvenidos a SapuCraft. A continuación, encontrarás una descripción
            detallada de las reglas y directrices que hemos establecido para
            garantizar una experiencia segura, respetuosa y agradable para todos
            nuestros jugadores. Estas normas están diseñadas para fomentar un
            entorno en el que todos puedan interactuar de manera positiva y
            acceder a nuestros contenidos de forma clara y ordenada. Te
            invitamos a leerlas atentamente antes de continuar navegando por
            nuestro sitio y servidor.
          </p>
        </div>
        <div className="flex place-content-between p-10 gap-24 ">
          <div className="relative group w-1/4 h-96">
            {/* Imagen visible por defecto 1*/}
            <img
              src={modo}
              alt="Imagen inicial"
              className=" rounded-md w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold">
              Modo de juego{" "}
            </p>
            {/* Imagen que aparece al hacer hover 1*/}
            <div className="rounded-md absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#011526A1] to-[#044D8CA1] text-white text-xl font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100 font-height">
              No arruinar la experiencia de juego del usuario. No está permitido
              realizar acciones a conciencia que arruinen la experiencia de
              juego de otros usuarios de cualquier forma. Esto incluye utilizar
              y difundir mecanismos que degraden el rendimiento del juego, no
              permitir finalizar la partida, entre otros.
            </div>
          </div>
          {/* Imagen visible por defecto 2*/}
          <div className="relative group w-1/4 h-96 ">
            <img
              src={convi}
              alt=""
              className="rounded-md w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold">
              Convivencia{" "}
            </p>
            {/* Imagen que aparece al hacer hover 2*/}
            <div className="rounded-md absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#011526A1] to-[#044D8CA1] text-white text-xl font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100 font-height">
              Estas acciones están estrictamente prohibidas: Insultos o lenguaje
              ofensivo, Acoso, Spam o flood en el chat(No envíar mensajes
              repetitivos o innecesarios),Trolleo, Robos o destrucción de
              construcciones. Respeta las propiedades y creaciones de los demás
              jugadores.
            </div>
          </div>
          {/* Imagen visible por defecto 3*/}
          <div className="relative group w-1/4 h-96 ">
            <img
              src={hack}
              alt=""
              className="rounded-md w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold">
              Hacking{" "}
            </p>
            {/* Imagen que aparece al hacer hover 3*/}
            <div className="rounded-md absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#011526A1] to-[#044D8CA1] text-white text-xl font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100 font-height">
              Queda totalmente prohibido el uso de hacks, como: X-Ray: Usar mods
              o paquetes de texturas para localizar minerales o cofres ocultos.
              Kill Aura/Auto Aim: Utilizar hacks que automaticen ataques o
              aumenten el alcance de combate. Fly Hack: Habilidades para volar
              en modos no permitidos. Speed Hack: Incrementar la velocidad de
              movimiento de forma antinatural. Auto Clickers: Automatizar
              acciones como minería, combate o construcción.
            </div>
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
