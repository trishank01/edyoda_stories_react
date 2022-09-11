import React from "react";
import filter_style from "./Filter.module.css";

const Filter = () => {
  const Arr = [
    "All",
    "Artificial Intelligence",
    "Cloud Computing",
    "Programming Languages",
    "Mobile Application Development",
    "Technology and Tools",
    "Get a Job in a Tech Company",
    'other'
  ];

  return (
    <>
      <main className={filter_style.main_post}>
        <h1 className={filter_style.heading_post}>Latest Posts</h1>
        <div className={filter_style.filter_tag}>
         <div className={filter_style.colorBlue}>
         <i className="fa-solid fa-filter"></i>
         </div>
          <p className={filter_style.filterBy}>filter By Category</p>
        </div>

        <div className={filter_style.all_tag}>
         {Arr.map((item ,index)=> {
            return (
                <button key={index} className={filter_style.btn}>{item}</button>
            )
         })}
        </div>
      </main>
    </>
  );
};

export default Filter;
