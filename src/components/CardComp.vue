<template>
  <div id="box">
    <div class="mt-5 pt-5 px-2 w-100 container" id="searchBar">
      <input
        type="search"
        class="form-control form-control-dark mx-3 w-50"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
        @input="searchProducts"
      />

      <!-- Filter by Price Dropdown -->
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-filter fa-lg" style="color: #000000;"></i> Price Filter
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" @click="sortOrder = 'lowToHigh'">Low to high</a></li>
          <li><a class="dropdown-item" @click="sortOrder = 'highToLow'">High to low</a></li>
        </ul>
      </div>

      <!-- Filter by Category Dropdown -->
      <div class="dropdown ms-3">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-list fa-lg" style="color: #000000;"></i> Category Filter
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" @click="selectedCategory = ''">All Categories</a></li>
          <li v-for="category in categories" :key="category">
            <a class="dropdown-item" @click="selectedCategory = category">{{ category }}</a>
          </li>
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
      selectedCategory: "", // Holds the selected category for filtering
    };
  },
  computed: {
    categories() {
      // Extract unique categories from the products
      return [...new Set(this.$store.state.products.map((prod) => prod.category))];
    },
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

      // Filter by selected category
      if (this.selectedCategory) {
        products = products.filter((prod) => prod.category === this.selectedCategory);
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
    background-color: #d2c9c2; 
    padding-bottom: 3rem; 
}

#cardBox {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem; /* Added gap between cards */
}

#productImg {
    object-fit: cover;
    height: 300px;
    transition: transform 0.3s ease-in-out;
}

#productImg:hover {
    transform: scale(1.05);
}

#cardBody {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    background-color: #a39284; /* Timeless theme */
    color: #ffffff;
}

#cardBody:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

#txtHeight {
    overflow: hidden;
    max-height: 45px;
}

#searchBar {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 1rem;
}

#searchBar input {
    border-radius: 50px;
    border: 1px solid #ced4da;
    background-color: #ffffff;
}

.dropdown-menu {
    border-radius: 8px;
}

.btn-dark {
    background-color: #343a40;
    border: none;
}

.btn-dark:hover {
    background-color: #23272b;
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
