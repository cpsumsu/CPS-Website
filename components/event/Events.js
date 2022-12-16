import Link from "next/link"
import { motion } from "framer-motion"
import EventCards from "./EventCards"

export default function Events() {
  const events = [
    { id: 1, name: "網頁設計工作坊-前端", leader: "KaLok, Tony, Kelvin", date:"9 Apr, 2022", type: "工作坊", imageUrl: "https://cpsumsu.org/static/image/event/1_python_workshop_2022.png" },
    { id: 2, name: "遊戲設計工作坊", leader: "Tom", date:"26 Mar, 2022", type: "工作坊", imageUrl: "https://cpsumsu.org/static/image/event/3_game_design_workshop_2022.png" },
    { id: 3, name: "網絡安全-職業分享會", leader: "Kelvin", date:"8 Jan, 2022", type: "工作坊", imageUrl: "https://cpsumsu.org/static/image/event/2_career_sharing_2021.png" },
    { id: 4, name: "英雄聯盟澳大杯", leader: "Wilson, Sunny,Ah Mo", date:"7 Oct, 2021", type: "比賽", imageUrl: "https://cpsumsu.org/static/image/event/4_LOL_Cup_2022.png" },
  ];

  const motions = {
    hidden: {
      y: 400,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      }
    },
  }

  return (
    <motion.div className='w-full space-y-2 md:space-y-16 translate-y-12'
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 1}}
      transition={{staggerChildren: 0.15}}
    >
      <motion.div className="flex justify-between items-baseline px-8 md:px-20" variants={motions}>
        <h2 className='text-xl md:text-3xl font-bold dark:text-white'>最近活動</h2>
        <Link href="#" className='text-sm md:text-xl font-bold text-neutral-500 dark:text-neutral-300 hover:text-neutral-700'>查看更多<span>&rarr;</span></Link>
      </motion.div>
      <div className="flex w-full overflow-y-scroll scrollbar-none snap-x snap-mandatory">
        <EventCards events={events} />
      </div>
    </motion.div>

  )
}
