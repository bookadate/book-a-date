import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import FoodCards from '../../../containers/products/FoodCards';
import products from '../../../data/products';

const Drinks = ({ intl, match }) => {
  const drinks = products.filter((pro) => pro.category === 'drinks');
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.drinks" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <FoodCards products={drinks} />
      </Row>
    </>
  );
};
export default injectIntl(Drinks);
