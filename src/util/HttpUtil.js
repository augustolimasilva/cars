import axios from 'axios';

const httpUtil = 
{
    get(URL) {
        return new Promise((resolve, reject) => {
            axios.get(URL)
                .then(function (response) {
                    return resolve(response);
                })
                .catch(function (err) {
                    return reject(err.response);
                });
        });
    },
    delete(URL){
        return new Promise((resolve, reject) => {
            axios.delete(URL)
                .then(function (response){
                    return resolve(response);
                })
                .catch(function (err){
                    return reject(err);
                });
        });
    },
    insert(URL, data){
        return new Promise((resolve, reject) =>{
            axios.post(URL, data)
                .then(function (response){
                    return resolve(response);
                })
                .catch(function (err){
                    return reject(err);
                });
        });
    }
}

export default httpUtil;