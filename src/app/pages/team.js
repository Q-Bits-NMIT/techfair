import Card from "../components/card";

const Team = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Card Content */}
        <Card
          title="Sudhakar NM"
          description="President"
          imageUrl="/src/app/public/images/team/bg.jpg"
        />
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Card Content */}
        <Card
          title="Uttkarsh Sharma"
          description="Vice President"
          imageUrl="/src/app/public/images/team/bg.jpg"
        />
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Card Content */}
        <Card
          title="Sumon Mondal"
          description="Marketing Head"
          imageUrl="/src/app/public/images/team/bg.jpg"
        />
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Card Content */}
        <Card
          title="Shashwat Dixit"
          description="Technical Head"
          imageUrl="/src/app/public/images/team/bg.jpg"
        />
      </div>
    </div>
  );
};

export default Team;
