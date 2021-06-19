import React from "react";
import { CardGroup, Card } from "react-bootstrap";
 let day=new Date().getDate();
 let month=new Date().getMonth();

function Main_Card() {
  return (
    <div>
              <p className="recommended">Recommended For you</p>
      <div className="scrolls">
        <div className="imageDiv">
          <CardGroup className="mymaincardggroup">
            <MyCard
            img={"https://z.nooncdn.com/products/tr:n-t_240/v1610784898/N43748990A_1.jpg"} 
            title={"U-HOOME Push PopBubble"} 
            priceCurr={"AED"} 
            Exactprice={"8.0"} 
            rating={"⭐ 4.5(173)"}
            />
            <MyCard
            img={"https://z.nooncdn.com/products/tr:n-t_240/v1605814228/N40582910A_1.jpg"} 
            title={"Apple Ipad 2020 new model"} 
            priceCurr={"AED"} 
            Exactprice={"10190"} 
            rating={"⭐ 4.5(173)"}
            />
            <MyCard
            img={"https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg"} 
            title={"Apple IPHONE 12 pro Max new stock"} 
            priceCurr={"AED"} 
            Exactprice={"4678.0"} 
            rating={"⭐ 4.8(473)"}
            />
            <MyCard
            img={"https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg"} 
            title={"Sony Playstation 5 console"} 
            priceCurr={"AED"} 
            Exactprice={"3099"} 
            rating={"⭐ 4.8(173)"}
            />
            <MyCard
            img={"https://z.nooncdn.com/products/tr:n-t_240/v1592221002/N38650144A_1.jpg"} 
            title={"Wiro mask Resuable washable"} 
            priceCurr={"AED"} 
            Exactprice={"49.0"} 
            rating={"⭐ 4.3(173)"}
            />
            <MyCard
            img={"https://z.nooncdn.com/products/tr:n-t_240/v1563786689/N22732308A_1.jpg"} 
            title={"Apple Airpods new devides"} 
            priceCurr={"AED"} 
            Exactprice={"100.0"} 
            rating={"⭐ 4.9(173)"}
            />
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

function MyCard({img,title,priceCurr,Exactprice,rating}) {
  return (
    <>
    <div className="myCardDiv m-1">
      <Card>
        <Card.Img variant="top" src={img} height="240px"/>
        <Card.Body>
          <p>{title}</p>
          <Card.Text>
            {priceCurr} <strong className="textSize">{Exactprice}</strong>
          </Card.Text>
        </Card.Body>
        <span className="text-center arrivetext">Arrives <strong className="font-weight-bolder">on {month+1}-{day +1}</strong> </span>
        <Card.Footer className="d-flex justify-content-between">
          <small className="text-muted textExpress">Express</small>
          <small className="text-muted rating">{rating}</small>
        </Card.Footer>
      </Card>
      </div>
    </>
  );
}

export default Main_Card;
