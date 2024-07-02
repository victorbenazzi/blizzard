"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";
import SlideData from "../data/SliderData.json";
import { Button } from "@/components/ui/button";
import { Mouse } from "lucide-react";
register();

import Image from "next/image";

interface Slide {
  id: number;
  heading: string;
  paragraph: string;
  label_button: string;
  link_button: string;
  logo: string;
  video_preview: string;
  link_video_preview: string;
  background: string;
}

const slides: Slide[] = SlideData;

export default function Slider() {
  return (
    <>
      <div className="relative -mt-[96px]">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-screen">
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="text-white bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.background})` }}>
              <div className="w-full h-full flex items-center justify-center gap-x-[178px]">
                <div className="w-[562px] flex flex-col items-start justify-center gap-y-4">
                  <h1 className="text-[64px] font-bold leading-[110.2%]">
                    {slide.heading}
                  </h1>
                  <p className="text-lg">{slide.paragraph}</p>
                  <Button asChild>
                    <a className="mt-4" href={slide.link_button}>
                      <Mouse size={14} strokeWidth={3} className="mr-2" />
                      {slide.label_button}
                    </a>
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-between gap-y-[80px]">
                  <div className="relative">
                    <Image
                      src={slide.logo}
                      alt="Logo"
                      width={312}
                      height={144}
                    />
                  </div>
                  <div className="relative">
                    <a href={slide.link_video_preview}>
                      <Image
                        src={slide.video_preview}
                        alt="Video Preview"
                        width={312}
                        height={144}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
