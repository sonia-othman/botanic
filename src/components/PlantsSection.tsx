'use client';
import { useEffect, useRef } from 'react';
import './ImageSlider.css';

const PlantsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderListRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const sliderData = [
    {
      id: 1,
      image: '/image/enjana1.png',
      title: 'MAGIC SLIDER',
      type: 'FLOWER',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.'
    },
    {
      id: 2,
      image: '/image/enjana2.png',
      title: 'MAGIC SLIDER',
      type: 'NATURE',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.'
    },
    {
      id: 3,
      image: '/image/enjana4.png',
      title: 'MAGIC SLIDER',
      type: 'PLANT',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.'
    },
    {
      id: 4,
      image: '/image/enjana5.png',
      title: 'MAGIC SLIDER',
      type: 'NATURE',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.'
    }
  ];

  const moveSlider = (direction: 'next' | 'prev') => {
    const slider = sliderRef.current;
    const sliderList = sliderListRef.current;
    const thumbnail = thumbnailRef.current;

    if (!slider || !sliderList || !thumbnail) return;

    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add('next');
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add('prev');
    }

    const handleAnimationEnd = () => {
      if (direction === 'next') {
        slider.classList.remove('next');
      } else {
        slider.classList.remove('prev');
      }
    };

    slider.addEventListener('animationend', handleAnimationEnd, { once: true });
  };

  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');
      if (thumbnailItems.length > 0) {
        thumbnailRef.current.appendChild(thumbnailItems[0]);
      }
    }
  }, []);

  return (
    <>
      <header>
       
      </header>

      <div className="slider" ref={sliderRef}>
        <div className="list" ref={sliderListRef}>
          {sliderData.map((item) => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.type} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="type">{item.type}</div>
                <div className="description">
                  {item.description}
                </div>
                <div className="button ">
                  <button>SEE MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          {sliderData.map((item) => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.type} />
            </div>
          ))}
        </div>

        <div className="nextPrevArrows">
          <button className="prev" onClick={() => moveSlider('prev')}> &lt; </button>
          <button className="next" onClick={() => moveSlider('next')}> &gt; </button>
        </div>
      </div>
    </>
  );
};

export default PlantsSection;