import {useState, useRef, useEffect} from 'react'
import Gallery from './Gallery';
import Header from './Header';
import ProgressBars from './ProgressBars';

export default function Carousel({carousel, width, maxWidth="none", height}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressBar, setProgressBar] = useState(0);

  const progressBarInterval = useRef(false);

  useEffect(() => {
    activateProgressBar(4);

    return () => clearInterval(progressBarInterval.current);
  }, [currentIndex]);

  // Helper Functions
  const activateProgressBar = (duration) => {
    clearInterval(progressBarInterval.current);

    setProgressBar(0);

    const PER_MS = 10;
    let count = 0;
    progressBarInterval.current = setInterval(() => {
      count += (1 / (duration * 1000 / PER_MS)) * 100;
      setProgressBar(count);
      if (count >= 100) {
        setTimeout(() => {
          setProgressBar(0);
          nextIndex();
        }, 500);
        clearInterval(progressBarInterval.current);
      }
    }, PER_MS);
  };

  const nextIndex = () => {
    setCurrentIndex(prev => {
      return prev === carousel.length - 1 ? 0 : prev + 1;
    });
  }

  const clickHandler = (index) => {
    setCurrentIndex(index)
    setProgressBar(0);
  }

  return (<>
    {/* Carousel Wrapper */}
    <div className="relative mx-auto overflow-hidden z-20" style={{width: width, height: height, maxWidth: maxWidth}}>
      {/* Images Section*/}
      <Gallery carousel={carousel} currentIndex={currentIndex} />
      {/* Title and Description */}
      <Header carousel={carousel} currentIndex={currentIndex} />
      {/* ProgressBars */}
      <ProgressBars carousel={carousel} currentIndex={currentIndex} progressBar={progressBar} clickHandler={clickHandler}/>
    </div>
  </>)

}
