import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ items }) {
  let urlHook = '';
  // Only run this code if items needs to be checked
  // So do not run on page refresh as it will cause an error
  if(items.length > 0){
    if(items[0].name === "Nachos"){
      urlHook = '/snacks/';
    } else {
      urlHook = '/drinks/';
    }
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText className="menu-text">
            We got some of the most delicable items on our menu.<br/> 
            Whether it is snacks or drinks, you will be satisfied!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`${urlHook}${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
