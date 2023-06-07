import React from 'react'

const PageProgramacao = () => {
  interface customTRProps {
    horario: string
    atividade: string
  }
  const CustomTR: React.FC<customTRProps> = ({ horario, atividade }) => {
    return (
      <tr className="bg-emerald-400 border-b hover:bg-emerald-500">
        <th scope="row" className="px-6 py-4 font-medium text-emerald-900">
          {horario}
        </th>
        <td className="px-6 py-4">{atividade}</td>
      </tr>
    )
  }
  return (
    <div className="h-screen flex flex-col items-center gap-6">
      <h1 className="text-violet-600 text-3xl font-extrabold pt-8">
        Programação
      </h1>
      <button className="bg-emerald-300 font-bold rounded-full text-black uppercase hover:bg-violet-400 hover:text-white transition-colors p-2">
        <a href="">Acesse as informações sobre as apresentações</a>
      </button>
      <div className="uppercase">
        <h1 className="font-bold">20/06 - Terça-feira</h1>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xl text-left">
          <thead className="text-xl uppercase bg-violet-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                Horário
              </th>
              <th scope="col" className="px-6 py-3">
                Atividade
              </th>
            </tr>
          </thead>
          <tbody>
            <CustomTR horario="09:00 - 10:00" atividade="Teste" />
            <CustomTR
              horario="09:00 - 10:00"
              atividade="TesteTesteTesteTesteTesteTesteTeste"
            />
            <CustomTR horario="09:00 - 10:00" atividade="Teste" />
            <CustomTR horario="09:00 - 10:00" atividade="Teste" />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PageProgramacao
