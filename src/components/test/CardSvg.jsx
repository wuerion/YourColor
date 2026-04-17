import React from "react";

function CardSvg({ title, name, id, onNext }) {
  const svgs = {
    quema: {
      component: "/svg/seQuema.svg",
      alt: "",
    },
    broncea: {
      component: "/svg/seBroncea.svg",
      alt: "",
    },
    bronceaFacil: {
      component: "/svg/seBronceaFacil.svg",
      alt: "",
    },
    quemaLigeramenteyBroncea: {
      component: "/svg/seQuemaYBroncea.svg",
    },
    hombre: {
      component: "/svg/icon-men.svg",
      alt: "hombre",
    },
    mujer: {
      component: "svg/icon-women.svg",
      alt: "mujer",
    },
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="text-lg lg:text-xl">{title}</p>
      <label
        title={title}
        className="rounded-lg group relative hover:cursor-pointer min-w-[100px] min-h-[200px] w-1/2 h-1/2 max-w-[200px] max-h-[400px] lg:max-w-[400px] lg:max-h-[500px]"
      >
        <input
          type="radio"
          name={name}
          id={id}
          value={title}
          onClick={() => onNext(id)}
          className="hidden"
        />
        <img
          src={svgs[id].component}
          alt={svgs[id].alt}
          className={`absolute -z-10 w-full h-full transition-all delay-75 group-hover:scale-105`}
        />
      </label>
    </div>
  );
}
export default CardSvg;
