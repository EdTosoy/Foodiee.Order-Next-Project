import Image from "next/image";
export default function App() {
  return (
    <section className="grid-container pt-28 pb-10">
      <main className="col-start-2 col-end-3 flex flex-col-reverse md:flex-row-reverse justify-between items-center text-white p-10 rounded-2xl bg-brown">
        <div className="text-center md:text-left max-w-md mt-10">
          <h2 className="text-lg mb-4 md:text-2xl">10% Cashback</h2>
          <h1 className="text-2xl md:text-5xl  font-semiboldbold leading-10 mb-2 md:mb-5 ">
            Now You Can Order
          </h1>
          <h1 className="text-2xl md:text-5xl  font-semiboldbold leading-10 mb-7">
            From Mobile
          </h1>
          <p className="text-sm font-light">
            Nam et felis et lorem suscipit luctus et eu nisl. Praesent
            vestibulum, augue sed volutpat egestas, tortor enim efficitur
            mauris, id sodales velit augue sed ligula. Vestibulum eu ullamcorper
            orci.
          </p>
          
          <button className="w-20 m-4 -mt-4 md:m-0 md:w-36 md:mr-8 rounded-full transform   hover:scale-105" aria-label="download">
                <Image
              src="/images/google-play.svg"
              width={140}
              height={140}
              alt="download"
            />
          </button>

          <button className="w-20 m-4 md:w-36 md:mr-8 rounded-full transform   hover:scale-105" aria-label="download" >
            <Image
              src="/images/apple-store.svg"
              width={140}
              height={140}
              alt="download"
            />
          </button>
        </div>
        <div className="">
          <Image src="/images/cta.png" width={500} height={470} alt="app" />
        </div>
      </main>
    </section>
  );
}
