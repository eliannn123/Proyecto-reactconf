import { names } from "./Names";

export function Schedule() {
  const nameItems = names.map((name) => name);

  const tableItems = [
    {
      name: nameItems[0],
      date: "Feb 30, 2025",
      hour: "1:00 pm - 2:30 pm",
      plan: "El futuro de los frameworks",
    },
    {
      name: nameItems[1],
      date: "Feb 30, 2025",
      hour: "3:00 pm - 4:30 pm",
      plan: "Como empezar en el mundo laboral",
    },
    {
      name: nameItems[2],
      date: "Feb 30, 2025",
      hour: "5:00 pm - 6:30 pm",
      plan: "La Costa Rica del futuro",
    },
    {
      name: nameItems[3],
      date: "Feb 30, 2025",
      hour: "7:00 pm - 8:00 pm",
      plan: "¿Bootcamp o Universidad?",
    },
    {
      name: nameItems[4],
      date: "Feb 31, 2025",
      hour: "1:00 pm - 2:30 pm",
      plan: "¿Que es el Frontend?",
    },
    {
      name: nameItems[5],
      date: "Feb 31, 2025",
      hour: "3:00 pm - 4:30 pm",
      plan: "Básicos de React",
    },
    {
      name: nameItems[6],
      date: "Feb 31, 2025",
      hour: "5:00 pm - 6:30 pm",
      plan: "¿De verdad sabes programar?",
    },
    {
      name: nameItems[7],
      date: "Feb 31, 2025",
      hour: "7:00 pm - 8:00 pm",
      plan: "La psicologia del programador",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 bg-white rounded-xl">
      <div className="justify-center md:flex">
        <div>
          <a name="intinerario">
            <h1 className="text-black text-5xl font-principal text-center mt-5">
              Intinerario
            </h1>
          </a>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-x-auto scroll-snap-x mandatory">
        <table className="w-full table-auto text-sm text-left whitespace-nowrap scroll-snap-start">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Invitado</th>
              <th className="py-3 pr-6">Fecha</th>
              <th className="py-3 pr-6">Hora</th>
              <th className="py-3 pr-6">Tema</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.hour}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.plan}</td>
                <td className="text-right whitespace-nowrap">
                  <a className="py-1.5 px-3 text-gray-600 cursor-pointer hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                    Editar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
