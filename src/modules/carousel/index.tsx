'use client'
import spongebob from '@/assets/images/The_SpongeBob_Movie_Sponge_Out_of_Water-01.webp'
import albert from '@/assets/images/Albert-2015.webp'
import maheRoshani from '@/assets/images/Campaign_Mahe_Roshani-03.webp'
import combatWombat from '@/assets/images/Combat_Wombat-ve.webp'
import latte from '@/assets/images/Latte_and_the_Magic_Waterstone-01.webp'
import rambel from '@/assets/images/RAMBEL-MOVIE-VE.webp'
import turningRed from '@/assets/images/Turning_Red-01.webp'
import Image, { StaticImageData } from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { TCard } from '../homePageContent/types'

type TSlide = {
  id: number
  image: string | StaticImageData
  title: string
}
export const slidesContent: TSlide[] = [
  {
    id: 1,
    image: spongebob,
    title: 'The Spongebob Movie',
  },
  { id: 2, image: albert, title: 'Movie 2' },
  { id: 3, image: maheRoshani, title: 'Movie 3' },
  { id: 4, image: combatWombat, title: 'Movie 4' },
  { id: 5, image: latte, title: 'Movie 5' },
  { id: 6, image: rambel, title: 'Movie 6' },
  { id: 7, image: turningRed, title: 'Movie 7' },
]

type TCarouselProps = {
  slides?: TCard[]
  autoPlayInterval?: number
}

export default function Carousel({
  slides,
  autoPlayInterval = 2000,
}: TCarouselProps) {
  const swiperRef = useRef(null)

  // Set initial slide to the middle (4th slide - index 3)
  const initialSlide = 3

  return (
    <div className="no-scrollbar relative mx-auto mt-[64px] w-[450px] overflow-x-auto transition-all md:h-[760px] md:w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        initialSlide={initialSlide}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.4} // This shows exactly 70% of adjacent slides
        spaceBetween={30} // Increased space between slides
        pagination={{
          clickable: true,
          dynamicBullets: false,
          renderBullet: (index, className) =>
            `<span class="${className}"></span>`,
        }}
        autoplay={{
          delay: autoPlayInterval,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-full w-full"
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide
            key={`${slide.id}_${idx}`}
            className="w-[280px] overflow-hidden rounded-lg"
          >
            <div className="relative h-full w-full">
              <Image
                src={slide.media_object.posters.vertical_poster}
                alt={slide.title}
                fill
                className="object-contain"
                // sizes="(max-width: 768px) 70vw, 400px"
                priority={idx === 3} // Prioritize loading the initial slide
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-bold text-white">{slide.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for the Swiper container */}
      <style jsx global>{`
        .swiper {
          padding-bottom: 40px;
          overflow: visible;
          /* margin-right: -400px;
          margin-left: 0; */
        }

        .swiper-slide {
          height: 85% !important;
          transition: all 0.3s ease;
          border-radius: 12px;
        }

        .swiper-slide-active {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .swiper-pagination {
          position: absolute;
          bottom: 10px !important;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(128, 128, 128, 0.5);
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          width: 12px;
          height: 12px;
          background: white;
        }
      `}</style>
    </div>
  )
}
