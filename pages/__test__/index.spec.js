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

  it('is vue instance - Unit', () => {
    const wrapper = mount(Index, {
      localVue,
      vuetify,
      router
     // nuxt

    });

    expect(wrapper.vm).toBeDefined()
  })

  it("button redirect - Unit", async () => {
    //let btnFn = jest.fn()
    const wrapper = mount(Index, {
      localVue,
      vuetify,
      router,

    })
    wrapper.vm.redirectByInspire = jest.fn();

    const btnRedirect = wrapper.find("#btn-redirect")
    await btnRedirect.trigger('click')

    expect(wrapper.emitted()).toBeTruthy()
    expect(wrapper.vm.redirectByInspire).toBeTruthy()
  })

  it('should render - Unit ', function () {
    const wrapper = mount(Index, {
      localVue,
      vuetify,
      router
    })
    expect(wrapper.html()).toContain('v-card');
    expect(wrapper.html()).toContain('Welcome to the Vuetify + Nuxt.js template');

  });

})
