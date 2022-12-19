import {createLocalVue, mount} from "@vue/test-utils"
import Index from '~/pages/index.vue'
import Vuetify from "vuetify";
import Vue from 'vue';
import Router from 'vue-router'


const localVue = createLocalVue();
Vue.use(Vuetify)
Vue.use(Router)

const mockRouter = {
  push: jest.fn(),
  back: jest.fn(),
  params:{
    path: '',
    query: {}
  }
}

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

  const mountFunction = (options) => {
    return mount(Index, {
      localVue,
      vuetify,
      router,
      global: {
        mocks: {
          $router: mockRouter
        }
      },
      ...options
    })
  }

  it('is vue instance - Unit', () => {
    const wrapper = mountFunction();

    expect(wrapper.vm).toBeDefined()
  });

  it("button redirect - Unit", async () => {
    //let btnFn = jest.fn()
    const wrapper = mountFunction();
    wrapper.vm.redirectByInspire = jest.fn();

    const btnRedirect = wrapper.find("#btn-redirect")
    await btnRedirect.trigger('click')

    expect(wrapper.emitted()).toBeTruthy()
    expect(wrapper.vm.redirectByInspire).toBeTruthy()
  });

  it('should render - Unit ', function () {
    const wrapper =mountFunction();
    expect(wrapper.html()).toContain('v-card');
    expect(wrapper.html()).toContain('Welcome to the Vuetify + Nuxt.js template');

  });

  it("method getPokemon - Unit", () => {

    let poke = null
    const dataMock ={
      id: 4
    }
    const wrapper = mountFunction({
      data(){
        return{
           poke: {}

        }
      },
      methods: {

      }
    })
    wrapper.setMethods(
      {
        getPokemon : jest.fn().mockImplementation(() => {
          poke = dataMock;
        })
      }
    )

      wrapper.vm.getPokemon();
    expect(poke).toBe(dataMock);
  })
})
