'use client'

import Image from 'next/image'
import LogoCEManTIKA from 'public/quadrada-fundo-branco.png'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

interface NavBarButtomProps {
  url: string
  label: string
}

interface CustomMobileLinkProps {
  href: string
  title: string
  className?: string
  toggle: () => void
}

const NavBarButtom: React.FC<NavBarButtomProps> = ({ url, label }) => {
  const pathname = usePathname()
  return (
    <a
      href={url}
      className="font-bold transition p-2 text-emerald-800 relative group"
    >
      {label}
      <span
        className={`
                    h-1 w-0 inline-block bg-emerald-800 absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${pathname === url ? 'w-full' : 'w-0'}
                    `}
      >
        &nbsp;
      </span>
    </a>
  )
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
  href = '',
  title = '',
  className = '',
  toggle,
}) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }
  return (
    <button
      className={`${className} relative group text-white my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
                    h-1 w-0 inline-block bg-white
                    absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${pathname === href ? 'w-full' : 'w-0'}
                    `}
      >
        &nbsp;
      </span>
    </button>
  )
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex-row gap-10 uppercase hidden laptop:flex">
        <NavBarButtom url="/" label="Início" />
        <NavBarButtom url="/programacao" label="Programação" />
        <NavBarButtom url="/local" label="Local" />
        <a
          href="/inscricao"
          className={`font-bold hover:bg-emerald-800 text-emerald-800 hover:text-white transition-colors border border-emerald-800 rounded-xl p-2
          ${pathname === '/inscricao' ? 'bg-emerald-800 text-white' : null}
          `}
        >
          Inscreva-se
        </a>
      </div>
      <button
        className="flex visible flex-col justify-center items-center laptop:hidden gap-1"
        onClick={handleClick}
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>
      {isOpen ? (
        <div
          className="h-screen w-screen flex flex-col justify-center
          items-center fixed top-0 left-0 z-30
          bg-black/70 backdrop-blur-md py-32"
        >
          <button
            className="text-white fixed top-10 left-10"
            onClick={handleClick}
          >
            <AiFillCloseCircle size={50} />
          </button>
          <CustomMobileLink href="/" title="INÍCIO" toggle={handleClick} />
          <CustomMobileLink href="local" title="LOCAL" toggle={handleClick} />
          <CustomMobileLink
            href="programacao"
            title="PROGRAMAÇÃO"
            toggle={handleClick}
          />
          <CustomMobileLink
            href="/inscricao"
            title="INSCREVA-SE"
            toggle={handleClick}
          />
        </div>
      ) : null}
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
