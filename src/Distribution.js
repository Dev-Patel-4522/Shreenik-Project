import React from 'react'
import './App.css';
import film from './Images/film.jpg';
import TariSathe from "./Images/TariSathe.jpg";
import babubhai from "./Images/babubhai.jpg";
import aaron from "./Images/aaron.jpg";
import pani from "./Images/pani.jpg";
import firangi from "./Images/firangi.jpg";
import dahavi from "./Images/dahavi.jpg";

function Distribution() {
  return (
    <div>
      <section className="text-gray-400 body-font ">
        <div className="container px-5 py-20 mx-auto mt-auto">
          <div className="flex flex-wrap w-full ">
            <div className=" w-full  lg:mb-0">
              <h1 className="sm:text-6xl text-6xl font-medium title-font mb-2 text-amber-200">
                Film Distribution
              </h1>

              <div className="h-1 w-60 bg-indigo-500 rounded"> </div>
            </div>

            <div className="md:p-2 p-1 w-1/2">
              <br></br>
              <br></br>
              <img
                alt="gallery"
                className="  w-3/4 object-cover h-3/4   mr-auto ml-0 mt-20 "
                src={film}
              />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-white text-2xl mt-56 text-opacity-80">
              Our strong reach enables us to maintain transparency and
              flexibility over core regions in which we distribute our films. We
              distribute our content in all the circuits either through our
              distribution network offices and through trusted sub-distributors.
              In recent years Gujarati cinema has witnessed upsurge of quality
              entertaining films from talented producers. We believe quality
              content should reach to audience at the end of lines. Our
              association with all exhibitors and theatre brands across Gujarat
              and overseas enables us to showcase films to Gujarati audience in
              the state and settled abroad. We distribute our films theatrically
              overseas through our sister company, S R Entertainment which based
              in Mumbai.
            </p>
            <br></br>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div>
            <h1
              className="sm:text-6xl text-6xl font-medium title-font mb-2 text-amber-200"
              style={{ textAlign: "center" }}
            >
              Our Projects
            </h1>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={TariSathe}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={babubhai}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={pani}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={aaron}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={firangi}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={dahavi}
                />
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
    </div>
  );
}

export default Distribution;