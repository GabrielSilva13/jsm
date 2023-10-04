import Link from 'next/link'

export const Footer = () => {
  function getActualYear() {
    return new Date().getFullYear()
  }

  return (
    <footer className="flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 text-white-800 max-md:flex-col">
      <p>
        Copyright &copy; {getActualYear()} JS Mastery Pro | Todos os direitos
        reservados
      </p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Termos & Condições</Link>
        <Link href="/privacy-policy">Política de Privacidade</Link>
      </div>
    </footer>
  )
}
