<template>
    <main class="auth-wrapper">
        <form class="auth-form" @submit.prevent="handleSubmit">
            <input type="hidden" name="_token" :value="csrfToken">
            <h1>
                <span>Taskify</span>
            </h1>
            <h2 class="h3 mb-4 fw-normal">Please sign in</h2>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" id="email" v-model="user.email"
                    placeholder="name@example.com" />
                <label for="email">Email</label>
                <!-- <div class="invalid-feedback" v-if="errors.email && errors.email[0]">
                    {{ errors.email && errors.email[0] }}
                </div> -->
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" v-model="user.password"
                    placeholder="Password" />
                <label for="password">Password</label>
                <!-- <div class="invalid-feedback" v-if="errors.password && errors.password[0]">
                    {{ errors.password && errors.password[0] }}
                </div> -->
            </div>

            <button @click="login()" class="w-100 btn btn-lg btn-primary">Sign in</button>
        </form>
    </main>
</template>

<script>
import axios from '@/http/api.js';
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            status: false
            ,
            error: false
            ,
            success: false
            ,
            errorMessage: {
                "whrong": ["password or email"]
            }
        };
    }
    ,
    computed: {
        validEmail() {
            return /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(this.user.email)
        }
    },
    methods: {
  login() {
    axios.post('/login', this.user)
      .then(response => {
        console.log(response.data);
        this.success = true;
        this.error = false;
        // Navigate directly to the /tasks route
        this.$router.push('/tasks');
      })
      .catch(error => {
        console.log(error);
        // Handle login error if necessary
      });
  }
},
    beforeUpdate() {
        this.status = true
    },
    updated() {
        this.status = false
    }

}
</script>


<style scoped>
.auth-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 60vh;
    margin-top: 2rem;
}

.auth-form {
    width: 400px;
}
</style>
