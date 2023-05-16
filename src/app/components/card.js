import Image from "next/image";


const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* <img className="h-48 w-full object-cover" src={imageUrl} alt={title} /> */}
      {/* <Image className="h-48 w-full object-cover" src={imageUrl} alt={title} /> */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>z
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
