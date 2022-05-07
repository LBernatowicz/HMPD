import {POKEMON} from '../../../config/axiosInstances';
import {getData} from '../../../config/apiRequests';

export const getPokemon = async() => {
    const data = await getData(POKEMON)
    return data;
}

export const getUniquePokemon = async(idx: string) => {
    const data = await getData(`${POKEMON}/${idx}`)

    return data;
}
