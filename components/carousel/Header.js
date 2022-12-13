export default function Header({carousel, currentIndex}) {
  return (
    <div className="absolute top-1/4 px-8 md:px-20 left-0 right-0 z-50 space-y-4">
        <h1 className='text-4xl font-bold text-white'>{carousel[currentIndex].title}</h1>
        <p className='text-lg font-bold text-description'>{carousel[currentIndex].description}</p>
    </div>
  )
}
