import React, { useState, useEffect } from "react";
export default function Card({
  title,
  name,
  id,
  circle1,
  circle2,
  circle3,
  contCircle,
  image,
  onNext,
  children,
}) {
  const images = {
    "Muy Clara": {
      component: "/tonoDePiel/muyClara.webp",
      alt: "Mujer con piel muy clara",
    },
    Clara: {
      component: "/tonoDePiel/clara.webp",
      alt: "Mujer con piel clara",
    },
    Morena: {
      component: "/tonoDePiel/morena.webp",
      alt: "Mujer con piel morena/morena",
    },
    Oscura: {
      component: "/tonoDePiel/oscura.webp",
      alt: "Mujer con piel oscura",
    },
    Negro: {
      component: "/colorDeCabello/negro.webp",
      alt: "Mujer con cabello de color negro",
    },
    "Castaño Oscuro": {
      component: "/colorDeCabello/castañoOscuro.webp",
      alt: "Mujer con cabello de color castaño oscuro",
    },
    "Castaño Claro": {
      component: "/colorDeCabello/castañoClaro.webp",
      alt: "Mujer con cabello de color castaño claro",
    },
    Rubio: {
      component: "/colorDeCabello/rubio.webp",
      alt: "Mujer con cabello de color rubio",
    },
    Pelirojo: {
      component: "/colorDeCabello/pelirojo.webp",
      alt: "Mujer con cabello de color pelirojo",
    },
    "Gris / Blanco": {
      component: "/colorDeCabello/gris.webp",
      alt: "Mujer con cabello blanco/gris",
    },
    "Azul Brillante": {
      component: "/colorDeOjos/azulBrillante.webp",
      alt: "Iris de color azul brillante",
    },
    "Azul Claro": {
      component: "/colorDeOjos/azulClaro.webp",
      alt: "Iris de color azul claro",
    },
    "Marron Avellana": {
      component: "/colorDeOjos/marronAvellana.webp",
      alt: "Iris de color marron avellana",
    },
    "Marron Oscuro": {
      component: "/colorDeOjos/marronOscuro.webp",
      alt: "Iris de color marron oscuro",
    },
    Verde: {
      component: "/colorDeOjos/verde.webp",
      alt: "Iris de color verde",
    },
    Gris: {
      component: "/colorDeOjos/gris.webp",
      alt: "Iris de color gris",
    },
    "Dorados / Calidos": {
      component: "/destellos/dorados.webp",
      alt: "Mujer con destellos/reflejos dorados o calidos",
    },
    "Plateados / Frios": {
      component: "/destellos/plateados.webp",
      alt: "Mujer con destellos/reflejos plateados o frios",
    },
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5 border-2 p-2 border-natural-300 rounded lg:border-none">
      <p className="text-lg lg:text-xl">{title}</p>
      <label
        title={title}
        className="overflow-hidden rounded-lg group relative hover:cursor-pointer w-full h-full "
      >
        <input
          type="radio"
          name={name}
          id={id}
          value={title}
          onClick={() => onNext(id)}
          className="hidden"
        />
        <div
          className={`flex gap-2 justify-center items-center w-full h-full ${contCircle} group-hover:scale-105`}
        >
          <div
            className={`${circle1} w-28 h-28 lg:w-32 lg:h-32 rounded-full border-2 border-neutral-300 shadow-[inset_0_0_24px_8px_rgba(0,0,0,40%)]`}
          ></div>
          <div
            className={`${circle2} w-28 h-28 lg:w-32 lg:h-32 rounded-full border-2 border-neutral-300 shadow-[inset_0_0_24px_8px_rgba(0,0,0,40%)]`}
          ></div>
          <div
            className={`${circle3} w-28 h-28 lg:w-32 lg:h-32 rounded-full border-2 border-neutral-300 shadow-[inset_0_0_24px_8px_rgba(0,0,0,40%)]`}
          ></div>
        </div>
        <div
          className={`shadow-[inset_0_0_24px_8px_rgba(0,0,0,40%)] min-w-[100px] min-h-[200px] w-full h-full`}
        >
          <img
            src={images[title] ? images[title].component : ""}
            alt={images[title] ? images[title].alt : ""}
            className={`absolute -z-10 w-full h-full transition-all delay-75 group-hover:scale-105 ${image}`}
          />
        </div>
      </label>
      {children}
    </div>
  );
}
