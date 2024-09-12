<template>
  <div class="p-5 mt-5">
    <!-- Products in Table Format -->
    <h1>Manage Products</h1>
    <div class="table-responsive">
      <table class="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in $store.state.products" :key="product.prodID">
            <td><img :src="product.productURL" class="product-img" :alt="product.productName" loading="lazy"></td>
            <td>{{ product.productName }}</td>
            <td>{{ product.productDesc }}</td>
            <td>R{{ product.amount }}</td>
            <td>
              <button @click="deleteProduct(product.prodID)" class="btn btn-dark mx-1">
                Delete
              </button>
              <button type="button" class="btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#updateProductModal' + product.prodID" @click="setProductForUpdate(product)">
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Product Update Modals -->
    <div v-for="product in $store.state.products" :key="'modal-' + product.prodID">
      <div class="modal fade" :id="'updateProductModal' + product.prodID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="updateProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="updateProductModalLabel">Update Product {{ product.prodID }}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- Product Update Form -->
              <div class="input-group flex-nowrap mb-2">
                <span class="input-group-text">Product Name</span>
                <input type="text" class="form-control" placeholder="Product name" v-model="selectedProduct.productName">
              </div>
              <div class="input-group flex-nowrap mb-2">
                <span class="input-group-text">Description</span>
                <input type="text" class="form-control" placeholder="Description" v-model="selectedProduct.productDesc">
              </div>
              <div class="input-group flex-nowrap mb-2">
                <span class="input-group-text">Amount</span>
                <input type="number" class="form-control" placeholder="Amount" v-model="selectedProduct.amount">
              </div>
              <div class="input-group flex-nowrap mb-2">
                <span class="input-group-text">Image URL</span>
                <input type="text" class="form-control" placeholder="Image URL" v-model="selectedProduct.productURL">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-dark" @click="updateProduct(selectedProduct.prodID)">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Manage Users -->
    <h1 class="mt-5 pt-5">Manage Users</h1>
    <div class="users-container">
      <div class="user-card" v-for="user in $store.state.users" :key="user.userID">
        <div class="card">
          <router-link @click="getUser(user.userID)" :to="{ name: 'admi', params: { userId: user.userID }}" class="card-img-top">
            <img :src="user.profileURL" :alt="user.username" class="user-img">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">{{ user.username }}</h5>
            <p class="card-text">{{ user.emailAdd }}</p>
            <p class="card-text">{{ user.userRole }}</p>
            <div class="d-flex justify-content-evenly">
              <button type="button" class="btn btn-dark mx-1" data-bs-toggle="modal" :data-bs-target="'#updateUserModal' + user.userID">
                Update
              </button>

              <!-- User Update Modal -->
              <div class="modal fade" :id="'updateUserModal' + user.userID" tabindex="-1" aria-labelledby="updateUserModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="updateUserModalLabel">{{ user.username }}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <!-- User Update Form -->
                      <div class="input-group flex-nowrap mb-2">
                        <span class="input-group-text">Username</span>
                        <input type="text" class="form-control" v-model="username">
                      </div>
                      <div class="input-group flex-nowrap mb-2">
                        <span class="input-group-text">Email</span>
                        <input type="email" class="form-control" v-model="emailAdd">
                      </div>
                      <div class="input-group flex-nowrap mb-2">
                        <span class="input-group-text">Password</span>
                        <input type="password" class="form-control" v-model="passw">
                      </div>
                      <div class="input-group flex-nowrap mb-2">
                        <span class="input-group-text">Role</span>
                        <input type="text" class="form-control" v-model="userRole">
                      </div>
                      <div class="input-group flex-nowrap mb-2">
                        <span class="input-group-text">Profile URL</span>
                        <input type="text" class="form-control" v-model="profileURL">
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-dark" @click="updateUser(user.userID)">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

              <button class="btn btn-dark" @click="deleteUser(user.userID)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>


<script>
import ChartComp from '../components/ChartComp.vue'

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
      selectedProduct: {
        prodID: null,
        productName: '',
        productDesc: '',
        amount: '',
        productURL: '',
        category: ''
      },
      // error handling
      errorText: '',
      search: ''
    };
  },
  components: {
    ChartComp
  },
  methods: {
    isFormValid() {
      return this.username && this.emailAdd && this.passw.length >= 5 && this.userRole && this.profileURL;
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
        productName: this.selectedProduct.productName,
        productDesc: this.selectedProduct.productDesc,
        amount: this.selectedProduct.amount,
        productURL: this.selectedProduct.productURL,
        category: this.selectedProduct.category
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
    },
    setProductForUpdate(product) {
      this.selectedProduct = { ...product };
    }
  },
  mounted() {
    this.getUsers();
    this.getProducts();
  }
}
</script>

<style scoped>
.product-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.table-responsive {
  overflow-x: auto;
}

.table img {
  max-width: 100px; /* Ensure images are not too large in the table */
}

.users-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.user-card {
  flex: 1 1 300px; /* Adjust the base width of the cards */
  max-width: 350px;
  margin: 10px;
}

.user-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal-content {
  max-width: 600px;
  margin: auto;
}

</style>

