'use client'

import { useEffect, useRef } from "react";

export default function Home() {

  const video = useRef<HTMLVideoElement>();

  const playVideo = (event: any) => {
    video.current && video.current.play();
  };
  
  return (
    <main className='h-screen flex flex-col gap-6 py-9 px-64'>
      <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
            <source src="public/Workshop CEManTIKA on 6-2-23 at 11.04 AM.webm" type='video/webm; codecs=vp9'/>
        </video>
      <p>
        Promovido mensalmente pela Comissão Especial de Sistemas Colaborativos da Sociedade Brasileira de Computação (SBC), o Simpósio Brasileiro de Sistemas Colaborativos (SBSC) visa agregar pesquisadores, estudantes e profissionais do Brasil e do exterior, com interesse em temas relacionados a tecnologias colaborativas.
        O evento sempre teve como objetivo central promover discussões que envolvam, sob várias perspectivas, o desenvolvimento e a avaliação de tecnologias colaborativas, a investigação de como a colaboração mediada pelas diferentes tecnologias ocorre na prática, e a aplicação dessas tecnologias em diversos domínios. Alguns exemplos atuais dessas tecnologias incluem:
      </p>
    </main>
  )
}
