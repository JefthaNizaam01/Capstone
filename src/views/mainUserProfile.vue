<template>
    <div id="boxLg">
        <div id="box" class="mt-5 pt-5">
            <div v-for="user in userIsLogged()" :key="user.userID" class="px-3">
                <div class="card mx-2 shadow" style="width: 42.4rem;" id="container">
                    <div class="d-flex">
                        <p id="XYX" class="card-text small mx-2 my-1"><i class="fa-regular fa-circle-user fa-lg" style="color: #04ff00;"></i> Active</p>
                    </div>

                    <img :src="user.profileURL" class="card-img-top pt-2" id="objectImg" :alt="user.username">
                    <div class="card-body">
                        <h5 class="card-title fs-4">{{ user.username }}</h5>
                        <p class="card-text fs-4">{{ user.emailAdd }}</p>
                    </div>
                    <div class="container">
                        <div class="input-group flex-nowrap mb-2">
                            <span class="input-group-text" id="addon-wrapping">Username</span>
                            <input type="text" class="form-control" placeholder="user_name" aria-label="Username" aria-describedby="addon-wrapping" v-model="username">
                        </div>
                        <div class="input-group flex-nowrap mb-2">
                            <span class="input-group-text" id="addon-wrapping">Profile Image</span>
                            <input type="text" class="form-control" placeholder="profileURL" aria-label="Profile URL" aria-describedby="addon-wrapping" v-model="profileURL">
                        </div>
                        <div class="input-group flex-nowrap mb-2">
                            <span class="input-group-text" id="addon-wrapping">Email add</span>
                            <input type="text" class="form-control" placeholder="emailAdd" aria-label="Email" aria-describedby="addon-wrapping" v-model="user.emailAdd" readonly>
                        </div>
                        <div class="d-flex gap-2 justify-content-center my-2 col-lg-6 mx-auto">
                            <button type="button" class="btn btn-primary" id="button" @click="updateUser(user.userID)">Save my changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateUser(user.userID)">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userID : $cookies.get('userId'),
            username : '',
            emailAdd : '',
            passw : '',
            userRole : '',
            profileURL : '',
        }
    },
    methods : {
        userIsLogged(){
            let users = JSON.parse(localStorage.getItem("activeUser")) || [];
            return users;
        },
        getCart(){
            this.$store.dispatch('userCart');
        },
        updateUser(userID){
            let userObjX = {
                userID : this.userID,
                username : this.username,
                emailAdd : this.emailAdd,
                passw : this.passw,
                userRole : this.userRole,
                profileURL : this.profileURL
            }
            this.$store.dispatch('updateUser', userObjX);
        },
    },
    mounted() {
        this.userIsLogged();
        this.getCart();
    },
}
</script>

<style scoped>

#boxLg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: #d2c9c2;
    padding: 2rem;
}

#box {
    display: flex;
    justify-content: center;
    width: 100%;
}

#user {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#objectImg {
    object-fit: contain;
    height: 300px;
}

#XYX {
    cursor: pointer;
}


#button {
    width: fit-content;
    display: flex;
    padding: 0.6em 1rem;
    cursor: pointer;
    gap: 0.4rem;
    font-weight: bold;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

#button:hover {
    background-color: #fff;
    color: #000;
    border-color: #000;
}

#button svg {
    width: 23px;
    fill: #fff;
    transition: fill 0.3s;
}

#button:hover svg {
    fill: #000;
}


.modal-content {
    background-color: #f5f5f5;
    border: 1px solid #d2c9c2;
    border-radius: 10px;
}

.modal-header {
    border-bottom: 1px solid #e5e5e5;
}

.modal-title {
    color: #000;
}

.modal-body {
    color: #333;
}

.modal-footer {
    border-top: 1px solid #e5e5e5;
}

.btn-secondary {
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
}

.btn-secondary:hover {
    background-color: #fff;
    color: #000;
    border-color: #000;
}

@media (max-width: 1028px) {
    #boxLg {
        flex-direction: column;
    }
}

@media (max-width: 990px) {
    #boxLg {
        flex-direction: column;
    }
}

@media (max-width: 525px) {
    #boxLg {
        flex-direction: column;
        justify-content: center !important;
    }
}
</style>
