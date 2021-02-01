import Image from "next/image";
import Tilt from "react-parallax-tilt";
export default function About() {
  return (
    <section className="grid-container pt-28 pb-10" id="About" >
      <main className="col-start-2 col-end-3 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-pink text-lg mb-4 md:text-2xl">About us</h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-10 mb-2 md:mb-5">
            Best Food
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold leading-10 mb-7">
            In Your City
          </h1>
          <p className="text-sm mb-7 font-light">
            Nam et felis et lorem suscipit luctus et eu nisl. Praesent
            vestibulum, augue sed volutpat egestas, tortor enim efficitur
            mauris, id sodales velit augue sed ligula. Vestibulum eu ullamcorper
            orci.
          </p>
          <p className="text-sm mb-7  font-light">
            Hello world this is something is going in this world which is not
            good for Etiam mattis ante metus, quis vulputate est malesuada non.
            Proin blandit urna nulla, ac tincidunt sapien pharetra nec. Nulla a
            faucibus odio. Duis tincidunt arcu vel pretium ultrices
          </p>

          <button className="py-3 px-8 rounded-full text-sm bg-pink text-white transform   hover:shadow-2xl hover:scale-105">
            Read More
          </button>
        </div>
        <Tilt>
          <div className="">
            <Image
              src="/images/about.png"
              width={560}
              height={530}
              alt="about"
            />
          </div>
        </Tilt>
      </main>
    </section>
  );
}
