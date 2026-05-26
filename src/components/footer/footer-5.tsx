import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"

interface FooterLink {
  text: string
  url: string
}

interface FooterIcon {
  icon: React.ReactNode
  url: string
}

interface Footer5Props {
  links?: FooterLink[]
  icons?: FooterIcon[]
  companyName?: string
  logoSrc?: string
  logoAlt?: string
}

const defaultLinks: FooterLink[] = [
  { text: "About", url: "#" },
  { text: "Services", url: "#" },
]

const defaultIcons: FooterIcon[] = [
  { icon: <InstagramLogoIcon />, url: "#" },
  { icon: <LinkedInLogoIcon />, url: "#" },
  { icon: <TwitterLogoIcon />, url: "#" },
]

export function Footer5({
  links = defaultLinks,
  icons = defaultIcons,
  companyName = "Magic UI",
  logoSrc = "https://magicui.design/icon.png",
  logoAlt = "Company Logo",
}: Footer5Props = {}) {
  return (
    <footer className="p-5 px-4 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-x-5 gap-y-5 md:flex-row md:items-center">
        <div className="header-logo flex items-center gap-x-2">
          <img
            className="h-8 w-8 rounded-full"
            src={logoSrc}
            alt={logoAlt}
          />
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            {companyName}
          </h2>
        </div>
        <div className="social-icons flex items-center gap-x-4">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="text-xl text-neutral-500 hover:text-neutral-900 hover:dark:text-white"
            >
              {icon.icon}
            </a>
          ))}
        </div>
        <ul className="flex flex-col items-start justify-center gap-x-10 md:flex-row md:items-center">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-400 hover:dark:text-neutral-100"
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
