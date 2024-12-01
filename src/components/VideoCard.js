import React from 'react';

function VideoCard({ info }) {
    console.log("info:", info)
  // Check if 'info' is defined before accessing its properties
  if (!info) {
    console.log("info is undefined");
    return <p>Loading...</p>;  
  }
  // Destructure 'snippet' safely after ensuring 'info' is available
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li className=''>{channelTitle}</li>
        <li className=''>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
