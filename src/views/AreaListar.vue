<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8">
        <div class="tarjeta">
          <form @submit.prevent="nuevo()">
            <h5>Nueva área</h5>
            Area :
            <input type="text" v-model="areasPayloads.nombre_area" required />
            <p>Encargado : <input type="text" v-model="areasPayloads.nombre_encargado" required /></p>
            <p>Funcionarios : <input type="number" v-model="areasPayloads.numero_funcionarios" required /></p>

            <button type="submit" class="waves-effect waves-light btn-small">Agregar</button>
          </form>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="tarjeta">
          <form @submit.prevent="getAreas()">
            <h5>Buscar área</h5>
            <p>Nombre área: <input type="search" v-model="search" @search="getAreas()" /></p>
            <button type="submit" class="waves-effect waves-light btn-small">buscar</button>
          </form>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="col s12 m12 ">

        <div class="card">
          <div class="card-content">
            <span class="card-title">Listado de Areas</span>
            <table class="striped responsive-table">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Area</th>
                  <th>Nombre encargado</th>
                  <th>Número funcionarios</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="area in areas">
                  <td>{{ area.id }}</td>
                  <td>{{ area.nombre_area }}</td>
                  <td>{{ area.nombre_encargado }}</td>
                  <td>{{ area.numero_funcionarios }}</td>
                  <td>
                    <a class="app-btn btn-small btn-floating btn-large waves-effect waves-light red"><i
                        class="material-icons" @click="eliminar(area.id)">delete</i></a>
                    <a class="app-btn btn-small btn-floating btn-large waves-effect waves-light blue "><i
                        class="material-icons" @click="update(area.id)">edit</i></a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AreaListar',
  data() {
    const api = process.env.VUE_APP_API;
    return {
      api,
      areas: [],
      search: '',
      filter: '',
      areasPayloads: {
        nombre_area: null,
        nombre_encargado: null,
        numero_funcionarios: null,
      }
    }
  },
  methods: {
    eliminar(id) {
      if (confirm("Esta seguro de eliminar?.")) {
        this.axios({
          method: 'delete',
          url: `${this.api}areas/${id}`
        }).
          then((response) => {
            this.getAreas();
          }).
          catch((error) => {
            console.log(error);
          });
      }
    },
    update(id) {
      this.$router.push(`areas/${id}`);
    },
    nuevo() {
      this.axios({
        method: 'post',
        url: `${this.api}areas`,
        data: this.areasPayloads
      }).then((response) => {
        this.getAreas();
      }).catch((error) => {
        console.log(error)
      })
    },
    getAreas(nombre_area, value) {
      this.axios({
        method: 'get',
        url: `${this.api}areas?q=${this.search}`
      }).then((response) => {
        this.areas = response.data
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getAreas();
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }
}
</script>