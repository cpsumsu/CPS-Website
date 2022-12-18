import Image from "next/image"

export default function Gallery({carousel, currentIndex}) {
  return (<>
    <div className="w-full h-full transition duration-1000" style={{transform: `translateX(${-100 * currentIndex}%)`}}>
    <ul className="flex w-full h-full">
      {carousel.map(item => {
        return (
          <li key={item.id} className="relative w-full h-full shrink-0">
            {/* Image Linear Mask */}
            <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
            <Image key={item.id} className="object-cover h-full w-full blur-sm" src={item.imgURL} alt={item.alt} quality={100} fill priority={true}/>
          </li>
        )
      })}
    </ul>
  </div>
  </>)
}
