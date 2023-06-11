import React from 'react'

const PageProgramacao = () => {
  interface customTRProps {
    horario: string
    atividade: string
    descricao: string
  }
  const CustomTR: React.FC<customTRProps> = ({
    horario,
    atividade,
    descricao,
  }) => {
    return (
      <tr className="bg-emerald-800 border-b hover:bg-emerald-700 text-white transition-colors duration-300">
        <td className="px-6 py-4">{horario}</td>
        <td className="px-6 py-4">{atividade}</td>
        <td className="px-6 py-4 hidden tablet:flex">{descricao}</td>
      </tr>
    )
  }
  return (
    <div className="h-screen flex flex-col items-center gap-6 p-10">
      <h1 className="text-emerald-800 text-3xl font-extrabold pt-8 uppercase">
        Programação
      </h1>
      <h1 className="uppercase text-xl font-bold">20/06 - Terça-feira</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xl text-left">
          <thead className="text-xl uppercase bg-emerald-800 text-white border-b ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Horário
              </th>
              <th scope="col" className="px-6 py-3">
                Atividade
              </th>
              <th scope="col" className="px-6 py-3 hidden tablet:flex">
                Descrição
              </th>
            </tr>
          </thead>
          <tbody>
            <CustomTR
              horario="09:00 - 10:00"
              atividade="Atv1"
              descricao="Desc1"
            />
            <CustomTR
              horario="09:00 - 10:00"
              atividade="Atv1"
              descricao="Desc1"
            />
            <CustomTR
              horario="09:00 - 10:00"
              atividade="Atv1"
              descricao="Desc1"
            />
            <CustomTR
              horario="09:00 - 10:00"
              atividade="Atv1"
              descricao="Desc1"
            />
          </tbody>
        </table>
      </div>
      <button className="bg-emerald-800 text-white p-5 font-bold rounded-full uppercase hover:bg-emerald-700 transition-colors duration-300">
        <a href="">Acesse mais informações sobre as apresentações</a>
      </button>
    </div>
  )
}

export default PageProgramacao
