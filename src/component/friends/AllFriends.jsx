import React from 'react';
import FriendCard from './FriendCard';

const AllFriends =async () => {
const res =await fetch('http://localhost:3000/data.json');
const friends =await res.json()
console.log(friends,'frommmmmm')


  return (
    <div className='md:mt-4  '>
    <div className='max-w-7xl mx-auto md:p-10 p-8'>
        <h2 className='text-2xl font-bold mb-3'>Your Friends</h2>
<div className='grid md:grid-cols-4 grid-cols-1 gap-4 '>
{friends.map(friend=><FriendCard key={friend.id} friend={friend}></FriendCard>)}
</div>
    </div>
    </div>
  );
};

export default AllFriends;