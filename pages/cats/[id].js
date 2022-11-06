import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Cat() {
  const [cat, setCat] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = response.json();
    setCat(data);
  };

  useEffect(function () {
    fetchCat();
  }, []);

  return (
    <div>
      {null && (
        <div className="container mt-5" style={{ display: "flex" }}>
          <img src={cat.image.url} alt={cat.image.alt} />
          <div className="mx-5">
            <h1>{cat.name}</h1>
            <p>{cat.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}