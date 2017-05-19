import React from 'react';
import FoodHome from '../components/FoodOrdering/HomePage/index';
import EcomHome from '../components/Ecommerce/HomePage/index';
import TableReservation from '../components/TableReservation/index';

const HomePage = ({navigation}) => {
  console.log(navigation.state.routeName);
  if(navigation.state.routeName === 'Ecom') {
    return <EcomHome />;
  }

  if(navigation.state.routeName === 'Table') {
    return <TableReservation />;
  }

  return <FoodHome />
}

export default HomePage;
