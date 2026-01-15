"use client"

import { useState } from "react"

const navItems = [
  { id: "about", label: "نبذة عني" },
  { id: "experience", label: "الخبرات" },
  { id: "projects", label: "المشاريع" },
]

export function ProfileNav() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <nav className="hidden lg:block space-y-1">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setActiveSection(item.id)}
          className={`group flex items-center gap-4 py-3 transition-all duration-300`}
        >
          <span
            className={`h-px transition-all duration-300 ${
              activeSection === item.id
                ? "w-16 bg-foreground"
                : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
            }`}
          />
          <span
            className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
              activeSection === item.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
            }`}
          >
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  )
}
