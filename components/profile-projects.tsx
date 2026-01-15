import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "منصة التعلم الإلكتروني",
    description: "منصة تعليمية شاملة تقدم دورات تفاعلية ومحتوى تعليمي متنوع. تدعم المنصة أكثر من ١٠٠ ألف متعلم نشط.",
    image: "/e-learning-platform-dashboard-arabic.jpg",
    url: "#",
    skills: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
  },
  {
    title: "تطبيق إدارة المهام",
    description: "تطبيق ويب لإدارة المهام والمشاريع بطريقة فعالة. يتضمن ميزات التعاون الجماعي والتتبع الزمني.",
    image: "/task-management-app-dashboard-arabic.jpg",
    url: "#",
    skills: ["رياكت", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "متجر إلكتروني",
    description: "متجر إلكتروني متكامل مع نظام إدارة المحتوى ولوحة تحكم للبائعين. يدعم طرق دفع متعددة.",
    image: "/e-commerce-store-arabic-interface.jpg",
    url: "#",
    skills: ["Vue.js", "Laravel", "MySQL", "تايلويند"],
  },
]

export function ProfileProjects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h3 className="text-sm font-medium uppercase tracking-widest text-primary mb-8 lg:hidden">المشاريع</h3>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            className="group relative grid grid-cols-1 sm:grid-cols-8 gap-4 p-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-card/50"
          >
            <div className="sm:col-span-3 order-2 sm:order-1">
              <div className="relative overflow-hidden rounded-md border border-border/50 bg-secondary/30">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={350}
                  height={200}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="sm:col-span-5 space-y-3 order-1 sm:order-2">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                {project.title}
                <span className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="#"
          className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
        >
          عرض أرشيف المشاريع
          <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </a>
      </div>
    </section>
  )
}
