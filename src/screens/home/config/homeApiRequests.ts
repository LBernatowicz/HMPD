import {POKEMON} from '../../../config/axiosInstances';
import {getData} from '../../../config/apiRequests';

export const getPokemon = async() => {
    return await getData(POKEMON)
}
