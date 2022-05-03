import axios from 'axios';
import {baseUrl} from './axiosInstances';
import {wrongStatusSwitch} from './status';

export const getData = (queryString: string) => {
    try {
        return axios.get(`${baseUrl}${queryString}`)
            .then(resp => {
                if (resp.status === 200) {
                    return resp
                } else {
                    console.log('Wrong Status Switch Message: ',wrongStatusSwitch(resp.status));
                }
            })
    } catch (error) {
        console.log('error getData method: ',error)
    }
}
