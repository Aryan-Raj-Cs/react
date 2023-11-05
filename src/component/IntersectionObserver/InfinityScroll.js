import React, { useRef, useEffect } from 'react';

const InfiniteScroll = ({ children, onIntersect }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust threshold as needed
    };
   
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            onIntersect()
            // console.log(targetRef.current)
            // observer.unobserve(targetRef.current);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [onIntersect]);

  return (
    <div>
      {children}
      <div ref={targetRef} />
    </div>
  );
};

export default InfiniteScroll;