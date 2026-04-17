import React from 'react';
import { RingLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
  <RingLoader />
    </div>
  );
};

export default Loading;