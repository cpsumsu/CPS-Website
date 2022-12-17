import Image from "next/image"

export default function Gallery({carousel, currentIndex}) {
  return (<>
    <div className="w-full h-full transition duration-1000" style={{transform: `translateX(${-100 * currentIndex}%)`}}>
    <ul className="flex w-full h-full">
      {carousel.map(item => {
        return (
          <li key={item.id} className="relative w-full h-full shrink-0">
            <Image key={item.id} className="object-cover h-full w-full" src={item.imgURL} alt={item.alt} quality={100} fill priority={true}/>
          </li>
        )
      })}
    </ul>
  </div>
  </>)
}
