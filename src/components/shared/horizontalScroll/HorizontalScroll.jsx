import React, { useRef, useState, useEffect } from 'react';

function HorizontalScroll({children}) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (e) => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += e.deltaY;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleBodyScroll = (e) => {
      if (isHovered) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.body.addEventListener('wheel', handleBodyScroll, { passive: false });

    return () => {
      document.body.removeEventListener('wheel', handleBodyScroll);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      onWheel={handleScroll}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-row gap-4 overflow-x-auto hide_scrollbar"
    >
    {children}
    </div>
  );
}

export default HorizontalScroll;
