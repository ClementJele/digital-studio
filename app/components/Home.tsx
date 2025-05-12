"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Image1 from "@/app/assets/images/image1.avif";
import Image2 from "@/app/assets/images/Image2.avif";
import Image3 from "@/app/assets/images/glassesLady.avif";
import Image4 from "@/app/assets/images/lipGloss.avif";
import Image5 from "@/app/assets/images/cellphone.avif";
import Image6 from "@/app/assets/images/monitor.avif";
import Image7 from "@/app/assets/images/circularImage.avif";
import { homePageStrings } from "@/lib/constants/strings";
import HomeContainerDivided from "./homeContainerDivided";

const HomePage = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;

      const scrollY = window.scrollY;
      const scrollSpeed = 2.3;
      const scrollSpeedBottomImages = 0.5;

      const horizontalScroll = scrollY * scrollSpeed;
      const verticalScroll = scrollY * scrollSpeedBottomImages;

      headingRef.current.style.transform = `translateX(-${horizontalScroll}px)`;

      // Apply to all images in the array
      imageRefs.current.forEach((ref) => {
        if (ref) ref.style.transform = `translateY(-${verticalScroll}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <section className="min-h-screen p-8">
        <Image
          src={Image1}
          alt="Image1"
          width={210}
          height={260}
          className="absolute top-13 left-70 z-50"
          ref={(el) => {
            imageRefs.current[0] = el;
          }}
        />

        <Image
          src={Image2}
          alt="Image2"
          width={150}
          height={180}
          className="absolute top-38 right-28 z-50"
          ref={(el) => {
            imageRefs.current[1] = el;
          }}
        />

        <Image
          src={Image3}
          alt="Image3"
          width={300}
          height={360}
          className="absolute -bottom-1 left-6 z-30"
        />

        <Image
          src={Image4}
          alt="Image4"
          width={194}
          height={280}
          className="absolute bottom-2 right-87 z-30 h-60"
        />

        <Image
          src={Image5}
          alt="Image5"
          width={223}
          height={320}
          className="absolute -bottom-100 left-74 z-50 h-58"
          ref={(el) => {
            imageRefs.current[2] = el;
          }}
        />

        <Image
          src={Image6}
          alt="Image6"
          width={210}
          height={304}
          className="absolute -bottom-110 right-30 w-72 h-82 z-50"
          ref={(el) => {
            imageRefs.current[3] = el;
          }}
        />
        {/* digita; studio title */}
        <div className="fixed  w-full h-screen pointer-events-none z-40 overflow-hidden">
          <h1
            ref={headingRef}
            className="text-[22rem]  tracking-tighter font-normal capitalize whitespace-nowrap will-change-transform font-[family-name:var(--font-oswald)]"
          >
            {homePageStrings[0].title.title}
          </h1>
        </div>
      </section>

      <section className="relative z-51 bg-white min-h-screen p-0 top-100">
        <div className="flex py-38  items-center justify-center   flex-col gap-12">
          <div className="text-3xl text-center font-semibold max-w-2xl">
            {homePageStrings[0].aboutUs.aboutUs}
          </div>
          <button className="rounded-md bg-blue-700 text-white capitalize w-fit py-3 px-6 cursor-pointer flex justify-center items-center font-medium">
            About us
          </button>
          <div className="px-8 w-screen flex flex-col gap-20 bg-gray-200 pb-8">
            <HomeContainerDivided />
            <HomeContainerDivided />
            <HomeContainerDivided />
          </div>
        </div>
      </section>

      <section className="relative min-h-screen z-51 top-100">
        <div className="text-gray-800 flex justify-center items-center flex-col gap-20">
          <Image
            src={Image7}
            alt="circular"
            className="rounded-full h-45 w-43 object-cover"
          />

          <div className="text-8xl font-normal text-gray-950 text-center max-w-5xl tracking-tighter  uppercase pb-20 border-b border-gray-700 font-[family-name:var(--font-oswald)]">
            &quot;{homePageStrings[0].section3.section3}&quot;
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
