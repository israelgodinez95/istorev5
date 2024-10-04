import Image from "next/image";
import furnitureLogo from "./public/images/furniture.png";

export default function Home() {
  return (
    <div className="home-div grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image src={furnitureLogo} alt="Furniture" width={200} />
        <section className="welcome-section">
          <h1>Welcome to Our Furniture Store</h1>
          <p>
            Find the perfect furniture for your home, office, and more. Quality
            and design at its finest.
          </p>
        </section>

        <section className="carousel-section">
          {/* Placeholder for the image slider */}
          <div className="carousel">
            <Image
              src="/images/slider1.jpg"
              alt="Slider Image 1"
              width={1200}
              height={500}
            />
            {/* Add more images later */}
          </div>
        </section>

        <section className="key-products-section">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {/* Example product */}
            <div className="product-card">
              <Image
                src="/images/sofa.jpg"
                alt="Sofa"
                width={300}
                height={300}
              />
              <h3>Modern Sofa</h3>
              <p>$499.99</p>
            </div>
            {/* Add more product cards */}
          </div>
        </section>
      </main>
    </div>
  );
}
