import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "٢٠٢٢ — الآن",
    title: "مهندس برمجيات أول، إمكانية الوصول",
    company: "تقنية المستقبل",
    companyUrl: "#",
    description:
      "بناء وصيانة المكونات الحيوية المستخدمة لبناء الواجهة الأمامية عبر المنصة بأكملها. العمل بشكل وثيق مع الفرق متعددة التخصصات، بما في ذلك المطورين والمصممين ومديري المنتجات.",
    skills: ["جافاسكريبت", "تايب سكريبت", "رياكت", "Next.js"],
  },
  {
    period: "٢٠٢٠ — ٢٠٢٢",
    title: "مطور واجهات أمامية",
    company: "الابتكار الرقمي",
    companyUrl: "#",
    description:
      "تطوير وصيانة تطبيقات الويب للعملاء المتنوعين. التعاون مع فرق التصميم لتحويل النماذج إلى واجهات تفاعلية عالية الجودة.",
    skills: ["Vue.js", "Nuxt", "تايلويند", "Figma"],
  },
  {
    period: "٢٠١٨ — ٢٠٢٠",
    title: "مطور ويب",
    company: "وكالة الإبداع",
    companyUrl: "#",
    description:
      "بناء مواقع ويب استجابية وتطبيقات ويب للعملاء في مختلف الصناعات. العمل على تحسين الأداء وتجربة المستخدم.",
    skills: ["HTML", "CSS", "جافاسكريبت", "ووردبريس"],
  },
]

export function ProfileExperience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h3 className="text-sm font-medium uppercase tracking-widest text-primary mb-8 lg:hidden">الخبرات</h3>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative grid grid-cols-1 sm:grid-cols-8 gap-4 p-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-card/50"
          >
            <div className="sm:col-span-2 text-sm text-muted-foreground font-medium">{exp.period}</div>

            <div className="sm:col-span-6 space-y-3">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {exp.title} ·
                <a href={exp.companyUrl} className="hover:underline mr-1" target="_blank" rel="noopener noreferrer">
                  {exp.company}
                  <span className="inline-block mr-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
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
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="#"
          className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
        >
          عرض السيرة الذاتية الكاملة
          <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </a>
      </div>
    </section>
  )
}
