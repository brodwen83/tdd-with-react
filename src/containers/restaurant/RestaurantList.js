import React from 'react';
import {
  CollectionItem,
  Row,
  Col,
  Collection,
} from 'react-materialize';

function RestaurantList({ restaurants }) {
  return (
    <Row>
      <Col m={6} s={12}>
        <Collection>
          {restaurants &&
            restaurants.map(restaurant => (
              <CollectionItem key={restaurant}>
                {restaurant}
              </CollectionItem>
            ))}
        </Collection>
      </Col>
    </Row>
  );
}

export default RestaurantList;
