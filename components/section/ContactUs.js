import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactUs() {
  const motions = {
    hidden: {
      x: 400,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
  }

  const childMotions = {
    hidden: {
      y: 400,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const socialMedias = [
    {id: 0, name: 'youtube', imageUrl: '/social_media/sm-youtube.svg', url: 'https://www.youtube.com/@cpsumsu1903'},
    {id: 1, name: 'facebook', imageUrl: '/social_media/sm-facebook.svg', url: 'https://www.facebook.com/cps.umsu/'},
    {id: 2, name: 'instagram', imageUrl: '/social_media/sm-instagram.svg', url: 'https://www.instagram.com/cps.umsu/'},
    {id: 3, name: 'github', imageUrl: '/social_media/sm-github.svg', url: 'https://github.com/cpsumsu'},
    {id: 4, name: 'discord', imageUrl: '/social_media/sm-discord.svg', url: 'https://discord.gg/DnRsuvYqCf'},
  ];

  return (
    <motion.div className="relative w-full space-y-20 z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 1}}
      transition={{staggerChildren: 0.15}}
    >
      <motion.h2 className="block-title" variants={motions}>歡迎聯絡我們</motion.h2>
      <ul className='flex justify-between'>
        {socialMedias.map(media => {
          return (
            <motion.li key={media.id} variants={childMotions}>
              <Link href={media.url} target="_blank">
                <Image src={media.imageUrl} alt={media.name} width={50} height={50} className="w-14 h-14 md:w-20 md:h-20 hover:scale-110 hover:filter hover:brightness-150 dark:brightness-150 dark:hover:brightness-200"/>
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </motion.div>
  )
}
