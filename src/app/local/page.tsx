const LocalPage = () => {
  return (
    <div className="h-screen flex flex-col items-center px-8 gap-16 text-left">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-3xl text-emerald-800 font-bold">
          Fique livre para acompanhar de onde quiser !
        </h1>
        <p className="w-96">
          O próximo Workshop CEManATIKA, que ocorrerá em uma plataforma
          inovadora e imersiva: o Metaverso. Este evento representa uma
          oportunidade única para compartilhar conhecimentos, discutir trabalhos
          em andamento e obter valiosos feedbacks dos participantes.
        </p>
        {/*         <p className="w-96">
          Por favor responda o formulário abaixo para que possamos conhecer um
          pouco mais sobre seu entendimento e expectativas sobre o metaverso
        </p>

        <FormText /> */}
      </div>
      <button>
        <a
          target="__blank"
          href="https://docs.google.com/document/d/1V2fEmoes-WVOyb42zmdsuA_qJEmOw6oLg5OUKctDf1U/edit?usp=sharing"
          className="font-bold uppercase text-white p-4 bg-emerald-800 rounded-full hover:bg-emerald-700 transition-colors"
        >
          Conheça Mais
        </a>
      </button>
    </div>
  )
}
export default LocalPage
