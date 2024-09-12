<template>
  <div class="p-5 mt-5">
    <div id="products" class="gap-4">
      <div v-for="product in $store.state.products" v-bind:key="product.prodID">
        <div class="card" style="width: 18rem;">
          <img :src="product.productURL" class="card-img-top" :alt="product.productName" loading="lazy" id="productURL">
          <div class="card-body">
            <h5 class="card-title">{{product.productName}}</h5>
            <p class="card-text">R{{product.amount}}</p>
            <p class="card-text" id="textOve">{{product.productDesc}}</p>
            <button @click="deleteProduct(product.prodID)" class="btn btn-danger mx-1">
              <i class="fa-solid fa-trash fa-lg" style="color: #ffffff;"></i>
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop' + product.prodID">
              Update
            </button>
                  
            <div class="modal fade" :id="'staticBackdrop' + product.prodID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Update product {{product.prodID}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <!-- Product Update Form -->
                    <div class="input-group flex-nowrap mb-2">
                      <span class="input-group-text" id="addon-wrapping">Product Name</span>
                      <input type="text" class="form-control" placeholder="Product name" v-model="productName">
                    </div>
                    <!-- Other fields... -->
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateProduct(product.prodID)">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Manage Users -->
    <h1 class="mt-5 pt-5">Manage users</h1>
    <div id="container">
      <div class="mx-4" v-for="user in $store.state.users" v-bind:key="user.userID">
        <div class="card" style="width: 18rem;">
          <router-link @click="getUser(user.userID)" :to="{ name: 'admi', params: { userId: user.userID }}" class="card-img-top">
            <img :src="user.profileURL" :alt="user.username" id="userImg">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">{{ user.username }}</h5>
            <p class="card-text">{{ user.emailAdd }}</p>
            <p class="card-text">{{ user.userRole }}</p>
  
            <div class="d-flex justify-content-evenly">
              <button type="button" class="btn btn-primary mx-1" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + user.userID">
                Update
              </button>
                    
              <!-- User Update Modal -->
              <div class="modal fade" :id="'exampleModal'+user.userID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">{{user.userID}}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <!-- User Update Form -->
                      <div class="input-group flex-nowrap mb-2">
                        <span class="input-group-text">Username</span>
                        <input type="text" class="form-control" v-model="username">
                      </div>
                      <!-- Other fields... -->
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" @click="updateUser(user.userID)">Save changes to {{user.username}}</button>
                    </div>
                  </div>
                </div>
              </div>
  
              <button class="btn btn-danger" @click="deleteUser(user.userID)">
                <i class="fa-solid fa-trash fa-lg" style="color: #ffffff;"></i>
              </button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  
    <!-- Add User Section -->
    <div class="container mt-3">
      <h1>Add a user!</h1>
      <div id="boxXD">
        <div class="input-group flex-nowrap mb-2">
          <span class="input-group-text" v-if="username.length === 0"><i class="fa-solid fa-user fa-xl" style="color: #ff0000;"></i></span>
          <span class="input-group-text" v-else><i class="fa-solid fa-user fa-xl" style="color: #11ff00;"></i></span>
          <input type="text" class="form-control" v-model="username" required>
        </div>
        <!-- Other input fields... -->
      </div>
      <button class="btn btn-outline-dark" v-if="!isFormValid()" disabled>Fill in all input fields</button>
      <button @click="addNewUser()" class="btn btn-outline-primary" v-else>Add user to Database</button>
      <br>
      <div id="errTxt">{{ errorText }}</div>
    </div>
  
    <addProductComp/>
  </div>

  
</template>

<script>
import ChartComp from '../components/ChartComp.vue'
import addProductComp from '../components/addProductComp.vue'

export default {
  data() {
    return {
      // users
      userID: null,
      username: '',
      emailAdd: '',
      passw: '',
      userRole: '',
      profileURL: '',
      // products
      prodID: null,
      productName: '',
      productDesc: '',
      amount: '',
      productURL: '',
      category: '',
      // error handling
      errorText: '',
      search: ''
    };
  },
  components: {
    ChartComp,
    addProductComp
  },
  methods: {
    isFormValid() {
      return this.username && this.emailAdd && this.passw.length >= 5 && this.userRole && this.profileURL;
    },
    addNewUser() {
      if (this.isFormValid()) {
        this.$store.dispatch('addNewUser', this.$data);
      } else {
        this.errorText = 'Please fill in all fields correctly!';
      }
    },
    getUsers() {
      this.$store.dispatch('getUsers');
    },
    updateUser(userID) {
      const userObjX = {
        userID,
        username: this.username,
        emailAdd: this.emailAdd,
        passw: this.passw,
        userRole: this.userRole,
        profileURL: this.profileURL
      };
      this.$store.dispatch('updateUser', userObjX);
    },
    updateProduct(prodID) {
      const prodObjX = {
        prodID,
        productName: this.productName,
        productDesc: this.productDesc,
        amount: this.amount,
        productURL: this.productURL,
        category: this.category
      };
      this.$store.dispatch('updateProducts', prodObjX);
    },
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID);
    },
    deleteProduct(prodID) {
      this.$store.dispatch('deleteProduct', prodID);
    },
    getProducts() {
      this.$store.dispatch('fetchProducts');
    },
    getUser(id) {
      this.$store.dispatch('getUser', id);
    }
  },
  mounted() {
    this.getUsers();
    this.getProducts();
  }
}
</script>

<style scoped>
/* Container for the entire page */
.p-5 {
  padding: 2rem;
}

/* Flex container for products and users */
#products, #container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
}

/* Card styling for products and users */
.card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}



.card-img-top {
  border-radius: 8px 8px 0 0;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

/* Buttons */
.btn {
  border-radius: 4px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.btn:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.btn-outline-dark {
  border-color: #343a40;
  color: #343a40;
}

.btn-outline-dark:hover {
  background-color: #343a40;
  color: #fff;
}

/* Modal styling */
.modal-content {
  border-radius: 8px;
  overflow: hidden;
}

.modal-header, .modal-footer {
  border-bottom: 1px solid #dee2e6;
}

.modal-footer {
  border-top: 1px solid #dee2e6;
}

/* Add User Section */
#boxXD {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f8f9fa;
}

.input-group-text {
  border-radius: 4px;
  background-color: #e9ecef;
}

#errTxt {
  color: #dc3545;
  margin-top: 1rem;
}

/* Responsive adjustments */
@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .card {
    width: 48%;
  }
}
</style>
