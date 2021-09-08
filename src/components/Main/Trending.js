import React from 'react';

function Trending() {
  return (
    <div className='sticky cursor-pointer lg:w-2/5 justify-center mt-5 text-sm lg:text-lg lg:mt-0'>
      <div className='m-auto lg:w-5/6'>
        <div className='grid grid-flow-col gap-1'>
          <span className='border-2 font-semibold bg-primary-main text-white p-1 border-primary-main text-center'>
            Trending
          </span>
          {['Latest', 'Video', 'Free'].map((item) => (
            <span className='border-2 font-semibold bg-gray-200 p-1 text-center'>
              {item}
            </span>
          ))}
        </div>
        <div className='grid grid-flow-row gap-1 mt-1'>
          {[
            {
              heading:
                'Men fart more when eating a plant-based diet due to good gut bacteria',
              no: 1,
            },
            {
              heading:
                'How Minecraft is helping children with autism make new friends',
              no: 2,
            },
            {
              heading:
                'Listen to an Australian duck say ‘you bloody fool’ like a human',
              no: 3,
            },
            {
              heading:
                'Why it might be impossible to build a practical quantum computer',
              no: 4,
            },
            {
              heading:
                'Female octopuses throw things at males that are harassing them',
              no: 5,
            },
          ].map((item) => (
            <div className='grid grid-flow-col items-center py-1 px-3 bg-gray-200'>
              <span className='w-5/6 text-gray-800 font-bold text-lg lg:text-2xl hover:text-primary-main'>
                {item.heading}
              </span>
              <span className='w-1/6 text-right px-3 text-4xl text-primary-main'>
                {item.no}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
