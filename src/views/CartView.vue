<template>
    <div class="mt-5 pt-5 pe-5" v-if="$cookies.get('jwt')">
        <div class="d-flex justify-content-center">
            <input type="search" class="form-control form-control-dark mx-3 w-50 mb-2" placeholder="Search..." aria-label="Search" v-model="search">
        </div>

        <div class="d-flex justify-content-center gap-1 container">
            <button @click="toggleSort()" id="sortBy" class="btn bg-black text-white">
                <i class="fa-solid fa-arrow-down-up-across-line fa-lg" style="color: #ffffff;"></i> Sort
            </button>
            <router-link to="/products" class="btn bg-black text-white" id="router">
                <i class="fa-solid fa-basket-shopping fa-lg" style="color: #ffffff;"></i> Continue shopping
            </router-link>
        </div>

        
        <div v-for="cart in filteredCart" v-bind:key="cart.prodName" class="mt-3" id="cart">
            <div id="img" class="container">
                <img :src="cart.prodUrl" height="200" width="200" loading="lazy" class="img img-fluid shadow mx-2 border p-1 my-4"/>
            </div>
            <div id="borderLR" class="mx-3 container">
                <div class="fw-bold py-3 my-3 px-4">
                    <div id="productName"><span>Name:</span> {{ cart.prodName }}</div>
                </div>
                <div class="py-1 my-3 px-2">
                    <div id="prodPrice"><span>Price:</span> R{{ cart.amount }}</div>
                </div>
                <div class="py-2 my-3 px-4 d-flex gap-2 border-top">
                   
                    <button @click="deleteFromCart(cart.prodID)" class="btn bg-black text-white w-100">Decrease quantity</button>
                </div>
            </div>
            <div class="py-3 my-1 px-4">
                <div class="fw-bold py-3 my-3 px-4">
                    <div id="prodQuantity"><span>Quantity:</span> {{ cart.quantity }}</div>
                </div>
                <div id="prodTotal" class="px-2 py-1"><span>Total price:</span> R{{ cart.total_price }}</div>
            </div>
        </div>  
    </div>

    <div v-else id="FourOFour" class="container-fluid">
        <h1 class="display-1">403 Forbidden</h1>
    </div>
</template>

<script>
import UserProfile from './UserProfile.vue';

export default {
    data() {
        return {
            Userfavourites: [],
            search: '',
            sortAsc: true,  
        };
    },
    components: {
        UserProfile
    },
    computed: {
        filteredCart() {
            let cartItems = this.$store.state.cartState;

            
            if (this.search) {
                cartItems = cartItems.filter(cart => {
                    const productName = cart.productName || '';
                    return productName.toLowerCase().includes(this.search.toLowerCase());
                });
            }

            if (this.sortAsc) {
                cartItems.sort((a, b) => a.amount - b.amount);
            } else {
                cartItems.sort((a, b) => b.amount - a.amount);
            }

            return cartItems;
        },
        favourites() {
            return this.getFavourites();
        }
    },
    methods: {
        getCart() {
            this.$store.dispatch('userCart')
                .catch(err => {
                    console.error('Error fetching cart:', err);
                });
        },
        deleteFromCart(prodID) {
            this.$store.dispatch('removeFromCart', prodID)
                .catch(err => {
                    console.error('Error removing from cart:', err);
                });
        },
        async addToFavs(favz) {
            this.Userfavourites.push(favz);
            localStorage.setItem('favs', JSON.stringify(this.Userfavourites));
            await swal(`You just liked a product`, `The product you liked has been saved`, "success");
            this.$forceUpdate();  
        },
        getFavourites() {
            return JSON.parse(localStorage.getItem("favs")) || [];
        },
        toggleSort() {
            this.sortAsc = !this.sortAsc;
        }
    },
    mounted() {
        this.getCart();
    }
};
</script>

<style scoped>
#FourOFour {
    text-align: center;
    color: rgb(10, 9, 9);
}

#cart {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
 
    transition: border-color 0.3s ease-in-out; 
    text-align: center; 
    background-color: #d2c9c2;
}



#borderLR {
    margin-top: 20px;
    margin-bottom: 20px;
}

#prodTotal {
    background-color: #eaeaea; 
    border-radius: 12px; 
    transition: background-color 0.3s ease, box-shadow 0.3s ease; 
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1); 
    padding: 10px;
}

#prodTotal:hover {
    background-color: #d0d0d0; 
}

#FourOFour {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Arial', sans-serif; 
}

@media (max-width: 998px) {
    #cart {
        flex-direction: column;
        border-left: none; 
    }
}
@media (max-width: 558px) {
    #router, div, button, i {
        font-size: 14px; 
    }
}
@media (max-width: 358px) {
    #router, div, button, i {
        font-size: 12px;
    }
}
@media (max-width: 301px) {
    #router, div, button {
        font-size: 10px;
    }
    i {
        font-size: 8px;
    }
}
</style>
