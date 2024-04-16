import Image from "next/image";

const Header = () => {
  const navigation = [
    { label: "Cek Kelembapan", link: "#data" },
  ];

  return (
    <header className="bg-white text-gray-800 p-4">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-medium text-blue-500">
          <a href="/">
            <Image src="/img/logo1.png" alt="N" width="70" height="70" />
          </a>
          <span>Humidity</span>
        </div>

        {/* Menu */}
        <div className="lg:hidden">
          <button className="text-gray-600 focus:outline-none focus:text-indigo-500">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menuItem, index) => (
              <li
                className={`mr-3 ${index !== navigation.length - 1 && "pr-3"}`}
                key={index}
              >
                <a
                  href={menuItem.link}
                  className="text-lg font-normal text-gray-800 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                >
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex">
          <a
            href="https://www.bmkg.go.id/"
            className="px-6 py-2 text-white bg-blue-500 rounded-md"
          >
            BMKG!
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
