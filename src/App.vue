<script>
export default {
  name: 'App'}
</script>

<template>
  <header>
    <!--
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    -->
    <nav>
      <RouterLink to="/home"></RouterLink>
      <router-view></router-view>
    </nav>

    <main>
    </main>
  </header>
  <body>

  </body>
  <footer>
  </footer>  <!-- <TheWelcome /> -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
@import 'primevue/resources/themes/saga-blue/theme.css';
@import 'primevue/resources/primevue.min.css';
@import 'primeicons/primeicons.css';

header {
  line-height: 1.5;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
