import Image from "next/image";
export default function Hero() {
  const icons = [
    {
      name: "facebook",
      link: "#",
    },
    {
      name: "twitter",
      link: "#",
    },
    {
      name: "instagram",
      link: "#",
    },
  ];
  return (
    <section className="grid-container pt-28 pb-10">
      <main className="col-start-2 col-end-3 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-pink text-lg mb-4 md:text-2xl">Restaurant</h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-10 mb-2 md:mb-5 ">
            Enjoy Our
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold leading-10 mb-7 ">
            Majestic Meals
          </h1>
          <p className="text-sm mb-7  font-light">
            Vestibulum sed augue ac lorem rutrum congue. Donec cursus mollis
            sapien, non vulputate odio congue id. Sed mattis, tortor nec
            facilisis laoreet, mauris magna finibus nisl, eu pulvinar erat
            libero in turpis.
          </p>
          <div className="relative py-4 px-8 bg-gray-200 rounded-full flex items-center p-2 mb-8">
            <input
              type="text"
              name="email"
              id="email"
              aria-label="email"
              className="bg-gray-200 w-4/5 text-pink text-sm md:text-base"
              placeholder="John.doe@gmail.com"
            />
            <button className="py-3 px-8 rounded-full text-sm bg-pink text-white transform  absolute right-1 md:right-2  hover:shadow-2xl hover:scale-105">
              Subscribe
            </button>
          </div>
          <div className="flex gap-8 justify-center md:justify-start ">
            {icons.map(({ name, link }) => (
              <div
                className="cursor-pointer rounded-full p-2 grid place-content-center hover:bg-gray-200"
                key={name}
              >
                <box-icon
                  name={name}
                  type="logo"
                  size="md"
                  color="#2e050a"
                ></box-icon>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Image src="/images/hero-img.png" width={560} height={530} alt="hero" />
        </div>
      </main>
    </section>
  );
}
