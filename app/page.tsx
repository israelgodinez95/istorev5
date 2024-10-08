'use client';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import furnitureLogo from "./public/images/furniture.png";

import 'swiper/css'; // Basic styles
import 'swiper/css/navigation'; // Optional: for navigation buttons
import 'swiper/css/pagination'; // Optional: for pagination dots

import { Navigation } from "swiper/modules";// Import modules if you want them
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <section className="welcome-section">
        <h1>Welcome to Our Furniture Store</h1>
        <p>
          Find the perfect furniture for your home, office, and more. Quality
          and design at its finest.
        </p>
        <div className="furniture-logo-container">
          <Image
            className="furniture-logo"
            src={furnitureLogo}
            alt="Furniture"
            width={150}
          />
        </div>
      </section>
      <section className="carousel-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80"
              alt="Living Room Furniture"
              layout="responsive"
              width={1200}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Office Furniture"
              width={1200}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
              alt="Dining Room Furniture"
              width={1200}
              height={500}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="carousel-section">
        {/* Placeholder for the image slider */}
        <div className="carousel">
          <Image
            src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slider Image 1"
            width={300}
            height={300}
            priority
          />
          <Image
            src="https://plus.unsplash.com/premium_photo-1678074057896-eee996d4a23e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slider Image 2"
            width={300}
            height={300}
            priority
          />
          {/* Add more images later */}
        </div>
      </section>

      <section className="key-products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {/* Example product */}
          <div className="product-card">
            <Image src="/images/sofa.jpg" alt="Sofa" width={300} height={300} />
            <h3>Modern Sofa</h3>
            <p>$499.99</p>
          </div>
          {/* Add more product cards */}
        </div>
      </section>
    </main>
  );
}
