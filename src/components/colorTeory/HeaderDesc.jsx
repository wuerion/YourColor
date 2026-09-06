import React from "react";

function HeaderDesc({ nameHead }) {
  const dataHeader = {
    circleColor: {
      subTitle: "Base",
      title: "Círculo cromático",
      desc: "Cada punto es un color de  tu paleta según su matiz",
      styleBar: "#3552C9",
    },
    primario: {
      subTitle: "Puros",
      title: "Colores primarios",
      desc: "No se pueden obtener mezclando otros colores.",
      styleBar: "#2f6fed",
    },
    secundario: {
      subTitle: "Mezcla 1:1",
      title: "Colores secundarios",
      desc: "Se obtienen mezclando dos colores primarios",
      styleBar: "#3A9A4B",
    },
    terciario: {
      subTitle: "Mezcla 2:1",
      title: "Colores terciarios",
      desc: "Se obtiene mezclando un color primarion y uno secundario.",
      styleBar: "#E37B2C",
    },
    warmColor: {
      subTitle: "Energía",
      title: "Colores cálidos",
      desc: "Transmiten energía, calidez, alegría, pasión",
      styleBar: "#E0552C",
    },
    coldColor: {
      subTitle: "Serenidad",
      title: "Colores ríos",
      desc: "Transmiten calma, profundidad, confianza y frescura",
      styleBar: "#2A7DE1",
    },
    complementColor: {
      subTitle: "Alto contraste",
      title: "Colores complementarios",
      desc: "Están opuestos en el círculo cromático y se realzan entre sí",
      styleBar: "#8B3FD1",
    },
    combinationColor: {
      subTitle: "Con tu color base",
      title: "Combinaciones de colores",
      desc: "Formas de armoniosas de combinar colres, calculadas a partir del color seleccionado en la rueda.",
      styleBar: "#161310",
    },
    guideColor: {
      subTitle: "Guía práctica",
      title: "¿Con qué colores combinar?",
      desc: "",
      styleBar: "#E0552C",
    },
  };
const name = dataHeader[nameHead]
  return (
    
      <div class="mb-6">
            <span className="uppercase text-[#5a544c] block text-sm tracking-widest">{name.subTitle}</span>
            <h2 className="text-lg mb-2">{name.title}</h2>
            <div className={`w-14 h-1 bg-[${name.styleBar}] mb-2 rounded`}></div>
            <p className="text-[#5a544c]">{name.desc}</p>
      </div>
    
  );
}

// agregar el section-desc que sea opcional
export default HeaderDesc;
