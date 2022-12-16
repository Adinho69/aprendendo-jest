import {Plugin} from '@nuxt/types'
import {NuxtAxiosInstance} from '@nuxtjs/axios'

const config = {
  baseURL: process.env.baseAPi
}
let Api : NuxtAxiosInstance;
const axios:Plugin = (context: any, inject: any) => {
    const api = context.$axios.create(config)
  Api =api
    inject('api', api)
}

export default axios
export {Api}
