import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Exams = () => {
  const cardsData = [
    // Kart verileri...
  ];

  // Sayfa başına kart sayısı
  const cardsPerPage = 5;

  // Toplam sayfa sayısı
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  // Aktif sayfa durumu
  const [currentPage, setCurrentPage] = useState(1);

  // Şu anki sayfadaki kartları al
  const currentCards = cardsData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  // Sayfa değiştirme fonksiyonu
  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='groups'>
      <h3 className="text-4xl font-bold  ml-60 mt-20">Sınavlar</h3>
      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg mt-12 ml-60">
        <table className="w-full text-xs sm:text-sm text-left rtl:text-right text-black dark:text-black">
          {/* Tablo içeriği buraya gelecek */}
        </table>
        {/* Sayfalama için */}
        <div className="flex justify-end mt-4">
          <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <FaAngleLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => changePage(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === index + 1 ? 'bg-indigo-600 text-white' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <FaAngleRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Exams;














// import React from 'react';


// const Exams = () => {
//   const cardsData = [
//     { title: 'Card 1', content: 'Content for Card 1' },
//     // { title: 'Card 2', content: 'Content for Card 2' },
//     // ... Diğer kartlar
//   ];

//   return (
    
// <div className='exams'>
// <h3 className="text-4xl font-bold  ml-60 mt-20">Sınavlar</h3>
// <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg mt-12 ml-60">
//   <table class="w-48 text-xs sm:text-sm text-left rtl:text-right text-black dark:text-black">
//         <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-neutral-50 dark:text-black">
//             <tr>
//                 <th scope="col" className="px-6 py-3">
//                     Product name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Color
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Category
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Price
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr className="bg-white border-b dark:bg-neutral-50 dark:border-gray-700">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
//                     Apple MacBook Pro 17"
//                 </th>
//                 <td className="px-6 py-4">
//                     Silver
//                 </td>
//                 <td className="px-6 py-4">
//                     Laptop
//                 </td>
//                 <td className="px-6 py-4">
//                     $2999
//                 </td>
//                 <td className="px-6 py-4">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-neutral-50 dark:border-gray-700">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
//                     Microsoft Surface Pro
//                 </th>
//                 <td className="px-6 py-4">
//                     White
//                 </td>
//                 <td className="px-6 py-4">
//                     Laptop PC
//                 </td>
//                 <td className="px-6 py-4">
//                     $1999
//                 </td>
//                 <td className="px-6 py-4">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr className="bg-white dark:bg-neutral-50">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
//                     Magic Mouse 2
//                 </th>
//                 <td className="px-6 py-4">
//                     Black
//                 </td>
//                 <td className="px-6 py-4">
//                     Accessories
//                 </td>
//                 <td className="px-6 py-4">
//                     $99
//                 </td>
//                 <td className="px-6 py-4">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>
// </div>
//   );
// };

// export default Exams;
