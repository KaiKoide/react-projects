import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const items = [
    { title: 'name1', img: 'http://placehold.it/500x200' },
    { title: 'name2', img: 'http://placehold.it/500x200' },
    { title: 'name3', img: 'http://placehold.it/500x200' },
    { title: 'name4', img: 'http://placehold.it/500x200' },
    { title: 'name5', img: 'http://placehold.it/500x200' },
    { title: 'name6', img: 'http://placehold.it/500x200' },
  ];

  return (
    <div className="App">
      <p>simple slider</p>
      <div className="container">
        <Slider {...settings}>
          {items &&
            items.map((item) => {
              return (
                <div>
                  <img src={item.img} />
                  <p>{item.title}</p>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

export default App;
