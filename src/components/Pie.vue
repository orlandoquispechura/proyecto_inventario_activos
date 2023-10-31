<template>
  <footer class="pie">
    <p>pie de página</p>
  </footer>
</template>

<script>
export default {
  name: 'Pie',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.pie {
  width: 100%;
  height: 70px;
  background-color: #EE6E73;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
}
.pie p{
  margin: 0;
  padding: 0;
  color:#fff;
}
</style>


