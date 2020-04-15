import React, { Component } from 'react';

import { observer } from 'mobx-react';
import MaterialTable from 'material-table';
import ListCarStore from './ListCarStore';

@observer
class ListCar extends Component {
  constructor(props) {
    super(props);
    this.store = ListCarStore.create({});    
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
          onRowDelete: oldData => {
            return new Promise((resolve, reject) => {
              this.store.delete(oldData.id).then(result => {
                return resolve(result);
              }).catch(err => {
                reject(err);
              })
            });
          },
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              this.store.insert(newData).then(result => {
                return resolve(result);
              }).catch(err => {
                reject(err);
              })
            }),
        }}
      />
    );
  }
}
export default observer(ListCar);