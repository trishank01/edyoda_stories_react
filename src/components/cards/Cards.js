import React from "react";
import "./cards.css";
//import img1 from '../../assests/edyoda_WxvDSK1.jpg'

const Cards = () => {
 

  return (
    <>
      <main className="wrapper_container">
        <div className="wrapper">
          {dataList.map((item , index) => {
            return (
              <div key={index+item.id} className="card">
                <img src={item.src} alt="" />
                <div className="card-details">
                  <p className="card-heading">
                    {item.heading}
                  </p>
                  <p className="card-name">
                    <span> {item.card_name}</span> {item.date}
                  </p>
                  <p className="card-blog">
                   {item.card_blog}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

const dataList = [
  {
    id: 1,
    src: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    heading: "Fresh Graduate or IT professional Looking for..",
    card_name: "Aramn Ahmend",
    date: "05 Jul 2019",
    card_blog:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laborum aliquam id quisquam non, eveniet soluta dolore ab iure corrupti assumenda quibusdam ducimus cupiditate est neque distinctio dolorum odit? Autem.",
  },
  {
    id: 2,
    src: "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
    heading: "Introducing you all to EdYoda - www.edyoda.com",
    card_name: "Aramn Ahmend",
    date: "10 Jul 2019",
    card_blog:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laborum aliquam id quisquam non, eveniet soluta dolore ab iure corrupti assumenda quibusdam ducimus cupiditate est neque distinctio dolorum odit? Autem.",
  },
  {
    id: 3,
    src: "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
    heading: "From identity crisis to the Success Story - The DevOps...",
    card_name: "Aramn Ahmend",
    date: "10 Jul 2019",
    card_blog:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laborum aliquam id quisquam non, eveniet soluta dolore ab iure corrupti assumenda quibusdam ducimus cupiditate est neque distinctio dolorum odit? Autem.",
  },
  {
    id: 4,
    src: "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
    heading: "Typical day of Data Scientist - An insider story!",
    card_name: "Sourav Ghosh",
    date: "10 Jul 2019",
    card_blog:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laborum aliquam id quisquam non, eveniet soluta dolore ab iure corrupti assumenda quibusdam ducimus cupiditate est neque distinctio dolorum odit? Autem.",
  },
  {
    id: 5,
    src: "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
    heading: "Amazon Web Services (AWS) Cloud Day -...",
    card_name: "Sourav Ghosh",
    date: "10 Jul 2019",
    card_blog:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laborum aliquam id quisquam non, eveniet soluta dolore ab iure corrupti assumenda quibusdam ducimus cupiditate est neque distinctio dolorum odit? Autem.",
  },
  {
    id: 6,
    src: "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
    heading: "Typical day of Data Scientist...",
    card_name: "Sourav Ghosh",
    date: "10 Jul 2019",
    card_blog:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laborum aliquam id quisquam non, eveniet soluta dolore ab iure corrupti assumenda quibusdam ducimus cupiditate est neque distinctio dolorum odit? Autem.",
  },
  {
    id: 7,
    src: "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg",
    heading: "edYoda Meetup #01 : A Date with Cloud",
    card_name: "Ashish Pandey",
    date: "10 Jul 2019",
    card_blog:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laborum aliquam id quisquam non, eveniet soluta dolore ab iure corrupti assumenda quibusdam ducimus cupiditate est neque distinctio dolorum odit? Autem.",
  },
  {
    id: 8,
    src: "https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg",
    heading: "Industry 4.0 - The Prospects & Journey ahead!",
    card_name: "Sourav Ghosh",
    date: "10 Jul 2019",
    card_blog:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laborum aliquam id quisquam non, eveniet soluta dolore ab iure corrupti assumenda quibusdam ducimus cupiditate est neque distinctio dolorum odit? Autem.",
  },
  {
    id: 9,
    src: "https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png",
    heading: "Why do Database Systems Exist ?",
    card_name: "Sourav Ghosh",
    date: "10 Jul 2019",
    card_blog:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae laborum aliquam id quisquam non, eveniet soluta dolore ab iure corrupti assumenda quibusdam ducimus cupiditate est neque distinctio dolorum odit? Autem.",
  },
];

export default Cards;
