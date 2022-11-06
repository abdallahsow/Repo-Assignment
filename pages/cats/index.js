import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";

const cats = function () {
  const [cats, setCats] = useState([]);

  const catsData = async () => {
    const response = await fetch("/api/cats");
    const json = await response.json();
    setCats(json);
  };

  useEffect(() => {
    catsData();
  }, []);

  console.log(cats);

  return (
    <div>
      <Navbar />
      {cats.map((cat, index) => (
        <Card key={index} {...cat} />
      ))}
    </div>
  );
};

export default cats;
