"use client";
import React, { useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Pagination = ({ totalPages, Value }) => {
  const [currentPage, setCurrentPage] = useState(Value);
  const router = useRouter();

  const handlePageChange = (e) => {
    const selectedPage = parseInt(e.target.value);

    if (selectedPage === 2) {
      router.push("/week1", { scroll: false });
    }
    if (selectedPage === 1) {
      router.push("/", { scroll: false });
    }
    setCurrentPage(selectedPage);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));

    if (currentPage === 1) {
      router.push("/week1", { scroll: false });
    }
  };

  const goToPreviousPage = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);

    if (newPage === 1) {
      router.push("/", { scroll: false });
    }
  };

  return (
    <div className="flex gap-4">
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        <Image
          width={1000}
          height={1000}
          src="/left.png"
          className="md:w-[41px] md:h-[45px] w-[25px] h-[25px]  2xl:w-[60px] 2xl:h-[60px]"
        />
      </button>

      <select
        className="w-[75px] 2xl:w-[100px] bg-[#CD3F98] text-white rounded-md md:p-2 "
        value={currentPage}
        onChange={handlePageChange}
      >
        {[...Array(totalPages).keys()].map((page) => (
          <option key={page + 1} value={page + 1}>
            {page + 1}
          </option>
        ))}
      </select>

      <button onClick={goToNextPage} disabled={currentPage === 2}>
        <Image
          width={1000}
          height={1000}
          src="/right.png"
          className="md:w-[41px] md:h-[45px] w-[25px] h-[25px]  2xl:w-[60px] 2xl:h-[60px]"
        />
      </button>
    </div>
  );
};

export default Pagination;
