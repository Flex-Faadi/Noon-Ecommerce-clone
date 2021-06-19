import React from "react";
function Circlecard() {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around mt-5 container-fluid">
        <Circle img={"Assets/groceries.jpg"} title={"Groceries"} />
        <Circle img={"Assets/laptop.jpg"} title={"Laptops"} />
        <Circle img={"Assets/mobile.jpg"} title={"Mobile"} />
        <Circle img={"Assets/perfume.jpg"} title={"Perfume"} />
        <Circle img={"Assets/toys.jpg"} title={"Toys"} />
        <Circle img={"Assets/mens.jpg"} title={"Mens"} />
        <Circle img={"Assets/womens.jpg"} title={"Womens"} />
        <Circle img={"Assets/appliances.jpg"} title={"Appliances"} />
      </div>
    </>
  );
}

function Circle({ img, title }) {
  return (
    <>
      <div className="mainCircle">
        <div className="circle">
          <img src={img} alt="grocery" />
        </div>
        <div className="textCircle text-center">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}

export default Circlecard;
