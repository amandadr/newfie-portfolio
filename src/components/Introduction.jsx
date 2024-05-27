import React, { useEffect, useRef } from "react";

function Introduction() {
  const introductionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("zoomed");
        } else {
          entry.target.classList.remove("zoomed");
        }
      },
      { threshold: 0.2 }
    );

    if (introductionRef.current) {
      observer.observe(introductionRef.current);
    }

    return () => {
      if (introductionRef.current) {
        observer.unobserve(introductionRef.current);
      }
    };
  }, []);

  return (
    <div ref={introductionRef}>
      <h1>Hi, I'm John Doe</h1>
      <p>
        I'm a software engineer with 5 years of experience in web development.
      </p>
    </div>
  );
}

export default Introduction;
