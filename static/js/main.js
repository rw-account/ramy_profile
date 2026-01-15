// Navigation active state management
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll(".section")

  // Set initial active state
  if (navLinks.length > 0) {
    navLinks[0].classList.add("active")
  }

  // Handle click events
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navLinks.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Handle scroll events for active section detection
  function updateActiveSection() {
    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-section") === currentSection) {
        link.classList.add("active")
      }
    })
  }

  // Throttle scroll event
  let ticking = false
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection()
        ticking = false
      })
      ticking = true
    }
  })

  // Smooth scroll for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

// Image error handling with placeholder
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    if (!this.src.includes("placeholder")) {
      this.src = "/static/images/placeholder.jpg"
    }
  })
})
