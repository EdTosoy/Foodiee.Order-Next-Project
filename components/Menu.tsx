import Image from "next/image";

export default function Menu() {
  return (
    <section className="grid-container">
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
          
        </div>
      </main>
    </section>
  );
}
