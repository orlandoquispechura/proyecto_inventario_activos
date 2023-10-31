<template>
    <div class="contenedor">
        <div class="row">
            <div class="col s12 m12 l8">
                <div class="card">
                    <div class="card-content">
                        <router-link to="/activos/crear" class="waves-effect grey btn-small">Nuevo</router-link>
                        <span class="card-title">Listado de Activos</span>
                        <table class="striped responsive-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tipo activo</th>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Estado</th>
                                    <th>Area</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="activo in activos">
                                    <td>{{ activo.id }}</td>
                                    <td>{{ (activo.tipo_activo).charAt(0).toUpperCase() + (activo.tipo_activo).substr(1) }}
                                    </td>
                                    <td>{{ (activo.marca).charAt(0).toUpperCase() + (activo.marca).substr(1) }}</td>
                                    <td>{{ (activo.modelo).charAt(0).toUpperCase() + (activo.modelo).substr(1) }}</td>
                                    <td v-if="activo.estado === 0">Nuevo</td>
                                    <td v-else-if="activo.estado === 1">Usado</td>
                                    <td v-else="activo.estado ===2">Desuso</td>
                                    <td>{{ (activo.area.nombre_area).charAt(0).toUpperCase() +
                                        (activo.area.nombre_area).substr(1) }}</td>
                                    <td>
                                        <a class="app-btn btn-small btn-floating btn-large waves-effect waves-light red"><i
                                                class="material-icons" @click="eliminar(activo.id)">delete</i></a>
                                        <a class="app-btn btn-small btn-floating btn-large waves-effect waves-light blue "><i
                                                class="material-icons" @click="update(activo.id)">edit</i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col s12 m12 l4">
                <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="getActivos()">
                            <h5>Buscar tipo producto</h5>
                            <p>Tipo de producto: <input type="search" v-model="search" @search="getActivos()" /></p>
                            <button type="submit" class="waves-effect waves-light btn-small">buscar</button>
                        </form>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <h5>Filtrar por estado</h5>
                        <div class="input-field ">
                            <select @change="filter('estado', $event.target.value)">
                                <option disabled value="">Seleccione estado para filtrar</option>
                                <option :value="0"> Nuevo </option>
                                <option :value="1"> Usado </option>
                                <option :value="2"> Desuso </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActivoListar',
    data() {
        const api = process.env.VUE_APP_API;
        return {
            api,
            activos: [],
            search: '',
            toFilter: '',
            areas: [],
        }
    },
    methods: {
        filter(name, value) {
            this.toFilter = value === '' ? '' : '&' + name + '=' + value;
            this.getActivos();
        },
        update(id) {
            this.$router.push(`activos/editar/${id}`);
        },
        eliminar(id) {
            if (confirm("Esta seguro de eliminar?.")) {
                this.axios({
                    method: 'delete',
                    url: `${this.api}activos/${id}`
                }).
                    then((response) => {
                        this.getActivos();
                    }).
                    catch((error) => {
                        console.log(error);
                    });
            }
        },
        getActivos(name, value) {
            this.axios({
                method: 'get',
                url: `${this.api}activos?_expand=area&q=${this.search}${this.toFilter}`
            }).then((response) => {
                this.activos = response.data
            }).catch((error) => {
                console.log(error)
            })
        },
        getAreaList() {
            this.axios({
                method: 'get',
                url: `${this.api}areas`
            }).
                then((response) => {
                    this.areas = response.data;

                }).
                catch((error) => {
                    console.log(error);
                })
        },
    },
    mounted() {
        this.getActivos();
        this.getAreaList();
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }
}
</script>

<style lang="scss">
.contenedor {
    width: 90%;
    max-width:100%;
    margin: 0 auto;
}
</style>