import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Info } from '../models/Character';

const Pagination = ({
  pageNumber,
  info,
  updatePageNumber,
}: {
  pageNumber: number;
  info: Info;
  updatePageNumber: Dispatch<SetStateAction<number>>;
}) => {
  const pageChange = (data: { selected: number }) => {
    updatePageNumber(data.selected + 1);
  };
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  return (
    <>
      <ReactPaginate
        containerClassName="flex list-none pl-0 text-lg justify-center"
        nextLabel="Next"
        previousLabel="Prev"
        previousLinkClassName="text-blue-500 py-4"
        nextLinkClassName="text-blue-500 py-4"
        breakLabel="..."
        breakClassName="text-lg p-4 text-blue-500 border border-blue-500"
        breakLinkClassName="text-blue-500 py-4"
        previousClassName="text-lg p-4 text-blue-500 border border-blue-500"
        nextClassName="text-lg p-4 text-blue-500 border border-blue-500"
        activeClassName="bg-blue-500 no-underline"
        activeLinkClassName="text-white "
        pageClassName="text-lg p-4 text-blue-500 border border-blue-500"
        pageLinkClassName="text-blue-500 py-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </>
  );
};

export default Pagination;
