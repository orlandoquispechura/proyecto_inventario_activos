<template>
    <div class="container ">
        <div class="row ">
            <div class="col s12 m12 l6 ">
                <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="nuevo()">
                            <h5>Nuevo activo</h5>
                            Tipo de activo :
                            <input type="text" v-model="activoPayload.tipo_activo" required />
                            Marca :
                            <input type="text" v-model="activoPayload.marca" required />
                            Modelo : 
                            <input type="text" v-model="activoPayload.modelo" required />
                            Estado : 
                            <select v-model="activoPayload.estado">
                                <option disabled value="">Seleccione estado</option>
                                <option :value="0" > Nuevo </option>
                                <option :value="1" > Usado </option>
                                <option :value="2" > Desuso </option>
                            </select>
                            Area :
                            <select v-model="activoPayload.areaId">
                                <option disabled value="">Seleccione un área</option>
                                <option :value="area.id" v-for="area in areas">{{ area.nombre_area }}</option>
                            </select>
                            <button type="submit" class="waves-effect waves-light btn-small">Agregar</button>
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
        nuevo() {
            this.axios({
                method: 'post',
                url: `${this.api}activos`,
                data: this.activoPayload,

            }).then((response) => {
                this.$router.push("/activos")
            }).catch((error) => {
                console.log(error)
            })
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

    },
    mounted() {
        this.getAreaList();
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }
}
</script>
<style lang="scss">
    .centrar{
        margin: 0 auto;
    }
</style>