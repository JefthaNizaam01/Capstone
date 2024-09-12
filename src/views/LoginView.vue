<template>
  <div class="" id="formBody">
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-md-10 mx-auto col-lg-5 py-5" id="form">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" v-model="emailAdd">
                  <label for="floatingEmail">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="passw">
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingRole" placeholder="Role" v-model="userRole" disabled>
                  <label for="floatingRole">Identity code</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingRole" placeholder="Specify your role to access as admin" v-model="userRole" v-if="this.emailAdd === 'Nizaam@gmail.com'">
                  <label for="floatingRole" v-if="this.emailAdd === 'Nizaam@gmail.com'">Specify your role to access as admin</label>
                </div>
                <div class="d-flex gap-1 mt-2">
                  <button class="w-100 btn" type="submit" @click="loginUser()">Login</button>
                </div>
                <hr class="my-4">
                <small>No account?<router-link to="/signup"  class="text-white">Click here to create an account</router-link></small>
              <div id="eerTxt"></div>
            </div>
          </div>
        </div>
  </div>
</template>
<script>
export default {

  data(){
    return {
      userID : null,
      username : '',
      emailAdd : '',
      passw : '',
      userRole : 'user',
      profileURL : ''
    }
  },
  methods : {
    loginUser(){
      // console.log(this.$data.username)
      this.$store.dispatch('loginUser', this.$data)
    }
  }
  
}
</script>
<style scoped>

#formBody {
background-image: url('https://jefthanizaam01.github.io/favoriteimages/images/login background.png');
filter: brightness(1.3);
background-repeat: no-repeat;
background-size: cover;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.343),rgb(0, 0, 0, 0.241));
}
#form{
background-color: rgba(255, 255, 255, 0.352);
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
border-radius: 10px;
z-index: 50;
}

button {
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  background-color: #000; /* Solid black background */
  font-family: "Roboto", Arial, "Segoe UI", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff; /* White text color */
  z-index: 2;
  border-radius: var(--border-radius);
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

button::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3)); /* Gradient with soft black-and-white tones */
  z-index: -1;
  transition: background 0.3s ease-in-out;
}

button:hover {
  background-color: #fff; /* White background on hover */
  color: #000; /* Black text on hover */
}

button:hover::after {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3)); /* Reverse gradient on hover */
}

button:active {
  --border-width: 5px;
  background-color: #333; /* Darker gray when clicked */
  color: #fff; /* Keep white text on click */
}

button,
button::after {
  box-sizing: border-box;
}
  
</style>