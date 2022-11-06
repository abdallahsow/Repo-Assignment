import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/Home.module.css";

const cats = function () {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const json = await response.json();
    setCats(json);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  console.log(cats);

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
              <div className={styles.wrapper}>
          {cats.map((cat) => (
            <Card key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </>
  );
};

export default cats;
