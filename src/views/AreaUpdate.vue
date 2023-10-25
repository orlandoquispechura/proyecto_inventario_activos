<template>
    <div class="container "> <br><br>
        <div class="row ">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="update()">
                            <h5>Actualizar área</h5>
                            Area :
                            <input type="text" v-model="areasPayloads.nombre_area" required />
                            <p>Encargado : <input type="text" v-model="areasPayloads.nombre_encargado" required /></p>
                            <p>Funcionarios : <input type="number" v-model="areasPayloads.numero_funcionarios" required />
                            </p>

                            <button type="submit" class="waves-effect waves-light btn-small">Agregar</button> &nbsp;
                            <router-link to="/areas" class="waves-effect grey btn-small">Cancelar</router-link>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Area',
    data() {
        const api = process.env.VUE_APP_API;
        return {
            api,
            area: [],
            areasPayloads: {
                nombre_area: null,
                nombre_encargado: null,
                numero_funcionarios: null,
            }
        }
    },
    methods: {
        getOne() {
            this.axios({
                method: 'get',
                url: `${this.api}areas/${this.$route.params.id}`
            }).
                then((response) => {
                    this.areasPayloads = response.data;
                }).
                catch((error) => {
                    console.log(error);
                });
        },
        update() {
            if (confirm("Esta seguro de editar?.")) {
                this.axios({
                    method: 'patch',
                    url: `${this.api}areas/${this.$route.params.id}`,
                    data: this.areasPayloads
                }).
                    then((response) => {
                        console.log(response);
                        this.$router.push('/areas')
                    }).
                    catch((error) => {
                        console.log(error);
                    });
            }
        }
    },
    components: {

    },
    mounted() {
        this.getOne();
    }
}
</script>


<style lang="scss">
.col {
    margin: 0 auto;
}
</style>