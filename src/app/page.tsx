import Image from 'next/image'
import gif from 'public/gif.gif'
import { BsGeoAltFill } from 'react-icons/bs'

export default function Home() {
  return (
    <main className="h-screen pt-5 flex flex-col items-center justify-center gap-16 px-9">
      <h1 className="font-bold text-5xl text-center text-emerald-800">
        WorkShop CEManTIKA
      </h1>
      <div className="flex flex-col gap-5">
        <h2 className="uppercase text-lg text-emerald-500">
          20 de Junho de 2023
        </h2>
        <div className="flex items-center gap-4">
          <BsGeoAltFill className="text-emerald-800" size={25} />
          <span className="uppercase text-xl text-emerald-800">
            Qualquer lugar
          </span>
        </div>
        <button className="uppercase p-3 rounded-lg bg-emerald-800 text-white hover:bg-emerald-700 hover:text-white transition-colors">
          <a href="/sobre">Conheça o Workshop</a>
        </button>
      </div>
      <div className="">
        <Image className="rounded-lg" src={gif} width={500} alt="" />
      </div>
    </main>
  )
}
