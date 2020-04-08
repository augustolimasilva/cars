import React, { Component } from 'react';

import { observer } from 'mobx-react';

import MaterialTable from 'material-table';
import CarStore from './CarStore';

class Car extends Component {
  constructor(props) {
    super(props);
    this.store = CarStore.create({});    
    this.store
        .onInit()
        .then(result => console.log(result))
        .catch(error => console.log(error));        
  }

  render() {
    const columns = [
      { title: 'Model', field: 'model'},
      { title: 'Model Year', field: 'modelYear'},
      { title: 'Category', field: 'category', type: 'numeric'},
      { title: 'Price Week Day', field: 'priceWeekDay', type: 'numeric'},
      { title: 'Price Weekend Day', field: 'priceWeekendDay', type: 'numeric'},
      { title: 'Price Week Day Loyalty', field: 'priceWeekDayLoyalty', type: 'numeric'},
      { title: 'Price Weekend Day Loyalty', field: 'priceWeekendDayLoyalty', type: 'numeric'},
      { title: 'Manufacture', field: 'manufacture'}
    ];

    return (
      <MaterialTable
        title="Cars"
        columns = {columns}
        data = {this.store.carsResponse}
        editable={{
          onRowDelete: (oldData) => {
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                this.store.delete(oldData.id);
                //this.store.carsResponse.splice(this.store.carsResponse.indexOf(oldData), 1);
                //return this.store.carsResponse;
              }, 600);
            });
          },
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.store.insert(newData);
                
                return this.store.carsResponse;
              }, 600);
            }),
        }}
      />
    );
  }
}

export default observer(Car);