import React from "react";
import CardSvg from "../CardSvg";

function ReactionOfTheSun({ onNext, step, setStep }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <div className="w-full flex justify-between">
        <button
          onClick={() => {
            setStep(1);
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
        ¿Como reacciona tu piel ante el sol?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-around h-1/2 gap-4 w-full">
        <CardSvg
          title={"Se quema facilmente"}
          name={"reactionSun"}
          id={"quema"}
          onNext={onNext}
        />
        <CardSvg
          title={"Se broncea ligeramente"}
          name={"reactionSun"}
          id={"broncea"}
          onNext={onNext}
        />
        <CardSvg
          title={"Se broncea con facilidad"}
          name={"reactionSun"}
          id={"bronceaFacil"}
          onNext={onNext}
        />
        <CardSvg
          title={"Se quema ligeramente y broncea"}
          name={"reactionSun"}
          id={"quemaLigeramenteyBroncea"}
          onNext={onNext}
        />
      </div>
    </section>
  );
}

export default ReactionOfTheSun;
