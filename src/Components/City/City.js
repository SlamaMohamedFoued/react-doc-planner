import React from "react";
import "./City.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const cities = [
  {
    img: "https://www.docplanner.com/images/warsaw.png",
    cityName: "Warsaw",
    btnLink: ""
  },
  {
    img: "https://www.docplanner.com/images/barcelona.png",
    cityName: "barcelona",
    btnLink: ""
  },
  {
    img: "https://www.docplanner.com/images/istanbul.png",
    cityName: "istanbul",
    btnLink: ""
  },
  {
    img: "https://www.docplanner.com/images/rome.png",
    cityName: "rome",
    btnLink: ""
  },
  {
    img: "https://www.docplanner.com/images/mexico-city.png",
    cityName: "mexico-city",
    btnLink: ""
  },
  {
    img: "https://www.docplanner.com/images/curitiba.png",
    cityName: "curitiba",
    btnLink: ""
  }
];

// function City() {
//   return (
//     <Card className="cardBox">
//       <CardImg top width="120%;" src={props.city.img} alt="Card image cap" />
//       <CardBody>
//         <div className="infos">
//           <CardTitle>{props.city.cityName}</CardTitle>
//           <Button color="primary" size="sm">
//             SEE OPENINGS
//           </Button>
//         </div>
//       </CardBody>
//     </Card>
//   );
// }

const Cards = () => {
  return cities.map((city, i) => (
    <div key={i}>
      <Card className="cardBox">
        <CardImg top width="120%;" src={city.img} alt="Card image cap" />
        <CardBody>
          <div className="infos">
            <CardTitle>{city.cityName}</CardTitle>
            <Button color="primary" size="sm">
              SEE OPENINGS
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  ));
};

export default Cards;
