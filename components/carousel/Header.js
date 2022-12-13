export default function Header({carousel, currentIndex}) {
  return (
    <div className="absolute top-1/4 px-8 md:px-20 left-0 right-0 z-50 space-y-4 width-wrapper">
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-white'>{carousel[currentIndex].title}</h1>
        <p className='text-lg md:text-2xl lg:text-3xl font-bold text-subHeader'>{carousel[currentIndex].description}</p>
    </div>
  )
}
