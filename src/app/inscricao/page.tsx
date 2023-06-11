'use client'

import React from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Inscricao = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(e.currentTarget)
    emailjs
      .sendForm(
        'service_lvkcstt',
        'template_357hsoq',
        e.currentTarget,
        'JgPDHXkbvSkfTwMeH',
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success(
            'Inscrição feita com sucesso, verifique o e-mail informado!',
          )
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.currentTarget.reset()
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <p className="w-1/6">
        As inscrições são gratuitas e abertas à qualquer pessoa, basta preencher
        o formulário abaixo para receber o link de acesso à plataforma que
        utilizaremos para realizar nosso Workshop
      </p>
      <form
        className="bg-emerald-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-emerald-800 text-sm font-bold mb-2"
            htmlFor="username"
          >
            NOME
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Seu nome"
            name="name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-emerald-800 text-sm font-bold mb-2"
            htmlFor="password"
          >
            E-MAIL
          </label>
          <input
            className="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Inscrever-se
          </button>
          <Toaster />
        </div>
      </form>
    </div>
  )
}

export default Inscricao
