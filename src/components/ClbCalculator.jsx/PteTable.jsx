import React from 'react';

const PteTable = () => {
  return (
    <div className='max-w-full flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-center text-sm font-light'>
              <thead className='border-b font-medium bg-[#D3FFFB]'>
                <tr>
                  <th className='px-6 py-4' colSpan='5'>
                    Overall PTE Score
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-medium border-x'>
                    CLB
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-medium border-x'>
                    Reading
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-medium border-x'>
                    Writing
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-medium border-x'>
                    Listening
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-medium border-x'>
                    Speaking
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    10
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    88-90
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    90
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    89-90
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    89-90
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    9
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    78-87
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    88-89
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    82-88
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    84-88
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    8
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    69-77
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    79-87
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    71-81
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    76-83
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    7
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    60-68
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    69-78
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    60-70
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    68-75
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    6
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    51-59
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    60-68
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    50-59
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    59-67
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    5
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    42-50
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    51-59
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    39-49
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    51-58
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    4
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    33-41
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    41-50
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    28-38
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    42-50
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    3
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    24-32
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    32-40
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    18-27
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    34-41
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PteTable;
