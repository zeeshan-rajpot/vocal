import React from "react";

const ChapterDetail = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto  my-10">
        <h1 className="text-[48px] font-bold text-black mb-2">
          The Case Against AI Tools for Writing
        </h1>
        <p className="text-gray-600 text-[24px] mb-4">
          Writing is hard... but isn’t that the fun of it?
        </p>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Author"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="text-gray-800 font-medium">By Bri Craig</p>
            <p className="text-gray-500 text-sm">
              Published 2 years ago · 9-min read
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mr-2">
            ⭐ Top Story - August 2023
          </span>
        </div>
        <div className="flex space-x-4 mb-6">
          <button className="text-gray-500 hover:text-gray-700">👁️ 51</button>
          <button className="text-gray-500 hover:text-gray-700">❤️</button>
          <button className="text-gray-500 hover:text-gray-700">🔖</button>
          <button className="text-gray-500 hover:text-gray-700">📤</button>
        </div>
      </div>
      <div className="w-full rounded-lg flex items-center justify-center mb-4">
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/SCOKysMnH50?si=J94rI00O2jrn6XNq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6 ">
        <p className="mb-4 text-gray-800 georgia">
          My relationship with Artificial Intelligence is... complicated. This
          is partially because there’s a big difference between my personal and
          professional life...
        </p>
        <h2 className="text-[20px] font-semibold mt-6 mb-2 text-gray-800 georgia">
          Professionally -
        </h2>
        <p className="mb-4 text-gray-800 georgia">
          I rigorously studied Machine Learning in Graduate School (and it was a
          heavy component of my Master’s thesis). Even now, in my 9-5 day job, I
          am a research contractor who works on studies that employ the use of
          Machine Learning.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800 georgia">
          Personally -
        </h2>
        <p className="mb-4 text-gray-800 georgia">
          I like to write silly little stories and poems.
        </p>
        <p className="mb-4 text-gray-800 georgia">
          So, as someone who is fascinated with both AI and writing, you would
          think that I would be jumping all over the opportunity to marry my
          personal and professional lives.
        </p>
        <p className="mb-4 text-gray-800 georgia">
          But the reality is, I think it’s a waste of both the potential of AI
          and the potential of writers.
        </p>
      </div>
    </>
  );
};

export default ChapterDetail;
