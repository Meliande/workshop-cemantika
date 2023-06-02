import Image from "next/image";
import LogoCEManTIKA from "public/quadrada-fundo-branco.png"
import LogoPGCOMP from "public/brasao-dcc.png"


const Navbar = () => {
  return (
    <div className="flex flex-row justify-between py-10 px-20 bg-gradient-to-l items-center from-sky-100 via-lime-100 to-purple-200">
      <div className="flex flex-col items-center gap-3">

      </div>
      <div className="flex flex-row gap-16 text-violet-600">
        <a href="/" className="font-bold hover:scale-110 transition">
          Início
        </a>
        <a href="/local" className="font-bold hover:scale-110 transition">
          Local
        </a>
        <a href="/programacao" className="font-bold hover:scale-110 transition">
          Programação
        </a>
        <a href="/organizacao" className="font-bold hover:scale-110 transition">
          Organização
        </a>
        <a href="/inscricoes" className="font-bold hover:scale-110 transition">
          Inscrições
        </a>
      </div>
      <div className="flex flex-col items-center gap-3 text-xs">
        <Image src={LogoCEManTIKA} alt="Logo do grupo CEManTIKA da UFBa" height={50}/>
        Realização
      </div>
    </div>
  );
}
 
export default Navbar