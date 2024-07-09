"use client";
import InbodyAddChart from "@/components/additionalChart/inbodyAddChart";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Virtual = () => {
  const [itemList, setItemList] = useState<Array<any>>([]);
  const [page, setPage] = useState(1);
  const [size] = useState(10);
  const [ref, inView] = useInView({ threshold: 0 });

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${size}`);
    const data = await response.json();
    setItemList((prev) => [...prev, ...data]);
    setPage(page + 1);
  };

  useEffect(() => {
    if (inView) {
      fetchData();
    }
  }, [inView]);

  return (
    <div className="flex flex-wrap justify-center">
      {itemList.map((item: any) => (
        <div key={item.id}>
          <InbodyAddChart />
        </div>
      ))}
      <div ref={ref}>마지막 페이지</div>
    </div>
  );
};

export default Virtual;
