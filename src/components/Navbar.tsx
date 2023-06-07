'use client'

import Image from 'next/image'
import LogoCEManTIKA from 'public/quadrada-fundo-branco.png'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavBarButtomProps {
  url: string
  label: string
}
const NavBarButtom: React.FC<NavBarButtomProps> = ({ url, label }) => {
  const pathname = usePathname()
  return (
    <a
      href={url}
      className="font-bold transition p-2 text-violet-800 relative group"
    >
      {label}
      <span
        className={`
                    h-1 w-0 inline-block bg-violet-800 absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${pathname === url ? 'w-full' : 'w-0'}
                    `}
      >
        &nbsp;
      </span>
    </a>
  )
}
const Navbar = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row gap-10 uppercase xs:hidden">
        <NavBarButtom url="/" label="Início" />
        <NavBarButtom url="/programacao" label="Programação" />
        <NavBarButtom url="/local" label="Local" />
        <a
          href="/inscricao"
          className="font-bold hover:bg-purple-800 hover:text-white transition-colors border border-purple-800 rounded-xl p-2"
        >
          Inscreva-se
        </a>
      </div>
      <div className="flex flex-col items-center gap-3 text-xs pl-16">
        <Image
          src={LogoCEManTIKA}
          alt="Logo do grupo CEManTIKA da UFBa"
          height={100}
        />
        Realização
      </div>
    </div>
  )
}

export default Navbar
