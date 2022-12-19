<template>
  <v-row>
    <v-col class="text-center">
      <input  type="file" @change="onChangeFile"/>

    </v-col>

    <v-col>

      <button @click="uploadPhoto" >Upload</button>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  data(){
    return{
      fileSelected: null
    }
  },
  methods:{
    onChangeFile({target}) {
      this.fileSelected = target.files[0]
      console.log(target.files)
    },
    uploadPhoto(){
      const formData = new FormData()
      formData.append('image', this.fileSelected, this.fileSelected.name)

      console.log(formData)
    },
    
  }
}
</script>
