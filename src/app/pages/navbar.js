import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              {/* <a className="text-white text-xl font-bold">Logo</a> */}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                {/* <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a> */}
              </Link>
              <Link href="/about">
                {/* <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a> */}
              </Link>
              <Link href="/contact">
                {/* <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a> */}
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Add additional navigation items or components here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
