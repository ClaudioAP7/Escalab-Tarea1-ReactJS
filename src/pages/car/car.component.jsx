import React from 'react'
import SearchCar from '../../components/search-car.component.jsx';

import { CarsData } from '../../dummies/data';

class Car extends React.Component {
    constructor(){
        super();

        this.state = {
            carsData: CarsData,
        };
    }


    render() {
        const { carsData } = this.state;
        return (
          <div className="homepage">
              <SearchCar carsData={ carsData } ></SearchCar>
          </div>
        );
    }
}

export default Car;
