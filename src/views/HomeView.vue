<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
</script>

<template>
  <!-- default vue -->
  <!-- <TheWelcome /> -->
  <div class="container-fluid" style="background-color:rgb(0, 30, 80);">
    <br>
    <center><img src="" alt="popifyLogo" height="60px"></center>
    <div class="navbar">
      <div class="container d-flex align-items-center justify-content-center">
        <center>
          <h3 style="color: white;">Welcome to Popify!</h3>
        </center>
      </div>
    </div>
  </div>

  <!-- Login component -->
  <Login />

  <!-- Divider -->
  <div class="col-sm-1">
    <div class="vl"></div>
  </div>
  <!-- Register component -->
  <Register />
</template>
