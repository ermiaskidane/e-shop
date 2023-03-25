import { SiAcm } from 'react-icons/si'
function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <SiAcm className='inline pr-2 text-3xl' />

        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
