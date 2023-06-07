const LocalPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-16">
      <h1 className="text-xl font-bold">
        Fique livre para acompanhar de onde quiser !
      </h1>
      <div>
        <p>
          Nosso evento será completamente realizado em um ambiente do metaverso,
          você pode nos acompanhar diretamente da sua casa.
        </p>
        <p>
          Nosso evento será completamente realizado em um ambiente do metaverso,
          você pode nos acompanhar diretamente da sua casa.
        </p>
      </div>
      <div className="flex">
        <div className="w-1/2 bg-red-600 skew-x-12">Assista pelo navegador</div>
        <div className="w-1/2 bg-green-600 skew-x-12">
          Assita pelo aplicativo mobile
        </div>
      </div>
    </div>
  )
}
export default LocalPage
