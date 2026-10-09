<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">21HIKING SHOP</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >Dropdown</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Register</a></li>
              <li><a class="dropdown-item" href="#">Login action</a></li>
              <li><a class="dropdown-item" href="#">Log out</a></li>
            </ul>
          </li>

             <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >Employee</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/employee">Employee</a></li>
              <li><a class="dropdown-item" href="/employee_crud">employee_crud</a></li>
        
            </ul>
          </li>
            <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >Contact</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/contact">Contact</a></li>
              <li><a class="dropdown-item" href="/contact_crud">Contact_crud</a></li>
        
            </ul>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" to="/customer_crud"
              >Customer_crud</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/customer">Customer</router-link>
          </li>
         
         
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
