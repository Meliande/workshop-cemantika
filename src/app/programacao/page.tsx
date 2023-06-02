const PageProgramacao = () => {

  const participantes = [
    {
    autor : "rodrigo meliande1",
    descrição : "descrição1",
    },
    {
    autor : "rodrigo meliande2",
    descrição : "descrição2",
    },
  ]


  return ( 
    <div className="h-full p-64">
      <h1 className="text-violet-600 font-bold">Programação</h1>
      {/* {
        participantes.map(participante) => {
          return (
            <div></div>
          )
        }
      } */}
    </div>
  );
}
 
export default PageProgramacao;