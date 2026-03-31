import React, { useState, useEffect } from 'react'
import TypingAnimation from '../components/TypingAnimation'
import Avatar from '../assets/Avatar.png'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ExternalLink,
  Code,
  User,
  Briefcase,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [typedText, setTypedText] = useState('')
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const fullText = "Hi, I'm Vaibhav Kumar"

  useEffect(() => {
    window.scrollTo(0, 0)

    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowSubtitle(true), 500)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    if (sectionId === 'resume') {
      window.open(
        'https://drive.google.com/file/d/1JyCXbaDLV6eJwJugRk98-few04kuI0l2/view?usp=sharing',
        '_blank',
      )
      return
    }

    if (sectionId === 'about-me') {
      sectionId = 'about'
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
    setMobileMenuOpen(false)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill in all fields')
      return
    }

    setIsLoading(true)
    setSubmitError('')

    // EmailJS configuration
    const serviceId = ''
    const templateId = ''
    const publicKey = ''

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Vaibhav Kumar',
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitError(
        'Failed to send message. Please try again or contact me directly.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  const techStack = [
    { name: 'HTML5', color: 'from-orange-500 to-orange-600', icon: '🌐' },
    { name: 'CSS3', color: 'from-blue-500 to-blue-600', icon: '🎨' },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500', icon: '⚡' },
    { name: 'React.js', color: 'from-cyan-400 to-cyan-500', icon: '⚛️' },
    { name: 'Node.js', color: 'from-green-600 to-green-700', icon: '🟢' },
    { name: 'C/C++', color: 'from-blue-600 to-blue-800', icon: '⚙️' },
    { name: 'Tailwind CSS', color: 'from-teal-400 to-teal-500', icon: '💨' },
    { name: 'Express.js', color: 'from-green-500 to-green-600', icon: '🖥️' },
    { name: 'MongoDB', color: 'from-green-400 to-green-500', icon: '🍃' },
    { name: 'Git', color: 'from-red-500 to-red-600', icon: '📝' },
    { name: 'GitHub', color: 'from-gray-700 to-gray-800', icon: '🐱' },
    { name: 'VS Code', color: 'from-blue-500 to-blue-600', icon: '💻' },
    { name: 'Bootstrap', color: 'from-purple-600 to-purple-700', icon: '🅱️' },
    { name: 'Vercel', color: 'from-black to-gray-800', icon: '⚡' },
    { name: 'DBMS', color: 'from-indigo-500 to-indigo-600', icon: '🗄️' },
    { name: 'DSA', color: 'from-pink-500 to-rose-500', icon: '🧠' },
  ]

  const projects = [
    {
      name: 'Kanban-Board',
      Image:
        'https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg',
      description: 'Professional Kanban board built with vanilla JavaScript',
      technologies: ['HTML', 'CSS3', 'JavaScript'],
      liveDemo: 'https://vaibhavkrla.github.io/kanban-board/',
      github: 'https://github.com/VaibhavKrla/kanban-board',
    },
    {
      name: 'Portfolio-Website',
      Image:
        'https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-1504.jpg',
      description:
        'Personal Portfolio of a Computer Science Engineer specializing in Full-Stack Web Development. Built with React and Tailwind CSS.',
      technologies: [
        'TailwindCSS',
        'React.js',
        ' Framer-Motion',
        'EmailJS',
        'Vercel',
        'GitHub',
        'VS Code',
        'Cursor',
        'Media Query',
      ],
      liveDemo: '#',
      github: 'https://github.com/VaibhavKrla/portfolio-site',
    },
    {
      name: 'Product-Store-PERN',
      Image:
        'https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg',
      // "https://img.freepik.com/free-vector/taxi-app-concept_23-2148485646.jpg",
      description:
        'This project, titled POSGRESTORE, is a modern full-stack inventory management application. It provides a clean, responsive interface for users to perform CRUD (Create, Read, Update, Delete) operations on a product catalog, including managing product names, prices, and image URLs.',
      technologies: [
        'React19',
        'Vite',
        'Zustand',
        'TailwindCSS',
        'Neon',
        'Arcjet',
      ],
      liveDemo: '#',
      github: 'https://github.com/VaibhavKrla/product-store-pern',
    },
    {
      name: 'Socially',
      Image:
        'https://img.freepik.com/free-vector/password-generator-interface-concept-illustration_114360-1236.jpg',
      description:
        'Socially is a responsive, full-stack social platform featuring user profiles, image-supported posts, and interactive "Like" and "Comment" systems. It includes a robust notification engine for social alerts and built-in dark mode for a seamless desktop and mobile experience.',
      technologies: [
        'Next.js',
        'React 18',
        'Tailwind CSS',
        'Clerk',
        'PostgreSQL',
      ],
      liveDemo: '#',
      github: 'https://github.com/VaibhavKrla/socially-nextjs',
    },
    {
      name: 'Backend-Ledger',
      Image:
        'https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg',
      description:
        'backend-ledger is a secure P2P financial system featuring an immutable ledger for transparent auditing. It ensures data integrity and prevents duplicate transactions through MongoDB atomic sessions and idempotency keys.',
      technologies: [
        'Javscript',
        'JWT',
        'Cookie-parser',
        'MongoDB',
        'Express.js',
      ],
      liveDemo: '#',
      github: 'https://github.com/VaibhavKrla/backend-ledger',
    },
  ]

  const navigationItems = [
    { name: 'Tech Stack', id: 'tech-stack' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'ping-me' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 z-50 shadow-xl shadow-purple-500/10 portfolio-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('about-me')}
                className="relative px-6 py-3 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 
                bg-gradient-to-br from-cyan-700/20 via-purple-800/20 to-pink-700/20 
                hover:from-cyan-600/30 hover:to-pink-600/30 
                border border-purple-500/30 
                backdrop-blur-md shadow-md group"
              >
                <span className="relative z-10">About Me</span>

                {/* Underline on hover */}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover:w-6 transition-all duration-300"></span>
              </button>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center desktop-nav">
              <div className="flex items-center space-x-3 rounded-full px-6 py-3 nav-buttons">
                {navigationItems.map((item) =>
                  item.isExternal ? (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-6 py-3 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 
                      bg-gradient-to-br from-cyan-700/20 via-purple-800/20 to-pink-700/20 
                      hover:from-cyan-600/30 hover:to-pink-600/30 
                      border border-purple-500/30 
                      backdrop-blur-md shadow-md group"
                    >
                      <span className="relative z-10">{item.name}</span>

                      {/* Underline on hover */}
                      <span
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                        bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full 
                        group-hover:w-6 transition-all duration-300"
                      ></span>
                    </a>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="relative px-6 py-3 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 
                      bg-gradient-to-br from-cyan-700/20 via-purple-800/20 to-pink-700/20 
                      hover:from-cyan-600/30 hover:to-pink-600/30 
                      border border-purple-500/30 
                      backdrop-blur-md shadow-md group"
                    >
                      <span className="relative z-10">{item.name}</span>

                      {/* Underline on hover */}
                      <span
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                      bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full 
                      group-hover:w-6 transition-all duration-300"
                      ></span>
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden mobile-menu-button">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 button-touch"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 py-4 nav-mobile">
              <div className="flex flex-col space-y-2 px-4">
                {navigationItems.map((item) =>
                  item.isExternal ? (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.id)
                        setMobileMenuOpen(false)
                      }}
                      className="text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      {item.name}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20 section-padding"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 pl-6 md:pl-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {typedText}
                  <span className="animate-pulse text-cyan-400">|</span>
                </span>
              </h1>

              <motion.div
                className={`transition-all duration-1000 ease-out ${
                  showSubtitle
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <TypingAnimation />
              </motion.div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Passionate about creating beautiful, functional web applications
              that solve real-world problems. I transform complex challenges
              into elegant, user-friendly solutions through innovative code.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/VaibhavKrla"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3 border border-white/10 hover:border-white/20"
              >
                <Github
                  size={28}
                  className="text-white group-hover:text-cyan-400 transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-kumar-57854a300/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-br from-blue-600/20 to-blue-800/10 hover:from-blue-500/30 hover:to-blue-700/20 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3 border border-blue-500/20 hover:border-blue-400/40"
              >
                <Linkedin
                  size={28}
                  className="text-white group-hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://www.instagram.com/vaibhav4511200/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-br from-pink-600/20 to-rose-800/10 hover:from-pink-500/30 hover:to-rose-700/20 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3 border border-pink-500/20 hover:border-pink-400/40"
              >
                <Instagram
                  size={28}
                  className="text-white group-hover:text-pink-400 transition-colors"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative w-80 h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src={Avatar}
                  alt="Vaibhav Kumar"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer rounded-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="py-24 px-4 relative overflow-hidden section-padding"
      >
        {/* Background Elements - Simplified */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent section-title">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Education Journey - Center */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Education Journey
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* DTU */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-gradient-to-b from-cyan-400 to-purple-500"
                  >
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:scale-102 transition-all duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-white">
                          Netaji Subhas University of Technology
                        </h4>
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm text-cyan-200 border border-cyan-500/30">
                          Current
                        </span>
                      </div>
                      <p className="text-gray-300 mb-2">
                        B.Tech in Computer Science and Engineering
                      </p>
                      <p className="text-gray-400 text-sm">2022 - 2026</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-sm text-gray-400">CGPA:</span>
                        <span className="text-cyan-400 font-semibold">
                          6.93
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Class XII */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-gradient-to-b from-purple-400 to-pink-500"
                  >
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:scale-102 transition-all duration-200">
                      <h4 className="text-xl font-bold text-white mb-3">
                        Delhi Public School, Indirapuram, Ghaziabad
                      </h4>
                      <p className="text-gray-300 mb-2">
                        Class XII (Science Stream)
                      </p>
                      <p className="text-gray-400 text-sm mb-3">2020 - 2021</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">
                          Percentage:
                        </span>
                        <span className="text-purple-400 font-semibold">
                          92.6%
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Class X */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-gradient-to-b from-pink-400 to-rose-500"
                  >
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:scale-102 transition-all duration-200">
                      <h4 className="text-xl font-bold text-white mb-3">
                        Delhi Public School, Indirapuram, Ghaziabad
                      </h4>
                      <p className="text-gray-300 mb-2">Class X</p>
                      <p className="text-gray-400 text-sm mb-3">2018 - 2019</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">
                          Percentage:
                        </span>
                        <span className="text-pink-400 font-semibold">
                          94.8%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Small Boxes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto achievement-cards">
              {/* Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:scale-102 transition-all duration-200 group cursor-pointer achievement-card"
                onClick={() =>
                  window.open('https://leetcode.com/u/vaibhavkrla77/', '_blank')
                }
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold">LC</span>
                </div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  300+
                </div>
                <div className="text-gray-300 text-sm">DSA Problems</div>
                <div className="text-xs text-gray-400 mt-1">
                  Click to view profile
                </div>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:scale-102 transition-all duration-200 group cursor-pointer achievement-card"
                onClick={() =>
                  window.open(
                    'https://www.codechef.com/users/vaibhav_kr77',
                    '_blank',
                  )
                }
              >
                <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold">CC</span>
                </div>
                <div className="text-2xl font-bold text-red-400 mb-1">
                  2⭐ (Rating-1414)
                </div>
                <div className="text-gray-300 text-sm">CodeChef Rating</div>
                <div className="text-xs text-gray-400 mt-1">
                  Click to view profile
                </div>
              </motion.div> */}

              {/* GitHub Projects Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:scale-102 transition-all duration-200 group cursor-pointer achievement-card"
                onClick={() =>
                  window.open('https://github.com/VaibhavKrla', '_blank')
                }
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Github size={20} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-300 mb-1">
                  Click Here
                </div>
                <div className="text-gray-300 text-sm">Projects Built</div>
                <div className="text-xs text-gray-400 mt-1">
                  Click to view GitHub
                </div>
              </motion.div>
            </div>

            {/* Account Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold text-white mb-6 text-center">
                Connect with me
              </h4>
              <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  viewport={{ once: true }}
                  onClick={() =>
                    window.open(
                      'https://leetcode.com/u/vaibhavkrla77/',
                      '_blank',
                    )
                  }
                  className="group bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 border border-orange-500/30 hover:border-orange-400/50 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">LC</span>
                    </div>
                    <div className="text-left">
                      <div className="text-white font-medium text-sm">
                        LeetCode
                      </div>
                      <div className="text-orange-300 text-xs">
                        View Profile
                      </div>
                    </div>
                  </div>
                </motion.button>

                {/* <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  viewport={{ once: true }}
                  onClick={() =>
                    window.open(
                      'https://www.codechef.com/users/vaibhav_kr77',
                      '_blank',
                    )
                  }
                  className="group bg-gradient-to-r from-red-500/20 to-red-600/20 hover:from-red-500/30 hover:to-red-600/30 border border-red-500/30 hover:border-red-400/50 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">CF</span>
                    </div>
                    <div className="text-left">
                      <div className="text-white font-medium text-sm">
                        CodeChef
                      </div>
                      <div className="text-red-300 text-xs">View Profile</div>
                    </div>
                  </div>
                </motion.button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech-stack"
        className="py-24 px-4 bg-black/20 backdrop-blur-sm section-padding"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent section-title">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 tech-grid">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-200 hover:scale-102 border border-white/10 hover:border-white/20 overflow-hidden tech-card"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-200`}
                ></div>
                <div className="relative text-center space-y-3">
                  <div className="text-4xl mb-3 group-hover:scale-105 transition-transform duration-200 tech-icon">
                    {tech.icon}
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors duration-200 tech-name">
                    {tech.name}
                  </h3>
                  <div
                    className={`h-1 bg-gradient-to-r ${tech.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 section-padding">
        <div className="grid lg:grid-cols-3 gap-10 projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 border border-white/10 hover:border-white/20 overflow-hidden project-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative space-y-6">
                {/* 🖼️ Image if exists */}
                {project.Image && (
                  <img
                    src={project.Image}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-xl border border-white/10 mb-4"
                  />
                )}

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
                    <Code size={24} className="text-cyan-400" />
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm font-medium text-cyan-200 border border-cyan-500/30 hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-6">
                  <a
                    href={project.liveDemo}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <ExternalLink size={18} />
                    <span className="font-medium text-gray-300">Live Demo</span>
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/30"
                  >
                    <Github size={18} />
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section
      <section
        id="ping-me"
        className="py-24 px-4 bg-black/20 backdrop-blur-sm section-padding"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent section-title">
            Let's Connect
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 contact-grid">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  Ready to collaborate?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm always excited to work on new projects and discuss
                  innovative ideas. Whether you have a project in mind or just
                  want to chat about tech, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="text-cyan-400" size={24} />
                  <span className="text-lg">Open to opportunities</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MessageCircle className="text-purple-400" size={24} />
                  <span className="text-lg">Quick response guaranteed</span>
                </div>
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/vaibhav4511200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram
                    size={28}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhav-kumar-57854a300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin
                    size={28}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://github.com/VaibhavKrla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-gray-700/25"
                >
                  <Github
                    size={28}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="mailto:vaibhavkrla@gmail.com"
                  className="group p-4 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  <Mail
                    size={28}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="text-8xl mb-6 animate-bounce">🎉</div>
                  <h3 className="text-3xl font-bold text-green-400 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xl text-gray-300">
                    Thanks for reaching out! I'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    Send me a message
                  </h3>

                  {submitError && (
                    <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-red-300 text-center">
                      {submitError}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows="6"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none text-white placeholder-gray-400 text-lg backdrop-blur-sm"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/20 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-black/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-300">
            Crafted with <span className="text-red-400 animate-pulse">❤️</span>{' '}
            and <span className="text-cyan-400">code</span> by{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold">
              Vaibhav Kumar
            </span>
          </p>
          <p className="text-gray-500 mt-2">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
