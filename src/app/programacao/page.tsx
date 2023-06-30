import Image from 'next/image'
import React from 'react'
import banner from 'public/banner.png'

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
    <div className="min-h-screen flex flex-col items-center gap-6 p-10">
      <h1 className="text-emerald-800 text-3xl font-extrabold pt-8 uppercase">
        Programação
      </h1>
      <h1 className="uppercase text-xl font-bold">20/06 - Terça-feira</h1>
      <div className="overflow-auto">
        <div className="relative flex flex-row gap-3 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-xl text-left ">
            <thead className="text-xl uppercase bg-emerald-800 text-white border-b">
              <tr>
                <th className="px-6 py-3">Horário</th>
                <th className="px-6 py-3">Atividade</th>
                <th className="px-6 py-3 hidden tablet:flex tablet:justify-center">
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody>
              <CustomTR
                horario="09:00 - 09:15"
                atividade="Ambientação"
                descricao="Tour guiado pelo ambiente"
              />
              <CustomTR
                horario="09:15 - 09:20"
                atividade="Abertura"
                descricao="Cerimônia de abertura com a Profª Drª Vaninha Vieira"
              />
              <CustomTR
                horario="09:20 - 10:00"
                atividade="Roda de conversa"
                descricao="Compartilhando experiências em eventos nacionais e internacionais"
              />
              <CustomTR
                horario="10:00 - 10:40"
                atividade="Keynote - Rodrigo Falcão"
                descricao="Engenharia de software experimental"
              />
              <CustomTR
                horario="10:40 - 11:00"
                atividade="Intervalo"
                descricao="Tempo para socilização e utilização do ambiente como meio social"
              />
              <CustomTR
                horario="11:00 - 12:00"
                atividade="Sessão técnica"
                descricao="Conhecendo os trabalhos do grupo CEManTIKA"
              />
              <CustomTR
                horario="12:00 - 12:20"
                atividade="Formulário"
                descricao="Instruções para preenchimento do fomulário sobre as experiências dos usuários do ambiente"
              />
              <CustomTR
                horario="12:20 - 12:30"
                atividade="Encerramento"
                descricao="Cerimônia de encerramento com a Profª Drª Vaninha Vieira"
              />
            </tbody>
          </table>
          <Image
            className="w-96 rounded-md hidden laptop:flex"
            src={banner}
            alt=""
            width={2000}
          />
        </div>
      </div>
    </div>
  )
}

export default PageProgramacao
