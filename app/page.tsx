'use client'
import { motion } from 'framer-motion'
import { AboutSection } from '@/components/sections/About'
import { ExperienceSection } from '@/components/sections/Experience'
import { ConnectSection } from '@/components/sections/Connect'
import { ProjectsSection } from '@/components/sections/Projects'
import { BlogsSection } from '@/components/sections/Blogs'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogsSection />
      <ConnectSection />
    </motion.main>
  )
}
