import convencin from "../assets/convencion.webp";

export function Prices() {
  return (
    <div>
      <a name="precios">
        <h1 className="text-5xl text-white text-center font-principal">
          PRECIOS
        </h1>
      </a>
      <div className="flex w-[80%]  h-[400px] md:h-[500px]  xl:h-[600px] bg-white/95 mx-auto mt-5">
        <img src={convencin} className="h-[full] w-[60%] hidden xl:block" />
        <div className="flex flex-col justify-between">
          <ul className=" text-xl  sm:text-3xl md:ml-[4.4rem] lg:ml-[15rem] xl:ml-[.3rem] list-disc  mt-10 md:mt-[6rem] lg:mt-40 leading-normal font-medium px-12">
            <li>Entrada regular: ₡10.000</li>
            <li>Entrada prefrencial: ₡15.000</li>
            <li>Entrada VIP: ₡25.000</li>
            <li>Paquete de regalos: ₡8.000</li>
          </ul>
          <button className=" mb-[5rem]  md:mb-[10rem] lg:mb-[8rem] xl:mb-[12rem] ml-[2rem] sm:ml-[7.4rem] lg:ml-[17rem] xl:ml-[2.8rem] h-10 w-[15rem]  sm:w-[24rem] text-white font-medium bg-lochmara-600 hover:bg-lochmara-500 active:bg-lochmara-600 rounded-xl ">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
