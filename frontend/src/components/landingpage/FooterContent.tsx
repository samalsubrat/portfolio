import Link from 'next/link'
import React from 'react'
const aboutLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/mission", label: "About" },
  ]
  
  const educationLinks = [
    { href: "/github", label: "Github" },
    { href: "/linkedin", label: "Linkedin" },
  ]
const FooterContent = () => {
  return (
    <>
    <footer className="bg-black-200 border-t border-black-300 z-50 h-[500px] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-neutral-300/80 font-medium tracking-wide">PAGES</h2>
            <nav className="flex flex-col space-y-2">
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-300/60 hover:text-[#85d2ff] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h2 className="text-neutral-300/80 font-medium tracking-wide">SOCIALS</h2>
            <nav className="flex flex-col space-y-2">
              {educationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-300/60 hover:text-[#85d2ff] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Decorative Text */}
          <div className="lg:col-span-2 flex items-center justify-center md:justify-end">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-neutral-300/80 tracking-wider">
              Subrat Samal
            </h1>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex justify-between items-center border-t border-black-300 pt-4">
          <p className="text-neutral-300/60 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default FooterContent