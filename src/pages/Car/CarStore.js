import { types, flow } from 'mobx-state-tree';

import HttpUtil from '../../util/HttpUtil';
import Constants from '../../util/Constants';

const CarStore = types.model({      
})
.actions(self => ({
    onInit: flow(function* (){
        let cars = yield HttpUtil.get(`${Constants.BASEURL}${Constants.ENDPOINTS.CAR}`);
        self.carsResponse = cars.data;
    }),
    delete: flow(function* (id){
        self.carsResponse.splice(self.carsResponse.indexOf(id), 1);
        console.log(self.carsResponse);
        return yield HttpUtil.delete(`${Constants.BASEURL}${Constants.ENDPOINTS.CAR}/${id}`);
    }),
    insert: flow(function* (data){
        self.carsResponse.push(data);
        return yield HttpUtil.insert(`${Constants.BASEURL}${Constants.ENDPOINTS.CAR}`, data);
    })
}))
.volatile(() => ({
    carsResponse: []
}));

export default CarStore;