import Link from 'next/link'
import CircularText from './CircularText'

const FormText = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={'fill-black animate-slow-spin'} />
        <Link
          href="mailto:rodrigomeliande@msn.com"
          className="flex items-center justify-center text-center
            absolute left-1/2 top-1/2 -translate-x-1/2 
            -translate-y-1/2 bg-emerald-800 text-white shadow-md
            border border-solid border-black rounded-full font-semibold uppercase
            hover:bg-white hover:text-black transition
            md:w-12 md:h-12 md:text-[10px]
            "
        >
          Link
        </Link>
      </div>
    </div>
  )
}

export default FormText
