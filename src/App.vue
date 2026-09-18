<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    
      <router-view />
    

    <!-- Footer -->
    <Footer />

  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: { Navbar , Footer}
};
</script>

<style>
/* Bootstrap มี d-flex, flex-column, min-vh-100 อยู่แล้ว */
</style>
