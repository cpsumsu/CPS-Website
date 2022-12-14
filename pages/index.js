import { useEffect } from 'react'
import useBodyScrollLock from '../hooks/useBodyScrollLock'

import Head from 'next/head'
import Carousel from '../components/carousel/Carousel'
import Introduction from '../components/section/Introduction'
import Events from '../components/event/Events'
import Vision from '../components/section/Vision'
import JoinUs from '../components/section/JoinUs'
import Divider from '../components/section/Divider'


export default function Home() {
  const carousel = [
    {id: 0, title: "提升競爭力", description: "透過各方面容易入手且點滿知識性的活動，培養出對電腦行業有一定基礎的小草苗。", alt: "image 1", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p1.jpg"},
    {id: 1, title: "培養人才", description: "透過各方面容易入手且點滿知識性的活動，培養出對電腦行業有一定基礎的小草苗。", alt: "image 2", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p2.jpg"},
    {id: 2, title: "軟硬實力", description: "透過各方面容易入手且點滿知識性的活動，培養出對電腦行業有一定基礎的小草苗。", alt: "image 3", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p3.jpg"},
    {id: 3, title: "勞逸結合", description: "透過各方面容易入手且點滿知識性的活動，培養出對電腦行業有一定基礎的小草苗。", alt: "image 3", imgURL: "https://www.cpsumsu.org/static/image/slideshow/slideshow_p1.jpg"},
  ];

  return (<>
        <Head>
          <title>CPS UMSU</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='theme-toggle'>
          <section id="carousel" className='h-screen snap-start'>
            <Carousel carousel={carousel} width={'100%'} height={'100%'}/>
          </section>

          <section id="intro" className='snap-end section-text-block'>
            <Introduction />
          </section>

          <Divider />

          <section id="event" className='snap-end section-text-block'>
            <Events />
          </section>

          <Divider />

          <section id="vision" className='snap-start md:snap-center section-text-block'>
            <Vision />
          </section>

          <Divider />

          <section id="join-us" className='snap-start md:snap-center section-text-block'>
            <JoinUs />
          </section>
        </main>
  </>)
}
