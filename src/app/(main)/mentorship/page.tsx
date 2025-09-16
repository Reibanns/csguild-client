import React from 'react'


import { MentorListCard } from '@/features/mentorship/components/mentor-list-card'


export const metadata = {
  title: 'Mentorship | CS Guild',
  description: 'Find a mentor in the CS Guild community. Access guidance, share experiences, and foster growth through one-on-one mentorship. Join to connect with mentors, develop your skills, and advance your career in computer science.',
  keywords: ['mentorship', 'mentor', 'mentee', 'guidance', 'career development', 'computer science', 'growth', 'skills', 'networking'],
}
  

const mentors = [
  {
    name: 'John Kristoffer I. Bicierro',
    division: 'Technology & Development Division',
    teaching: 'Software Engineer & Full Stack Developer',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
  },
  {
    name: 'Melchor Filippe S. Bulanon',
    division: 'Research & Innovation Division',
    teaching: 'IoT & AI Engineer',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
    imageUrl: '/mentors/Melchor_Bulanon.jpg'
  },
  {
    name: 'Christian Vincent D. Cabral',
    division: 'Research & Innovation Division',
    teaching: 'ML Engineer',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
    imageUrl: '/mentors/Christian_Cabral.jpg'
  },
  {
    name: 'Romar John E. Castro',
    division: 'Technology & Development Division',
    teaching: 'UI/UX Designer & Frontend Developer',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
    imageUrl: '/mentors/Romar_Castro.jpg'
  },
  {
    name: 'Gabriel Angelo B. Catimbang',
    division: 'Technology & Development Division',
    teaching: 'DevOps Engineer & System Administrator',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
    imageUrl: '/mentors/Gabriel_Catimbang.jpg'
  },
  {
    name: 'John Michael V. Coronel',
    division: 'Technology & Development Division',
    teaching: 'Game Developer',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
  },
  {
    name: 'Selwyn John G. Guiruela',
    division: 'Research & Innovation Division',
    teaching: 'Blockchain & Web3 Developer',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
    imageUrl: '/mentors/Selwyn_Guiruela.jpg'
  },
  {
    name: 'Miguel Andre R. Pajarillo',
    division: 'Research & Innovation Division',
    teaching: 'Data Analytics & Project Management',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
    imageUrl: '/mentors/Miguel_Pajarillo.jpg'
  },
  {
    name: 'Wilfredo Paulo A. Perez',
    division: 'Research & Innovation Division',
    teaching: 'Network Security Specialists & Cybersecurity Researcher',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
  },
  {
    name: 'Miguel Armand B. Sta Ana',
    division: 'Technology & Development Division',
    teaching: 'Backend Developer',
    bookingUrl: 'https://calendar.google.com/',
    socialUrl: '/',
  },
]

export default function MentorshipPage() {
  return (
    <main className=" mx-auto px-6 py-8">
      <MentorListCard mentors={mentors} />
    </main>
  )
}