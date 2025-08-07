'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, ArrowRight, ArrowLeft } from 'lucide-react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const allProjects = [
    {
      title: 'react-admin-dashboard',
      description:
        'A responsive admin dashboard for an e-commerce platform with analytics, inventory management, and order processing.',
      image: '/dashbord.JPG',
      tags: ['React', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://react-tailwind-admin-dashboard-zeta.vercel.app',
      githubUrl: 'https://github.com/wassim-dV/react-tailwind-admin-dashboard',
    },
    {
      title: 'Travel Booking App',
      description:
        'A modern travel booking application with destination search, booking management, and user authentication.',
      image: '/Travel.JPG',
      tags: ['React', 'Tailwind CSS'],
      liveUrl: 'https://travel-web-seven-zeta.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/travel-web',
    },
    {
      title: 'Hotel wibsit',
      description:
        'A web application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.',
      image: '/hotel.JPG',
      tags: ['React', 'Tailwind CSS', 'Responsive Design'],
      liveUrl: 'https://hotel-booking-tailwind-css.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/HotelBooking--TailwindCSS',
    },
    {
      title: 'Leading page -Bank-',
      description:
        'A personal portfolio website showcasing projects, skills, and contact information with a modern design.',
      image: '/bank.JPG',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://hoo-bank-ten-self.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/HooBank',
    },
    // 👇 مشاريع إضافية
    {
      title: 'modern-business-landing-page-react-tailwindcss ',
      description: 'modern-business-landing-page-react-tailwindcss.',
      image: '/education (2).JPG',
      tags: ['React', 'Redux', 'Tailwind CSS'],
      liveUrl:
        'https://modern-business-landing-page-react-tailwindcss-main.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/blog-app',
    },
    {
      title: 'blog Website',
      description: 'A modern and responsive blog  website ',
      image: '/blog.JPG',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl:
        'https://modern-business-landing-page-react-tailwindcss-main.vercel.app/',
      githubUrl:
        'https://github.com/wassim-dV/modern-business-landing-page-react-tailwindcss-main',
    },
    {
      title: 'react-admin-dashboard',
      description:
        'A responsive admin dashboard for an e-commerce platform with analytics, inventory management, and order processing.',
      image: '/ahbord.JPG',
      tags: ['React', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://react-dashboard-lovat-six.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/react-dashboard',
    },

    {
      title: 'education-leading-page',
      description: 'A responsive and modern education-leading-page.',
      image: '/education.JPG',
      tags: ['React', 'Tailwind CSS'],
      liveUrl: 'https://stockweb-main.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/stockweb-main',
    },
    {
      title: 'full-stack-ai-voice-interview',
      description:
        'Application web full-stack de simulation d’entretiens vocaux IA en temps réel avec génération de questions et interaction vocale.',
      image: '/interveiw.JPG',
      tags: [
        'Next.js',
        'Tailwind CSS',
        'ShadCN UI',
        'Firebase',
        'Vapi',
        'Google Gemini',
        'GPT-4',
      ],
      liveUrl: 'https://interview-platform-fv2t-9gvy8ebkz.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/interview_platform',
    },
    {
      title: 'enterprise-ai-ats',
      description:
        'Application web full-stack pour l’analyse intelligente de CV et le suivi de candidatures avec scoring ATS et feedback personnalisé.',
      image: '/ats project.JPG',
      tags: ['React', 'React Router', 'Tailwind CSS', 'Puter AI', 'Zustand'],
      liveUrl: 'https://applicant-tracking-system-lj4dz30pg.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/Applicant-Tracking-System',
    },
    {
      title: 'meedmeet-doctors-platform',
      description:
        'Plateforme complète de prise de rendez-vous médicaux avec appels vidéo, gestion des patients et abonnements.',
      image: '/doctors-appointment-platform.JPG',
      tags: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'ShadCN UI',
        'Prisma',
        'Neon',
        'Clerk',
        'Vonage',
      ],
      liveUrl: 'https://doctors-appointment-platform-lz3ety61j.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/Doctors-Appointment-Platform-',
    },
    {
      title: 'pixel-ai-photo-editor',
      description:
        'Éditeur d’images basé sur l’IA avec outils de retouche avancés, autosave et animations UI.',
      image: '/ai-photo.JPG',
      tags: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'ShadCN UI',
        'Convex',
        'Clerk',
        'ImageKit',
        'Fabric.js',
      ],
      liveUrl: 'https://ai-photo-editor-sigma.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/AI-Photo-Editor',
    },
    {
      title: 'ai-resume-builder',
      description:
        'Application web complète pour créer, gérer et partager des CV avec intégration AI, export PDF et thèmes clair/sombre.',
      image: '/cvbuild.JPG',
      tags: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'ShadCN UI',
        'Hono.js',
        'Drizzle ORM',
        'Kinde Auth',
        'Gemini AI',
        'jsPDF',
      ],
      liveUrl: 'https://cvbuild-ai.vercel.app/',
      githubUrl: 'https://github.com/wassim-dV/Ai-Resume-project',
    },
  ]

  // 👇 عدد المشاريع المعروضة (يبدأ بـ 4)
  const [visibleProjects, setVisibleProjects] = useState(4)

  // 👇 التحكم في العرض
  const showMoreProjects = () => setVisibleProjects(allProjects.length)
  const showLessProjects = () => setVisibleProjects(4)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id='projects' className='py-20 bg-gray-900'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className='text-3xl md:text-4xl font-bold mb-4'
          >
            My{' '}
            <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-400 max-w-2xl mx-auto'
          >
            Here are some of my recent projects. Click below to see more!
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
        >
          {allProjects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className='bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300'
            >
              <div className='relative h-60 overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-500 hover:scale-110'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-400 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 bg-gray-700 rounded-full text-xs'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a
                    href={project.liveUrl}
                    className='flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors'
                    target='_blank'
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className='flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors'
                    target='_blank'
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className='text-center mt-12'>
          {visibleProjects < allProjects.length ? (
            <button
              onClick={showMoreProjects}
              className='text-purple-400 hover:text-purple-300 transition-colors'
            >
              <ArrowRight style={{ marginLeft: '50px' }} size={16} /> View All
              Projects
            </button>
          ) : (
            <button
              onClick={showLessProjects}
              className='text-purple-400 hover:text-purple-300 transition-colors'
            >
              <ArrowLeft size={16} style={{ marginLeft: '30px' }} /> View Less
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
