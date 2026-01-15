import { ProfileHeader } from "@/components/profile-header"
import { ProfileNav } from "@/components/profile-nav"
import { ProfileAbout } from "@/components/profile-about"
import { ProfileExperience } from "@/components/profile-experience"
import { ProfileProjects } from "@/components/profile-projects"
import { ProfileSocial } from "@/components/profile-social"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="lg:sticky lg:top-20 space-y-8">
              <ProfileHeader />
              <ProfileNav />
              <ProfileSocial />
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-20">
            <ProfileAbout />
            <ProfileExperience />
            <ProfileProjects />
          </div>
        </div>
      </div>
    </main>
  )
}
