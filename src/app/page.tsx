import { Menubar } from "primereact/menubar";
import { menuEnd, menuItems, menuStart } from "./data";
import { SeccionHero } from "./components/organisms/heroSeccion";
import { SeccionCategoriasDeProyectos } from "./components/organisms/categoriasDeProyectos";
import { SeccionProyectosDestacados } from "./components/organisms/proyectosDestacados";
import { SeccionComoFunciona } from "./components/organisms/comoFunciona";
import { SeccionProyectosDeLaComunidad } from "./components/organisms/proyectosDeLaComunidad";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { SeccionMaterialesPopulares } from "./components/organisms/materialesPopulares";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <header
        id="header"
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50"
      >
        <Menubar model={menuItems} start={menuStart} end={menuEnd} />
      </header>
      <main className="flex overflow-hidden min-h-screen w-full flex-col items-center justify-between ">
        {SeccionHero}
        {SeccionCategoriasDeProyectos}
        {SeccionProyectosDestacados}
        {SeccionComoFunciona}
        {SeccionMaterialesPopulares}
        <section id="community-section" className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Experiencias Compartidas
            </h2>
            <button className="bg-eco-green text-white px-4 py-2 rounded-full text-sm font-medium">
              <i className="mr-1" data-fa-i2svg="">
                <svg
                  className="svg-inline--fa fa-plus"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="plus"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  ></path>
                </svg>
              </i>{" "}
              Compartir
            </button>
          </div>

          <div
            id="community-post-1"
            className="bg-white rounded-3xl p-4 mb-4 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                className="w-12 h-12 rounded-full"
                alt="avatar"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Ana Martínez</h4>
                <p className="text-xs text-gray-500">Hace 2 días</p>
              </div>
              <i className="text-gray-400" data-fa-i2svg="">
                <svg
                  className="svg-inline--fa fa-ellipsis"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="ellipsis"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                  ></path>
                </svg>
              </i>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              ¡Mi primer huerto vertical terminado! Gracias por la guía tan
              detallada. Ya tengo tomates cherry creciendo 🍅
            </p>
            <div className="h-56 rounded-2xl overflow-hidden mb-3">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d51d5ea80b-0bef822be07a6999ef4c.png"
                alt="completed vertical garden with tomatoes and herbs, proud owner, bright daylight"
              />
            </div>
            <div className="flex items-center justify-between text-gray-600 text-sm">
              <button className="flex items-center gap-2">
                <i className="text-red-500" data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-heart"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                    ></path>
                  </svg>
                </i>
                <span>124</span>
              </button>
              <button className="flex items-center gap-2">
                <i data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-comment"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="comment"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                    ></path>
                  </svg>
                </i>
                <span>18</span>
              </button>
              <button className="flex items-center gap-2">
                <i data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-share"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="share"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                    ></path>
                  </svg>
                </i>
                <span>8</span>
              </button>
            </div>
          </div>

          <div
            id="community-post-2"
            className="bg-white rounded-3xl p-4 mb-4 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                className="w-12 h-12 rounded-full"
                alt="avatar"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Pedro Sánchez</h4>
                <p className="text-xs text-gray-500">Hace 5 días</p>
              </div>
              <i className="text-gray-400" data-fa-i2svg="">
                <svg
                  className="svg-inline--fa fa-ellipsis"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="ellipsis"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                  ></path>
                </svg>
              </i>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Mi sistema de captación de agua lluvia funcionando perfectamente.
              Ahorro 40% en agua para riego 💧
            </p>
            <div className="h-56 rounded-2xl overflow-hidden mb-3">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7774e76c41-94ae04c5bc06b6adf5a2.png"
                alt="rainwater collection system with barrels and pipes, DIY setup in backyard"
              />
            </div>
            <div className="flex items-center justify-between text-gray-600 text-sm">
              <button className="flex items-center gap-2">
                <i className="text-red-500" data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-heart"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                    ></path>
                  </svg>
                </i>
                <span>89</span>
              </button>
              <button className="flex items-center gap-2">
                <i data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-comment"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="comment"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                    ></path>
                  </svg>
                </i>
                <span>12</span>
              </button>
              <button className="flex items-center gap-2">
                <i data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-share"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="share"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                    ></path>
                  </svg>
                </i>
                <span>5</span>
              </button>
            </div>
          </div>
        </section>
        {/*{SeccionProyectosDeLaComunidad}*/}

        {/* <div classNameName="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"></div>
        <div classNameName="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            classNameName="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            classNameName="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>*/}
      </main>
    </div>
  );
}
