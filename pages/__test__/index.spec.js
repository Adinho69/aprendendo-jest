import {createLocalVue, mount} from "@vue/test-utils"
import Index from '~/pages/index.vue'
import Vuetify from "vuetify";
import Vue from 'vue';
import Router from 'vue-router'


const localVue = createLocalVue();
Vue.use(Vuetify)
Vue.use(Router)

describe("Index - Unit", () => {
  let vuetify
  let router
  //let nuxt

  beforeEach(() => {
    vuetify = new Vuetify()
    router = new Router()

    //nuxt = new Next()
    //localVue.use(vuetify)

  })

  it('is vue instance', () => {
    const wrapper = mount(Index, {
      localVue,
      vuetify,
      router
     // nuxt

    });

    expect(wrapper.vm).toBeDefined()
  })

  it("button redirect", async () => {
    const wrapper = mount(Index, {
      localVue,
      vuetify,
      router
    })

    const btnRedirect = wrapper.find("#btn-redirect")
    await btnRedirect.trigger('click')

    expect(wrapper.emitted()).toBeTruthy()
  })
})
