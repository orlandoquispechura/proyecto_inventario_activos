<template>
    <nav class="nav-extended">
        <div class="nav-wrapper"> 
            <a href="#" class="brand-logo">Sistema inventario</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/">Home </router-link> </li>
                <li><router-link to="/areas">Areas</router-link></li>
            </ul>
        </div>
        <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li><router-link to="/">Home </router-link> </li>
                <li><router-link to="/areas">Areas</router-link></li>
            </ul>
        </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
        <li><router-link to="/">Home </router-link> </li>
        <li><router-link to="/areas">Areas</router-link></li>
    </ul>
<!-- 
    <div id="test1" class="col s12">Test 1</div>
    <div id="test2" class="col s12">Test 2</div>
    <div id="test3" class="col s12">Test 3</div>
    <div id="test4" class="col s12">Test 4</div> -->
 
</template>

<script>
import M from 'materialize-css'
export default {
    name: 'HeaderNav',
    data() {
        return {
            sidenav: null,
        }
    },
    props: [],
    methods: {
        menu() {
            this.sidenav.open()
        }
    },
    mounted() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
        this.sidenav = instances[0];
    }
}
</script>