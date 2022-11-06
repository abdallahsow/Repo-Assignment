import { useEffect, useState } from "react";

export default function Cat() {
  const [singleCat, setSingleCat] = useState([]);

  const fetchCat = async () => {
    const response = await fetch("/api/cats/[id]");
    const data = await response.json();
    setSingleCat(data);
  };

  useEffect(function () {
    fetchCat();
  }, []);

    console.log(singleCat);
    
  return <div>{singleCat}</div>;
}
