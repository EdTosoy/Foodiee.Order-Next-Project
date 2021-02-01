export default function Footer() {
  const footerLink = [
    {
      title: "Useful links",
      sub1: "Home",
      sub2: "About Us",
      sub3: "Get Application",
      sub4: "Services",
    },
    {
      title: "Legal",
      sub1: "Privacy Policy",
      sub2: "Terms & Conditions",
      sub3: "Help",
      sub4: "",
    },
    {
      title: "Contact Us",
      sub1: "+92 123211",
      sub2: "Hello@Foodie.Order",
      sub3: "Help@Foodie.Order",
      sub4: "Cashback",
    },
    {
      title: "Social media",
      sub1: "Facebook",
      sub2: "Twitter",
      sub3: "Instagram",
      sub4: "Youtube",
    },
  ];
  return (
    <footer className="grid-container bg-pinkGray pt-16 mt-10">
      <main className="col-start-2 col-end-3 grid my-8 gap-6 md:grid-cols-5">
        <div className="mb-2">
          <h1 className="text-xl font-semibold">
            <a href="#">
              Foodiee.<span className="text-pink">Order</span>
            </a>
          </h1>
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sodales ultrices est sit amet malesuada. Donec malesuada elementum
            sem, vel interdum urna fringilla quis. Donec fermentum nulla ac
            venenatis tincidunt. Aenean nec cursus urna,
          </p>
        </div>
        {footerLink.map(({ title, sub1, sub2, sub3, sub4 }) => (
          <div className="mb-2" key={title}>
            <h1 className="font-semibold mb-4">{title}</h1>
            <p className="my-3 hover:text-pink text-xs cursor-pointer">
              {sub1}
            </p>
            <p className="my-3 hover:text-pink text-xs cursor-pointer">
              {sub2}
            </p>
            <p className="my-3 hover:text-pink text-xs cursor-pointer">
              {sub3}
            </p>
            <p className="my-3 hover:text-pink text-xs cursor-pointer">
              {sub4}
            </p>
          </div>
        ))}
      </main>
      <p className="p-8 col-start-2 col-end-3 text-sm text-center ">
        Copyright © 2021 <span className="text-pink">foodie.order</span> All
        rights reserved
      </p>
    </footer>
  );
}
