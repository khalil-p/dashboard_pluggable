import React, { useRef, useState, useEffect } from 'react';
import { statusInfo } from './statusInfo.js';
import { useLocation } from 'react-router-dom';

function StatusInfoNav() {
  const { pathname } = useLocation();
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
      className="flex flex-row gap-4 overflow-x-auto w-[calc(100vw-300px)] px-4 hide_scrollbar"
    >
      {statusInfo.map((item) => {
        return (
          pathname.includes(item.statusOf) &&
          item.info.map((infoItem) => {
            return (
              <div
                className="flex flex-row gap-2 border-[0.5px] border-slate-300 rounded-xl p-2 bg-[#fff] text-sm"
                key={infoItem.info}
              >
                <p className="w-max">{infoItem.info}</p>
                <span>{infoItem.count}</span>
              </div>
            );
          })
        );
      })}
    </div>
  );
}

export default StatusInfoNav;
