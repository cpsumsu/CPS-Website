import EventCards from "./EventCards"

export default function Events() {
  const events = [
    { id: 1, name: "網頁設計工作坊-前端", leader: "KaLok, Tony, Kelvin", date: new Date("2022-4-9"), type: "工作坊", imageUrl: "https://cpsumsu.org/static/image/event/1_python_workshop_2022.png" },
    { id: 2, name: "英雄聯盟澳大杯", leader: "Wilson, Sunny,Ah Mo", date: new Date("2022-5-26"), type: "比賽", imageUrl: "https://cpsumsu.org/static/image/event/4_LOL_Cup_2022.png" },
    { id: 3, name: "遊戲設計工作坊", leader: "Tom", date: new Date("2022-1-8"), type: "工作坊", imageUrl: "https://cpsumsu.org/static/image/event/2_career_sharing_2021.png" },
    { id: 4, name: "遊戲設計工作坊", leader: "Tom", date: new Date("2022-1-8"), type: "工作坊", imageUrl: "https://cpsumsu.org/static/image/event/2_career_sharing_2021.png" },
    { id: 5, name: "遊戲設計工作坊", leader: "Tom", date: new Date("2022-1-8"), type: "工作坊", imageUrl: "https://cpsumsu.org/static/image/event/2_career_sharing_2021.png" },
  ];


  return (
    <div className='w-full space-y-2 md:space-y-16 translate-y-12'>
      <div className="flex justify-between items-baseline px-8 md:px-20">
        <h2 className='text-xl md:text-3xl font-bold'>最近活動</h2>
        <a href="" className='text-sm md:text-xl font-bold text-neutral-400'>查看更多<span>-&gt;</span></a>
      </div>
      <div className="flex w-full overflow-y-scroll scrollbar-none snap-x snap-mandatory">
        <EventCards events={events} />
      </div>
    </div>

  )
}
