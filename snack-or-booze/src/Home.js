import React from "react";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <ListGroup>
            <ListGroupItem>Snacks on Menu: {snacks.length}</ListGroupItem>
            <ListGroupItem>Drinks on Menu: {drinks.length}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
