import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "#", label: "جيت هب" },
  { icon: Linkedin, href: "#", label: "لينكد إن" },
  { icon: Twitter, href: "#", label: "تويتر" },
  { icon: Mail, href: "#", label: "البريد الإلكتروني" },
]

export function ProfileSocial() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  )
}
