import React, { Component } from 'react';

import { observer } from 'mobx-react';

@observer
class NewCar extends Component{

    render() {
        return (
            <h1>Teste</h1>
        );
    }
}

export default observer(NewCar);