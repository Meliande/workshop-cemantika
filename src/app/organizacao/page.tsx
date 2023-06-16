import Image from 'next/image'
import vaninha from 'public/vaninha.jpg'
import ailton from 'public/ailton.jpg'
import rodrigo from 'public/rodrigo.jpg'

const Organizacao = () => {
  return (
    <div className="h-full flex flex-col items-center gap-10 laptop:h-full smartphone:px-5 desktop:px-96 text-center">
      <p>
        Este evento é organizado pelos alunos da pós-graduação e graduação do
        CEManTIKA, sob a supervisão e orientação da professora Dra. Vaninha
        Vieira, coordenadora do grupo de pesquisa.
      </p>
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="font-bold text-xl">Coordenação Geral</h2>
        <Image
          className="rounded-full w-40 h-40"
          src={vaninha}
          width={1080}
          height={1080}
          alt=""
        />
        <span className="text-xl">Profª Drª Vaninha Vieira</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="font-bold text-xl">Organização Geral</h2>
        <div className="flex flex-col items-center justify-center gap-8 laptop:flex-row">
          <div className="flex flex-col items-center justify-center">
            {' '}
            <Image
              className="rounded-full w-32 h-32"
              src={rodrigo}
              width={1080}
              height={1080}
              alt=""
            />
            <span className="text-xl">Rodrigo Meliande</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="font-bold text-xl">Apoio Voluntário</h2>
          <Image
            className="rounded-full w-40 h-40"
            src={ailton}
            width={1080}
            height={1080}
            alt=""
          />
          <span className="text-xl">Prof M.e Ailton Ribeiro</span>
        </div>
      </div>
    </div>
  )
}

export default Organizacao
