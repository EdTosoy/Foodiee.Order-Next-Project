export default function Header() {
  const nav = [
    {
      name: "Home",
      id: "Home",
    },
    {
      name: "Menu",
      id: "Menu",
    },
    {
      name: "About",
      id: "About",
    },
    {
      name: "Services",
      id: "Services",
    },
    {
      name: "Get App",
      id: "Get-App",
    },
  ];
  return (
    <header className="grid-container py-3 border-b  ">
      <main className="col-start-2 col-end-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          <a href="#">
            Foodiee.<span className="text-pink">Order</span>
          </a>
        </h1>
        <div className="text-sm items-center hidden md:flex">
          {nav.map(({ name, id }) => (
            <nav key={id} className="mr-11 hover:text-pink  ">
              <a href={`#${id}`}>{name}</a>
            </nav>
          ))}
          <button className="py-3 px-8 rounded-full bg-pink text-white transform  hover:shadow-2xl hover:scale-105">
            Book Now
          </button>
        </div>
        <div className="grid place-content-start-center cursor-pointer md:hidden">
          <box-icon name="menu"></box-icon>
        </div>
      </main>
    </header>
  );
}
