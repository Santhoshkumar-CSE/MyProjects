import ProductCard from "./shared/ProductCard";

const products = [
    {
        image: "https://imgs.search.brave.com/p-0vUoGP9eXO1t9NcGrzbyV7e-q6WXwmCAoQdlGR9Vg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8yNi8xOS80MC9p/cGhvbmUtNzQ4MTQw/MF82NDAuanBn",
        productName: "iPhone 13 Pro Max",
        description:
          "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
        specialPrice: 720,
        price: 780,
      },
      {
        image: "https://imgs.search.brave.com/bBZ642oPxbVVU4IeQN62tshaAegNJ53otsZLjNDsQB0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ha20t/aW1nLWEtaW4udG9z/c2h1Yi5jb20vaW5k/aWF0b2RheS9pbWFn/ZXMvc3RvcnkvMjAy/MTAxL0dhbGF4eV9T/MjFfbmV3XzEyMDB4/NzY4LnBuZz9zaXpl/PTY5MDozODg",
        productName: "Samsung Galaxy S21",
        description:
          "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
        specialPrice: 699,
        price: 799,
      },
      {
        image: "https://imgs.search.brave.com/D7uCUuxyeKQqlSIy1wr2RulXYqjTl6b4_xmrSg6ttxo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvMjI3NTUx/MTAvR29vZ2xlX1Bp/eGVsXzYuanBnP3F1/YWxpdHk9OTAmc3Ry/aXA9YWxsJmNyb3A9/MCwwLDEwMCwxMDAm/dz0yNDAw",
        productName: "Google Pixel 6",
        description:
          "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
        price: 599,
        specialPrice: 400,
      }
];

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>
           <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">
                        Welcome to our e-commerce store! We are dedicated to providing the
                        best products and services to our customers. Our mission is to offer
                        a seamless shopping experience while ensuring the highest quality of
                        our offerings.
                    </p>
                </div>

                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="https://imgs.search.brave.com/gGJoNogPe5lXoFJSlFSszh3c-pb1WsKQuAQ0HN1cWnw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NTA4NTg5OS9waG90/by9vbmxpbmUtc2hv/cHBpbmcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU5rVnhW/cm4tZTJjNFdMVlUw/eVZDcnFqeldkV1dW/bERJYnF4WjJ0SmY0/NDg9"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"></img>
                </div>
           </div>


           <div className="py-7 space-y-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center">
                Our Products
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {products.map((product, index) => (
                <ProductCard 
                    key={index}
                    image={product.image}
                    productName={product.productName}
                    description={product.description}
                    specialPrice={product.specialPrice}
                    price={product.price}
                    about
                />
               ))
               }
                

            </div>
           </div>
        </div>
    );
}

export default About;
