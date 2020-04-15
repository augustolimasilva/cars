import { types, flow } from 'mobx-state-tree';

import HttpUtil from '../../util/HttpUtil';
import Constants from '../../util/Constants';

const ListCarStore = types.model({
})
.actions(self => ({
    onInit: flow(function* (){
        let cars = yield HttpUtil.get(`${Constants.BASEURL}${Constants.ENDPOINTS.CAR}`);        
        return self.carsResponse = cars.data;
    }),
    delete: flow(function* (id){        
        let retorno = yield HttpUtil.delete(`${Constants.BASEURL}${Constants.ENDPOINTS.CAR}/${id}`);
        yield self.onInit();
        return retorno;
    }),
    insert: flow(function* (data){
        let retorno = yield HttpUtil.insert(`${Constants.BASEURL}${Constants.ENDPOINTS.CAR}`, data);        
        yield self.onInit();        
        return retorno;
    })
}))
.volatile(() => ({
    carsResponse: []
}));

export default ListCarStore;