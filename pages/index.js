import Head from 'next/head'
import Carousel from '../components/carousel/Carousel'
import Introduction from '../components/section/Introduction'
import Events from '../components/event/Events'
import Vision from '../components/section/Vision'
import JoinUs from '../components/section/JoinUs'
import ContactUs from '../components/section/ContactUs'
import Divider from '../components/section/Divider'
import ScrollToTop from '../components/ScrollToTop'

import EventUtils from '../utils/EventUtils'


export default function HomePage(props) {
  const carousel = [
    {id: 0, title: "科普推廣", description: "致力舉辦工作坊，用簡單易懂的教學方式讓沒有相關基礎的同學也可以參與。再輔以實際操作，小白也能輕鬆上手。", alt: "科普推廣", imgURL: "https://cpsumsu.org/static/image/slideshow/slideshow_p3.jpg"},
    {id: 1, title: "培養人才", description: "通過比賽及工作坊等活動，提高同學各方面的能力，了解行業的發展，進而提升競爭力。", alt: "培養人才", imgURL: "https://cpsumsu.org/album/photo/cpsumsu-6.jpg"},
    {id: 2, title: "軟硬實力", description: "學會不僅著重硬實力，亦會創造機會，著重培養同學的溝通、表達和學習能力", alt: "軟硬實力", imgURL: "https://cpsumsu.org/album/photo/cpsumsu-1.jpg"},
    {id: 3, title: "勞逸結合", description: "除了提升能力外，學會亦定期舉辦各種活動來讓各同學得到放鬆並且促進成員之間的溝通。", alt: "勞逸結合", imgURL: "https://cpsumsu.org/album/photo/cpsumsu-3.jpg"},
  ];

  const { events } = props;

  return (<>
    <Head>
      <title>澳門大學電腦學會</title>
      <meta name="description" content="The official website of CPSUMSU." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className='theme-toggle'>
      {/* <ScrollToTop /> */}
      <section id="carousel" className='h-screen snap-start'>
        <Carousel carousel={carousel} width={'100%'} height={'100%'}/>
      </section>

      <section id="intro" className='section-text-block'>
        <Introduction />
      </section>

      <Divider />

      <section id="event" className='md:px-0 md:max-w-[1400px] mx-auto min-h-screen flex items-center'>
        <Events events={events}/>
      </section>

      <Divider />

      <section id="vision" className='section-text-block'>
        <Vision />
      </section>

      <Divider />

      <section id="join-us" className='section-text-block'>
        <JoinUs />
      </section>

      <Divider />

      <section id="contact-us" className='section-text-block'>
        <ContactUs />
      </section>
    </main>
  </>)
}

export async function getStaticProps() {
  const events = await EventUtils.getEvents(6);

  return { 
    props: {
      events: events,
    },
    revalidate: 60 * 30, // Re-generate the page every 30 mins
  };
}