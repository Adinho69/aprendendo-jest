import {Api} from '../plugins/axios'

export async function getPokemonById(id: number):Promise<any> {
  try {
    const data = Api.$get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return data
  }catch (e){
    return e
  }
}
