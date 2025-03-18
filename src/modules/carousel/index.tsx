'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, FreeMode } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { TCard } from '../homePageContent/types'

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
    <div className="no-scrollbar relative mt-[32px] h-[415px] w-full overflow-hidden transition-all md:mt-[64px] md:h-[660px]">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        initialSlide={initialSlide}
        grabCursor={true}
        centeredSlides={true}
        freeMode={true}
        slidesPerView={2} // This shows exactly 70% of adjacent slides
        spaceBetween={12} // Increased space between slides
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          // renderBullet: (index, className) =>
          //   `<span class="${className}"></span>`,
        }}
        autoplay={{
          delay: autoPlayInterval,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination, FreeMode]}
        className="mySwiper relative h-full w-dvw"
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide
            key={`${slide.id}_${idx}`}
            className="w-full overflow-hidden rounded-lg"
          >
            <div className="relative h-full w-full">
              <Image
                src={slide.media_object.posters.vertical_poster}
                alt={slide.title}
                fill
                className="h-full w-full object-cover"
                priority={idx === 3} // Prioritize loading the initial slide
              />
              {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-bold text-white">{slide.title}</h3>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for the Swiper container */}
      <style jsx global>{`
        .swiper {
          padding-bottom: 40px;
          overflow: hidden;
          width: 100%;
        }

        .swiper-slide {
          height: 100% !important;
          transition: all 0.3s ease;
          border-radius: 12px;
        }

        .swiper-slide-active {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .swiper-pagination {
          position: absolute !important;
          width: fit-content !important;
          background-color: #f5f6f833;
          padding: 0px 8px;
          border-radius: 12px;
          left: 50% !important;
          transform: translateX(-50%);
          bottom: 15% !important;
          @media (min-width: 768px) {
            bottom: 10% !important;
            padding: 0px 10px;
          }
        }

        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: rgba(128, 128, 128, 0.5);
          opacity: 1;
          @media (min-width: 768px) {
            width: 8px;
            height: 8px;
          }
        }

        .swiper-pagination-bullet-active {
          width: 8px;
          height: 8px;
          background: white;
          @media (min-width: 768px) {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </div>
  )
}
