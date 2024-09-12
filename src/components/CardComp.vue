<template>
    <div id="box">
      <div class="mt-5 pt-5 px-2 w-100 container" id="searchBar">
        <input
          type="search"
          class="form-control form-control-dark mx-3 w-50"
          placeholder="Search by categories or product names"
          aria-label="Search"
          v-model="search"
          @input="searchProducts"
        />
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-filter fa-lg" style="color: #000000;"></i> Filter
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="sortOrder = 'lowToHigh'">Low to high</a></li>
            <li><a class="dropdown-item" @click="sortOrder = 'highToLow'">High to low</a></li>
          </ul>
        </div>
      </div>
  
      <div class="mt-2 pt-5 px-2 container" id="cardBox">
        <div
          class="card m-1"
          id="cardBody"
          style="width: 18rem;"
          v-for="product in filteredProducts"
          :key="product.productID"
        >
          <img
            :src="product.productURL"
            class="card-img-top"
            :alt="product.productName"
            loading="lazy"
            id="productImg"
          />
          <div class="card-body border-top">
            <div class="card-title" id="txtHeight">
              <h5>{{ product.productName }}</h5>
            </div>
            <p class="card-text">R {{ product.amount }}</p>
            <p class="card-text">category: {{ product.category }}</p>
  
            <router-link
              @click="fetchProduct(product.productID)"
              :to="{ name: 'product', params: { productId: product.productID } }"
              class="btn btn-dark"
              v-if="$cookies.get('jwt')"
              >details <i class="fa-regular fa-eye fa-sm" style="color: #ffffff;"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: "",
        sortOrder: null, // Sorting order: 'lowToHigh' or 'highToLow'
      };
    },
    computed: {
      filteredProducts() {
        let products = this.$store.state.products || [];
  
        // Filter by search input
        if (this.search) {
          products = products.filter((prod) => {
            return (
              prod.productName.toLowerCase().includes(this.search.toLowerCase()) ||
              prod.category.toLowerCase().includes(this.search.toLowerCase())
            );
          });
        }
  
        // Sort based on sortOrder
        if (this.sortOrder === "lowToHigh") {
          products = products.sort((a, b) => a.amount - b.amount);
        } else if (this.sortOrder === "highToLow") {
          products = products.sort((a, b) => b.amount - a.amount);
        }
  
        return products;
      },
    },
    methods: {
      fetchProducts() {
        this.$store.dispatch("fetchProducts");
      },
      fetchProduct(productID) {
        this.$store.dispatch("fetchProduct", productID);
      },
      searchProducts() {
        // Trigger search by updating the 'search' model
      },
    },
    mounted() {
      this.fetchProducts(); // Fetch products on component mount
    },
  };
  </script>
  
  <style scoped>
  #box {
      display: flex;
      justify-content: center;
      flex-direction: column;
      min-height: 100vh;
      align-items: center;
      background-color: #f8f9fa; /* Light background color for elegance */
  }

  #cardBox {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem; /* Added gap between cards */
  }

  #productImg {
      object-fit: cover; /* Changed to cover for a better fit */
      height: 300px;
      transition: transform 0.3s ease-in-out; /* Smooth zoom effect */
  }

  #productImg:hover {
      transform: scale(1.05); /* Zoom effect on hover */
  }

  #cardBody {
      border-radius: 8px; /* Rounded corners for cards */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
      transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  #cardBody:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
      transform: translateY(-5px); /* Slight lift effect on hover */
  }

  .regText {
      text-decoration: none;
      color: #007bff; /* Elegant blue for links */
  }

  #txtHeight {
      overflow: hidden; /* Hide scroll for better look */
      max-height: 45px;
  }

  #searchBar {
      display: flex;
      justify-content: center;
      flex-direction: row;
      margin-bottom: 1rem; /* Space below the search bar */
  }

  #searchBar input {
      border-radius: 50px; /* Rounded input for a modern look */
      border: 1px solid #ced4da; /* Subtle border color */
      background-color: #ffffff; /* Clean background color for the input */
  }

  .dropdown-menu {
      border-radius: 8px; /* Rounded corners for dropdown */
  }

  .btn-dark {
      background-color: #343a40; /* Dark background for buttons */
      border: none;
  }

  .btn-dark:hover {
      background-color: #23272b; /* Slightly darker on hover */
  }

  @media (max-width: 990px) {
      #cardBox {
          grid-template-columns: repeat(2, 1fr);
      }
  }

  @media (max-width: 580px) {
      #cardBox {
          grid-template-columns: repeat(1, 1fr);
      }
  }
</style>
