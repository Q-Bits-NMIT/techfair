import Link from 'next/link';

const GoogleFormButtons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-64 md-64 gap-32">
      <div>
        <Link href="https://google.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-2xl rounded">
            Register For Events
        </Link>
      </div>
      <div>
        <Link href="https://google.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-2xl rounded">
            Register For Activities
        </Link>
      </div>
    </div>
  );
};

export default GoogleFormButtons;
