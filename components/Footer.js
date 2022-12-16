import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-navbar dark:bg-navbarDark snap-end">
      <div className="flex justify-center items-center md:flex-row md:justify-between py-4 theme-toggle-transition px-8 md:px-20 md:max-w-7xl mx-auto">
        <Image src={"/banner.png"} width={238} height={43} className="hidden md:block"/>
        <p className="hidden text-white text-xs lg:block">&copy; 2022 Computer Society of University of Macau Students’ Union. All rights reserved.</p>
        <a href={"mailto:cps.umsu@gmail.com"} className="hidden md:flex items-baseline space-x-1">
          <Image src={"/email.svg"} className="align-middle" width={12} height={12} />
          <p className="text-white text-xs">cps.umsu@gmail.com</p>
        </a>
        <p className="text-white text-xs lg:hidden">&copy; 2022 CPSUMSU | All rights reserved.</p>
      </div>
    </footer>
  )
}
