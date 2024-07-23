import React from 'react';

const TcfTable = () => {
  return (
    <div className='max-w-full flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-center text-sm font-light'>
              <thead className='border-b font-medium bg-[#D3FFFB]'>
                <tr>
                  <th className='px-6 py-4' colSpan='5'>
                    Overall TCF Score
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
                    549-699
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    16-20
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    549-699
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    16-20
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    9
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    524-548
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    14-15
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    523-548
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    14-15
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    8
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    499-523
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    12-13
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    503-522
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    12-13
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    7
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    453-498
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    10-11
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    458-502
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    10-11
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    6
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    406-452
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    7-9
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    398-457
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    7-9
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    5
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    375-405
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    6-6
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    369-397
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x bg-[#FBFAFA]'>
                    6-6
                  </td>
                </tr>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    4
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    342-374
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    4-5
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    331-368
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-normal border-x'>
                    4-5
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

export default TcfTable;
