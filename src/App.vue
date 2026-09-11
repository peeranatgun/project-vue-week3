<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow-1">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: { Navbar }
};
</script>

<style>
/* Bootstrap มี d-flex, flex-column, min-vh-100 อยู่แล้ว */
</style>
