import React from 'react';

import { Col, Row } from 'reactstrap';
import { products } from './products';

const ProductCategories = () => {
  return (
    <Row className="no-gutters product-categories">
      <Col>
        <Row className="no-gutters justify-content-center p-4">
          <Col xs={6} className="product-categories__header">
            Κατηγορίες προϊόντων
          </Col>
        </Row>
        <Row className="no-gutters p-4 product-categories__body">
          {products.map((product, index) => (
            <Col xs={4} key={index}>
              <div className={`product category-${product.category}`}>{product.name}</div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ProductCategories;
