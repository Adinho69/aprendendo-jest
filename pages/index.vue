<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center"> </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          as
         {{poke}}

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" id="btn-redirect" @click="redirectByInspire"> Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script >


import {getPokemonById} from '~/services'
export default {
  name: 'IndexPage',
  data(){
    return {
      poke: null
    }
  },
  methods: {
    redirectByInspire() {
      this.$router.push('/inspire');
      console.log('oi')
    },
    async getPokemon(id){
      this.poke = await getPokemonById(id)
    }
  },
  created() {
    this.getPokemon(1);
  }
  // async asyncData({$api}) {
  //   const data = await getPokemonById(150)
  //   console.log(data)
  //   return {data}
  // }
}
</script>
