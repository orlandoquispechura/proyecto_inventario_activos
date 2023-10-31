<template>
  <div class="home">
    <img src="https://www.giitic.com/img/activos/activos_fijos_software_niif.png?pfdrid_c=true" alt="fondo">
  </div>
</template>

<script>
// @ is an alias to /src

</script>
<style lang="scss">
.home {
  width: 100%;
  height: 73vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
    height: 310px;
    margin: 0;
    padding: 0;
  }
}

@media screen and (max-width:500px) {
  .home {
    width: 100%;
    height: 100vh;
  }

  .home img {
    width: 50%;
    height: 200px;
  }

}
</style>


