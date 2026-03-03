import { AboutSection } from '@/components/sections/About'
import { WorkSection } from '@/components/sections/Work'
import { ConnectSection } from '@/components/sections/Connect'
import { ProjectsSection } from '@/components/sections/Projects'
import { BlogsSection } from '@/components/sections/Blogs'
import Stack from '@mui/material/Stack'
import { FadeIn } from '@/components/ui/FadeIn'

export default function Personal() {
  return (
    <Stack spacing={8} component="main" sx={{ pt: 3 }}>
      <FadeIn delay={0} y={12}>
        <AboutSection />
      </FadeIn>
      <FadeIn delay={0.05} y={12}>
        <WorkSection />
      </FadeIn>
      <FadeIn delay={0.1} y={12}>
        <ProjectsSection />
      </FadeIn>
      <FadeIn delay={0.15} y={12}>
        <BlogsSection />
      </FadeIn>
      <FadeIn delay={0.2} y={12}>
        <ConnectSection />
      </FadeIn>
    </Stack>
  )
}
