import {mount, createLocalVue} from "@vue/test-utils";
import Inspire from "~/pages/inspire.vue"
import Vuetify from "vuetify";
import Vue from 'vue'

const localVue = createLocalVue();
Vue.use(Vuetify)
describe('inspire - Unit', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it("isVueInstance",() => {
    const wrapper = mount(Inspire, {
      localVue,
      vuetify
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
