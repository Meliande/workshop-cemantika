const About = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-5 smartphone:px-4 laptop:px-40 desktop:px-60">
      <p className="w-1/2 text-xl smartphone:w-full">
        O <span className="font-bold"> Workshop CEManATIKA </span>é um evento
        mensal organizado pelo grupo de pesquisa CEManTIKA da{' '}
        <span className="font-bold">Universidade Federal da Bahia</span>. Sob a
        coordenação da professora Dra. Vaninha Vieira
      </p>
      <h1 className="uppercase font-bold text-xl">Áreas de atuação</h1>
      <div className="grid grid-cols-2 gap-2 text-center justify-center">
        <p className="p-2 bg-emerald-800 text-white rounded-lg">
          Computação social
        </p>
        <p className="p-2 bg-emerald-800 text-white rounded-lg">
          Computação ubíqua e sensível ao contexto
        </p>
        <p className="p-2 bg-emerald-800 text-white rounded-lg">
          Sistemas colaborativos
        </p>
        <p className="p-2 bg-emerald-800 text-white rounded-lg">
          Interação humano-computador
        </p>
      </div>
      <a href="/local">
        <button className="uppercase font-bold bg-emerald-800 p-2 rounded-full text-white">
          conheça o local do evento
        </button>
      </a>
    </div>
  )
}

export default About
