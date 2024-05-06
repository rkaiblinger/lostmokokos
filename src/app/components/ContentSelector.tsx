/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const ContentSelector = ({ currentPath }) => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollContainerRef = useRef(null);

  const contentItems = [
    { path: "/raids/oreha", label: "Oreha", imgSrc: "https://i.imgur.com/WcAVFsZ.png"  },
    { path: "/raids/argos", label: "Argos", imgSrc: "https://i.imgur.com/8sBbqnQ.png" },
    { path: "/raids/valtan", label: "Valtan", imgSrc: "https://i.imgur.com/ApCDeQb.png"  },
    { path: "/raids/vykas", label: "Vykas", imgSrc: "https://i.imgur.com/5VoXEOB.png"  },
    { path: "/raids/clown", label: "Clown", imgSrc: "https://i.imgur.com/hOOSdDm.png"  },
    { path: "/raids/brelshaza", label: "Brelshaza", imgSrc: "https://i.imgur.com/bL9k49k.png"  },
    { path: "/raids/kayangel", label: "Kayangel", imgSrc: "https://i.imgur.com/2P9urFh.png"  },
    { path: "/raids/akkan", label: "Akkan", imgSrc: "https://i.imgur.com/W4ekupW.png"  },
    { path: "/raids/voldis", label: "Voldis", imgSrc: "https://i.imgur.com/sSdCEIA.png"  },
    { path: "/raids/thaemine", label: "Thaemine", imgSrc: "https://i.imgur.com/464OcZx.png"  },
    { path: "/raids/ladon", label: "Ladon", imgSrc: "https://i.imgur.com/tju1uI1.png"  },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const selectedItem = container.querySelector(`a[href='${currentPath}']`);
      if (selectedItem) {
        container.scrollTo({
          left: selectedItem.offsetLeft - container.offsetWidth / 2 + selectedItem.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [currentPath]);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener('scroll', checkScrollPosition);

    // Handle mouse wheel for horizontal scrolling
    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY + (e.deltaX * 0.25); // Adjust multi-directional scrolls
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    // Handle resize
    const handleResize = () => {
      checkScrollPosition();
    };
    window.addEventListener('resize', handleResize);
    checkScrollPosition(); // Initial check

    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative size-full bg-primary-background-color">
      <div className="flex flex-shrink-0 overflow-x-auto scroll-smooth p-4 pl-8 justify-evenly" ref={scrollContainerRef}>
        {contentItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={clsx(
              "block p-2 rounded-lg transition duration-300 ease-in-out transform shrink-0",
              currentPath === item.path ? 'bg-primary-background-selection-color scale-105' : 'bg-chip-background-color',
              currentPath !== item.path && "hover:bg-primary-background-hover-color hover:scale-105",
              index !== 0 && "ml-4" // Add margin to all items except the first one
            )}
          >
            <img src={item.imgSrc} alt={item.label} className="w-24 h-24 md:w-32 md:h-32 mb-2" style={{ objectFit: 'cover', maxWidth: '100%', maxHeight: '100%' }} />
            <span className="text-center block text-sm font-bold text-chip-text-color">{item.label}</span>
          </Link>
        ))}
      </div>
      {!isAtStart && (
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2" onClick={() => scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {!isAtEnd && (
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2" onClick={() => scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
};

export default ContentSelector;
