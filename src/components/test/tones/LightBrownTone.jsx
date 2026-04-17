import React from "react";
import Card from "../Card";
function tonoDeCastañoClaro({ onNext, step, setStep }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <div className="w-full flex justify-between">
        <button
          onClick={() => {
            setStep(4);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Bold"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M19,10.5H10.207l2.439-2.439a1.5,1.5,0,0,0-2.121-2.122L6.939,9.525a3.505,3.505,0,0,0,0,4.95l3.586,3.586a1.5,1.5,0,0,0,2.121-2.122L10.207,13.5H19a1.5,1.5,0,0,0,0-3Z" />
          </svg>
        </button>
        <p className="text-lg">Paso {step}</p>
      </div>
      <h2 className="text-lg font-bold lg:text-2xl">
        ¿Como es tu tono de castaño claro?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around h-1/2 gap-4 w-full">
        <Card
          title={'Cenizo / "Raton" (frio)'}
          name={"tonoDeCabello"}
          id={"cenizo"}
          circle1={
            "bg-gradient-to-r from-[#948D85] from-50% to-[#6D6158] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción visual: Un castaño apagado, sin mucho brillo. A veces
            parece grisáceo bajo luz artificial
          </p>
        </Card>
        <Card
          title={"Miel / Dorado (calido)"}
          name={"tonoDeCabello"}
          id={"castañoMiel"}
          circle1={
            "bg-gradient-to-r from-[#B58B57] from-50% to-[#825E3E] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción visual: Castaño luminoso con destellos amarillos o
            dorados muy evidentes bajo el sol.
          </p>
        </Card>
        <Card
          title={"Cobrizo / Caramelo (muy calido)"}
          name={"tonoDeCabello"}
          id={"castañoCaramelo"}
          circle1={
            "bg-gradient-to-r from-[#B06E45] from-50% to-[#8B5E4B] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción visual: Tiene matices anaranjados o color ladrillo. Se
            ve como bronce o caramelo tostado bajo la luz.
          </p>
        </Card>
      </div>
    </section>
  );
}
export default tonoDeCastañoClaro;
