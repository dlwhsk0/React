import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(prev => !prev) ; // 이전 값을 반대로 토글링

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`) // 비동기
      .then(res => res.json()) // json 형태로 변환 (배열)
      .then(data => {
        console.log('🔥뜨근한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
      return () => {
        console.log('깨끗하게 청소하는 일들을 합니다.')
      }
  }, [checked]);

  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange}/>
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

