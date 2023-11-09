import React, { useState } from 'react';
import InfiniteScroll from './InfinityScroll';

const Intersection = () => {
  const [items, setItems] = useState([]);
  const itemCount = 10;

  const loadMoreItems = () => {
    console.log("calling")
    setTimeout(() => {
        setItems((prevItems) => {
            return prevItems.concat(
              Array.from({ length: itemCount }, (_, index) => `Item ${prevItems.length + index + 1}`)
            );
          });
    }, 2000);
  };
  return (
    <div>
        {items.map((item,index)=>{
            return(
                <div key={index}>{item}</div> 
            )
        })}
      <InfiniteScroll onIntersect={loadMoreItems}>
        <div>Loading...</div>
      </InfiniteScroll>
    </div>
  );
}

export default Intersection;
