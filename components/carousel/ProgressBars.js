import ProgressBar from './ProgressBar'

export default function ProgressBars({carousel, currentIndex, progressBar, clickHandler}) {
  return (<>
    {/* Progress Bar */}
    <div className="absolute w-full z-20 px-8 md:px-20 bottom-20 md:bottom-24 left-1/2 -translate-x-1/2">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
        {carousel.map(item => {
          return (
            <ProgressBar key={item.id} item={item} currentIndex={currentIndex} progressBar={progressBar} clickHandler={clickHandler} />
          )
        })}
      </ul>
    </div>
  </>)
}
