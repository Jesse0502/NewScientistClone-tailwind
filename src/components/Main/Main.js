import React from 'react';
import NewsReport from './NewsReport';
import Trending from './Trending';
import MoreFrom from './Bottom/MoreFrom';

function Main() {
  return (
    <div>
      <div className='my-5 lg:flex lg:flex-row justify-between gap-5 flex-col'>
        <NewsReport />
        <Trending />
      </div>
      <div className='my-10 flex-col'>
        <MoreFrom />
      </div>
    </div>
  );
}

export default Main;
