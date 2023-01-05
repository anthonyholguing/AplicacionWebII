<template>
  <body>
    
    <div class="container  ">
      <form @submit.prevent="put()" class="form " v-if="editar">
        <div class="w-50 m-auto  ">
          <div class="text-center ">
            <label for="fecha" class="form-label">fecha</label>
            <input type="text" name="fecha" v-model="control.fecha" class="form-control">
          </div>
          <div class="text-center ">
            <label for="hora" class="form-label">hora</label>
            <input type="text" name="hora" v-model="control.hora" class="form-control ">
          </div>
          <div class="text-center ">
            <label for="valor" class="form-label">valor</label>
            <input type="text" name="valor" v-model="control.valor" class="form-control ">
          </div>
          <div class=" d-flex justify-content-center mt-4 mb-4">
            <button class="btn btn-success w-50 " type="submit">Editar</button>
            <button class="btn btn-danger w-50 " @click="editar = false">Cancelar</button>
          </div>
        </div>
  
      </form>
  
  
  
      <form @submit.prevent="post()" class="form " v-if="!editar">
        <div class="w-50 m-auto  ">
          <div class="text-center ">
            <label for="fecha" class="form-label">fecha</label>
            <input type="text" name="fecha" v-model="control.fecha" class="form-control">
          </div>
          <div class="text-center ">
            <label for="hora" class="form-label">hora</label>
            <input type="text" name="hora" v-model="control.hora" class="form-control ">
          </div>
          <div class="text-center ">
            <label for="valor" class="form-label">valor</label>
            <input type="text" name="valor" v-model="control.valor" class="form-control ">
          </div>
          <div class=" d-flex justify-content-center mt-4 mb-4">
            <button class="btn btn-primary w-50 ">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  
  
  
  
    <div class="container text-center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">fecha</th>
            <th scope="col">hora</th>
            <th scope="col">valor</th>
            <th scope="col">Metodos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in controls" :key="index">
            <th scope="row">{{ item._id }}</th>
            <td>{{ item.fecha }}</td>
            <td>{{ item.hora }}</td>
            <td>{{ item.valor }}</td>
            <td><button class="btn btn-danger" @click="deletee(item._id)">Eliminar</button> <button
                class="btn btn-success" @click="formshow(item._id)">Editar</button></td>
          </tr>
        </tbody>
      </table>
  
    </div>
  </body>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      controls: [],
      control: {
        fecha: '',
        hora: '',
        valor: ''
      },
      editar: false

    }
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      axios.get('http://localhost:2500/')
        .then(res => {
          console.log(res)
          this.controls = res.data;
        })
        .catch(e => { console.log(e) })
    },
    post() {
      axios.post('http://localhost:2500/', this.control)
        .then(res => {
          this.controls.push(res.data)

        })
        .catch(e => { console.log(e.response) })
    },
    deletee(_id) {
      axios.delete(`http://localhost:2500/${_id}`)
        .then(res => {
          const index = this.controls.findIndex(item => item._id === res.data._id);
          this.controls.splice(index, 1)
        })
        .catch(e => { console.log(e.response) })
    },


    formshow(_id) {
      this.editar = true
      axios.get(`http://localhost:2500/${_id}`)
        .then(res => {
          this.control.fecha = res.data
          this.control.hora = res.data
          this.control.valor = res.data

        })
        .catch(e => {
          console.log(e.response)
        })
      console.log(_id)
    },
    putt(item) {
      axios.put(`http://localhost:2500/${item._id}`, item)
        .then(res => {
          const index = this.datos.findIndex(n => n._id === res.data._id)
          this.controls[index].fecha = res.data.fecha
          this.controls[index].hora = res.data.hora
          this.controls[index].valor = res.data.valor

        })
        .catch(e => {
          console.log(e.response)
        })
    }


  }
}
</script>

<style scoped>
body{
  background: rgb(190, 147, 147);
  height: 100vh;
}
</style>

