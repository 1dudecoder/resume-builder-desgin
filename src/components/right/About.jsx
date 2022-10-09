import React from "react";

function About() {
  return (
    <div>
      <div className="outer-about">
        <div className="inner-about">
          <img
            src="https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo"
            alt=""
          />
        </div>

        <div className="sec-para">
          <p>
            I am a web developer having expertise in frontend development and
            exposure to back- end development.
          </p>
          <p>
            I design and develop web applications using the latest technologies
            to deliver the product with quality code.
          </p>
        </div>

        <div className="about-name">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                d="M0 0h24v24H0z"
                stroke="#1890FF"
                stroke-width="0px"
              ></path>
              <path
                d="M12 5.9a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                stroke="#1890FF"
                fill="#1890FF"
                stroke-width="0px"
              ></path>
            </svg>
          </div>
          <p>About me</p>
        </div>
        
      </div>
    </div>
  );
}

export default About;
