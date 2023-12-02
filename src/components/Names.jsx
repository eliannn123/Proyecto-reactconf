import { faker } from "@faker-js/faker";
export let names = [];
let jobs = [];
for (let i = 0; i < 8; i++) {
  names.push(faker.person.fullName());
  jobs.push(faker.person.jobType());
}

export function RandomNames() {
  const namesComponents = names.map((text, i) => {
    return (
      <div
        key={text}
        className="bg-gradient-to-b w-full from-lochmara-400/70 via-lochmara-200/70 to-lochmara-100/80 text-black rounded-sm sm:rounded-md text-center items-center"
      >
        <img
          className="sm:w-60 w-40 h-40 sm:h-60 rounded-2xl mx-auto pt-5"
          src={faker.image.avatar()}
        />
        <div className="pt-5 font-principal text-lg text-white">
          <p>{names[i]}</p>
          <span className="text-lochmara-600">{jobs[i]}</span>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="flex flex-col items-center bg-black">
        <a name="invitados">
          <h1 className="text-5xl text-white text-center font-second">
            INVITADOS
          </h1>
        </a>
        <h3 className="text-2xl text-sky-200 text-center pt-4 pb-4">
          Profesionales de la tecnología y la programación
        </h3>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[40px] md:px-4 lg:grid-cols-4 lg:gap-x-[30px] lg:sgap-y-[30px] lg:mx-10 lg:my-10 lg:h-[800px]">
        {namesComponents}
      </div>
    </section>
  );
}
