"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Scroll = () => {
  const [itemList, setItemList] = useState<Array<any>>([]);
  const [page, setPage] = useState(1);
  const [size] = useState(10);
  const [ref, inView] = useInView({ threshold: 0 });
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    if (!isLoading) {
      setIsLoading(true);
      try {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${size}`)
          .then((res) => res.json())
          .then((res) => {
            if (res.length !== 0) {
              setPage((prev) => prev + 1);
              setItemList((prev) => [...prev, ...res]);
            }
            setIsLoading(false);
          });
      } catch (e) {
        console.error(`Request: ${e}`);
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    if (inView) {
      fetchData();
    }
  }, [inView]);
  console.log(itemList);

  return (
    <div className="">
      {itemList.map((item: any) => (
        <div key={item.id} className="w-[500px] h-[500px] bg-blue-600">
          박스
          <div>{item.title}</div>
        </div>
      ))}
      <div ref={ref}>요소</div>
    </div>
  );
};

export default Scroll;
