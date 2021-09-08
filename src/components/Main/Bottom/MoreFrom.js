import React from 'react';
import Space1 from '../../../images/more-news-humans.jpg';
import Space2 from '../../../images/more-news-humans-2.jpg';
import Life from '../../../images/more-news-life.jpg';
import moon from '../../../images/more-news-space.jpg';
function MoreFrom() {
  const moreFromNews = [
    {
      img: Space2,
      title:
        'The Wonderful review: The people who came together to make the ISS',
      subtop: 'HUMANS',
    },
    {
      img: Space2,
      title: 'Now is the perfect time to spot Neptune and Uranus',
      subtop: 'HUMANS',
    },
    {
      img: Life,
      title:
        'Martian cave entrances may offer a life-friendly radiation shield',
      subtop: 'LIFE',
    },
    {
      img: moon,
      title: 'Female octopuses throw things at males that are harassing them',
      subtop: 'SPACE',
    },
  ];

  return (
    <div className='relative h-96 cursor-pointer'>
      <span className='py-3 font-semibold font-sans text-4xl text-gray-700 lg:text-4xl'>
        MORE FROM NEW SCIENTIST
      </span>
      <div className='lg:flex flex-wrap justify-between w-full my-10'>
        {moreFromNews.map((item) => (
          <div className='lg:w-60 lg:h-20 py-4 lg:py-0 '>
            <div className='relative'>
              <span className='absolute top-0 left-0 bg-primary-text text-white p-3 rounded-md'>
                {item.subtop}
              </span>
              <img className='w-full object-cover' src={item.img} alt='img' />
            </div>
            <span className='font-bold text-xl lg:text-2xl text-primary-text hover:text-primary-onHover'>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreFrom;
