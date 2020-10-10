<template>
  <div>
    <b-navbar type="light" variant="dark">
      <b-navbar-nav>
        <b-nav-item> <router-link to="/home">Home</router-link></b-nav-item>
        <b-nav-item>
          <router-link to="/calculation">Calculation</router-link></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
