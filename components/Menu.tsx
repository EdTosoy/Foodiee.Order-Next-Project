import Image from "next/image";

export default function Menu() {
  const products = [
    {
      name: "Pizza",
      image: "/images/pizza.png",
      text:
        "Eat luctus est vestibulum vel. Integer pulvinar nibh quis diam ullamcorper,",
      price: "10.22",
    },
    {
      name: "Burger",
      image: "/images/burger.png",
      text:
        "Eat luctus est vestibulum vel. Integer pulvinar nibh quis diam ullamcorper,",
      price: "9.99",
    },
    {
      name: "Salad",
      image: "/images/salad.png",
      text:
        "Eat luctus est vestibulum vel. Integer pulvinar nibh quis diam ullamcorper,",
      price: "8.49",
    },
  ];
  return (
    <section className="grid-container pt-24 pb-10" id="Menu">
      <main className="col-start-2 col-end-3">
        <div className="text-center w-full ">
          <h2 className="text-pink text-lg mb-4 md:text-2xl">Menu</h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-10 mb-2 md:mb-5 ">
            Popular Dishes
          </h1>
          <p className="text-sm mb-10  font-light ">
            Eat luctus est vestibulum vel. Integer pulvinar nibh quis diam
            ullamcorper,
          </p>
        </div>
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3">
          {products.map(({ image, name, price, text }) => (
            <div
              className="max-w-xs rounded-xl shadow-lg border mb-4 "
              key={name}
            >
              <Image
                src={image}
                width={350}
                className="rounded-xl"
                height={250}
                alt={name}
              />
              <div className="p-4">
                <h1 className="text-3xl  mb-4">{name}</h1>
                <p className="mb-4">{text}</p>
                <div className="flex justify-between items-center text-pink font-semibold text-lg">
                  <p>$ {price}</p>
                  <button className="font-semibold py-3 px-6 bg-pinkGray hover:bg-pink hover:text-white rounded-full">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="py-3 px-10 mt-10  rounded-full bg-pink text-white transform  hover:shadow-3xl hover:scale-105">
            View More
          </button>
        </div>
      </main>
    </section>
  );
}
