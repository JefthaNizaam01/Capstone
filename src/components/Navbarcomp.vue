<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="https://jefthanizaam01.github.io/favoriteimages/images/timeless logo.png" loading="lazy" alt="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" active-class="active" to="/">Home</router-link>
          <router-link class="nav-link" active-class="active" to="/about">About</router-link>
          <router-link class="nav-link" active-class="active" to="/products">Products</router-link>
         
          <router-link class="nav-link" active-class="active" id="usersRole" to="/admin">Admin</router-link>
          <router-link
            class="nav-link"
            active-class="active"
            to="/profile"
            v-if="$cookies.get('jwt') && $cookies.get('jwt') !== null"
            >Profile</router-link
          >
          <router-link
            class="nav-link"
            active-class="active"
            to="/login"
            v-if="!$cookies.get('jwt') || $cookies.get('jwt') === null"
            >Login</router-link
          >
          <router-link
            class="nav-link"
            active-class="active"
            to="/contact"
            >Contact</router-link
          >
          <router-link
            class="nav-link"
            id="cartXYZ"
            to="/cart"
            v-if="$cookies.get('jwt') && $cookies.get('jwt') !== null"
          >
            <i class="fa-solid fa-cart-shopping fa-lg" style="color: black;"></i>
            <span style="color: black;">{{ cartItemCount }}</span>
          </router-link>
          <button
            v-if="$cookies.get('jwt') && $cookies.get('jwt') !== null"
            @click="logOut"
            class="btn bg-black"
            aria-label="Logout"
          >
            <i
              class="fa-solid fa-arrow-right-from-bracket fa-sm"
              style="color: #ffffff;"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cartItemCount: 0, 
    };
  },
  created() {
    this.watchCart(); 
  },
  methods: {
    logOut() {
      this.$store.dispatch('logoutUser');
    },
    watchCart() {
      
      this.$watch(
        () => this.$store.state.cartState || [],
        (newValue) => {
          this.cartItemCount = newValue.length; 
        },
        { immediate: true }
      );
    },
  },
};
</script>

<style scoped>
.navbar {
   margin: 0;
   padding: 0;
}

.nav-link {
    color: #332d28;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
}

.navbar-nav .nav-link:hover {
    color: #d2c9c2;
}

.navbar-nav .nav-link:visited {
    color: #968e87;
}

.navbar-nav .nav-link:active {
    color: rgb(129, 116, 116);
}

.container-fluid {
    background-color: #e2dbd6;
}
</style>
