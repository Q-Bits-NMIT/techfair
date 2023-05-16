// import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-16">
      <div className="md:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis dolor vel
          fermentum ultrices. Suspendisse efficitur scelerisque nisi. Sed et ultrices felis. Duis
          fringilla nisi vitae odio maximus volutpat.
        </p>
      </div>
      <div className="md:w-1/2 p-8">
        <Image
          src="/src/app/public/images/team/bg.jpg"
          alt="About Us"
          width={500}
          height={500}
          // objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default AboutPage;
