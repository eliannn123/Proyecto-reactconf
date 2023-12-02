import centro from "../assets/centro.webp";

export function Place() {
  return (
    <div>
      <a name="fecha">
        <h1 className="text-5xl text-white text-center font-principal">
          FECHA Y UBICACIÓN
        </h1>
      </a>
      <div className="lg:flex w-full sm:w-[80%] rounded-sm  sm:rounded-none h-[550px] lg:h-[550px] xl:h-[600px] bg-white/95 mx-auto mt-5">
        <img
          src={centro}
          className="lg:h-full h-[50%] md:h-[60%] w-full lg:w-[60%] xl:w-[53%]"
        />
        <p className="text-center text-md  sm:text-xl lg:text-3xl  mt-12  md:mt-18  xl:mt-40 whitespace-pre-line leading-normal font-medium px-5">
          La REACTCON será realizada el 30 y 31 de febrero de 2025, a partir de
          la 1pm hasta las 8pm, en el centro de convenciones de Costa Rica. Este
          está ubicado en San José, a 8km del Aeropuerto Internacional Juan
          Santamaría (
          <a
            href="https://maps.app.goo.gl/AXmuW43BJ4SyjBfU9"
            className="underline decoration-sky-200"
          >
            Autop. Gral. Cañas, San José
          </a>
          )
        </p>
      </div>
    </div>
  );
}
