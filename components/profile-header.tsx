import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileHeader() {
  return (
    <div className="space-y-4">
      <Avatar className="w-24 h-24 border-2 border-primary/20">
        <AvatarImage src="/professional-arab-man-portrait.jpg" alt="صورة شخصية" />
        <AvatarFallback className="text-2xl bg-secondary text-secondary-foreground">أح</AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">أحمد الخالدي</h1>
        <h2 className="text-lg lg:text-xl font-medium text-primary">مهندس برمجيات أول</h2>
        <p className="text-muted-foreground leading-relaxed max-w-sm">
          أبني تجارب رقمية متميزة وواجهات مستخدم سلسة وجميلة للويب.
        </p>
      </div>
    </div>
  )
}
