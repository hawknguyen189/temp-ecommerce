import React from "react";
import Testimonial from "../Component/Testimonial/Testinomial";
import "../Component/Testimonial/Testinomial.scss";
import TestimonialData from "../Component/Testimonial/TestinomialData";

const Testimonials = () => {
  return (
    <section id="sectionTestimonial" className="container mt-5 mb-5">
      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#testimonialCarousel"
            data-slide-to="0"
            className="active carousel-indicator"
          ></li>
          <li
            data-target="#testimonialCarousel"
            data-slide-to="1"
            className="carousel-indicator"
          ></li>
          <li
            data-target="#testimonialCarousel"
            data-slide-to="2"
            className="carousel-indicator"
          ></li>
          <li
            data-target="#testimonialCarousel"
            data-slide-to="3"
            className="carousel-indicator"
          ></li>
        </ol>
        <div className="carousel-inner testimonial-section">
          {TestimonialData.map((value, index) => {
            return (
              <Testimonial
                content={value.content}
                author={value.author}
                className={value.className}
                AIphoto={`AI-generated-${1 + index}.jpg`}
                stars={value.stars}
                key={index}
              />
            );
          })}
        </div>
        {/* carousel indicator */}
        {/* <div className="arrow-control-carousel">
          <a
            className="carousel-control-prev carousel-arrow"
            href="#testimonialCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon pomegranate"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next carousel-arrow"
            href="#testimonialCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon pomegranate"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};
export default Testimonials;
