import React from 'react';
import './Brownpart.css';

import bg from '../assets/Vector (38).png';
import cardBg1 from '../assets/Vector (39).png';
import cardBg2 from '../assets/Vector (40).png';
import arrowBg from '../assets/Vector (41).png';

import blog1 from '../assets/Clip path group (6).png';
import blog2 from '../assets/Clip path group (7).png';
import blog3 from '../assets/Clip path group (8).png';
import blog4 from '../assets/Clip path group (9).png';
import Blogspg from "../assets/Blogspg.png"
import Redwave from "../assets/Red-wave.png"

const blogs = [
  {
    img: blog1,
    title: '10 Exciting Ways to make\nof summer Holidays',
    desc: 'Lorem ipsum dolor sit amet consectetur. Cur ultricies proin dolor a vitae nunc purus...',
    btnColor: '#ED1C24',
  },
  {
    img: blog2,
    title: 'Rethinking Education:\nThe Role of Non-Traditional\nLearning Methods for Children',
    desc: 'Dignissim nisi massa aliquet quam ultrices ac arcu in. Eget lectus semper sed egestas...',
    btnColor: '#F57E20',
  },
  {
    img: blog3,
    title: '7 Healthy Habits to Teach\nYour Kids in 2024',
    desc: 'Dolor mauris sed tempus hac tempus tincidunt sem volutpat nam. Mauris ullamcorper...',
    btnColor: '#ED1C24',
  },
  {
    img: blog4,
    title: 'Know the Differences between\nTechnical & Traditional Toys',
    desc: 'Aenean ac imperdiet in facilisi turpis vitae sed. Sed dui neque gravida odio ut euismod...',
    btnColor: '#F57E20',
  },
];

const Brownpart = () => {
  return (
<>
  <img src={Redwave} alt="top wave" style={{ width: '100%', display: 'block', marginBottom: '-5px' }} />
    <div
      className="brownpart-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
            <div className="brownpart-heading">
          <img src={Blogspg} alt=""/>
      </div>
      <div className="blog-carousel">
        <div
          className="arrow left-arrow"
          style={{ backgroundImage: `url(${arrowBg})` }}

        >
          <span>&larr;</span>
        </div>

        <div className="blog-cards">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="blog-card"
              style={{
                backgroundImage: `url(${idx % 2 === 0 ? cardBg1 : cardBg2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <img src={blog.img} alt="blog" className="blog-image" />
              <h4 className="blog-title">
                {blog.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </h4>
              <p className="blog-desc">{blog.desc}</p>
              <button
                className="read-more-btn"
                style={{ backgroundColor: blog.btnColor }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        <div
          className="arrow right-arrow"
          style={{ backgroundImage: `url(${arrowBg})` }}
        >
          <span>&rarr;</span>
        </div>
      </div>
    </div>
</>
  );
};

export default Brownpart;