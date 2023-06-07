import Image from 'next/image'
import gif from 'public/gif.gif'
import { BsGeoAltFill } from 'react-icons/bs'

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center gap-16">
      <div className="flex flex-col items-start gap-5">
        <h1 className="font-bold text-5xl text-emerald-800">
          WorkShop CEManTIKA
        </h1>
        <h2 className="text-lg text-emerald-500">20 de Junho de 2023</h2>
        <div className="flex items-center gap-4">
          <BsGeoAltFill className="text-emerald-800" size={25} />
          <span className="text-xl text-emerald-800">Qualquer lugar</span>
        </div>
        <button className="p-3 rounded-lg bg-black text-emerald-300 hover:bg-emerald-700 hover:text-white transition-colors">
          <a href="">Conheça o local</a>
        </button>
      </div>
      <div className="bg-violet-600 -skew-x-6 rounded-lg overflow-hidden hover:skew-x-0 hover:scale-110 transition duration-300 border border-black">
        <Image className="opacity-50" src={gif} width={500} alt="" />
      </div>
    </main>
  )
}
