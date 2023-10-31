<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="update()">
                            <h5>Actualizar activo</h5>
                            Tipo de activo :
                            <input type="text" v-model="activoPayload.tipo_activo" required />
                            Marca :
                            <input type="text" v-model="activoPayload.marca" required />
                            Modelo :
                            <input type="text" v-model="activoPayload.modelo" required />
                            Estado :
                            <select v-model="activoPayload.estado">
                                <option disabled value="">Seleccione estado</option>
                                <option :value="0"> Nuevo </option>
                                <option :value="1"> Usado </option>
                                <option :value="2"> Desuso </option>
                            </select>
                            Area :
                            <select v-model="activoPayload.areaId">
                                <option disabled value="">Seleccione un área</option>
                                <option :value="area.id" v-for="area in areas">{{ area.nombre_area }}</option>
                            </select>
                            <button type="submit" class="waves-effect waves-light btn-small">Actualizar</button>
                            &nbsp; <router-link to="/activos" class="waves-effect grey btn-small">Cancelar</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActivoCrear',
    data() {
        const api = process.env.VUE_APP_API;
        return {
            api,
            areas: [],
            activoPayload: {
                tipo_activo: null,
                marca: null,
                modelo: null,
                estado: null,
                areaId: null
            }
        }
    },
    methods: {
        getOne() {
            this.axios({
                method: 'get',
                url: `${this.api}activos/${this.$route.params.id}`
            }).
                then((response) => {
                    this.activoPayload = response.data;
                }).
                catch((error) => {
                    console.log(error);
                });
        },
        getAreaList() {
            this.axios({
                method: 'get',
                url: `${this.api}areas`
            }).then((response) => {
                this.areas = response.data;
                const intervalo = setTimeout(() => {
                    this.intSelect();
                    clearTimeout(intervalo);
                }, 3000);

            }).catch((error) => {
                console.log(error);
            })
        },
        intSelect() {
            this.getAreaList();
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
        },
        update() {
            if (confirm("Esta seguro de editar?.")) {
                this.axios({
                    method: 'patch',
                    url: `${this.api}activos/${this.$route.params.id}`,
                    data: this.activoPayload
                }).
                    then((response) => {
                        console.log(response);
                        this.$router.push('/activos')
                    }).
                    catch((error) => {
                        console.log(error);
                    });
            }
        }
    },
    mounted() {
        this.getOne();
        this.getAreaList();
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }
}
</script>