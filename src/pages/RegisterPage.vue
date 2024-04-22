<template>
    <main class="auth-wrapper">
        <form class="auth-form" @submit.prevent="handleSubmit">
            <h1>
                <span>Taskify</span>
            </h1>
            <h2 class="h3 mb-4 fw-normal">Please sign up</h2>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Your name" />
                <label for="name">Name</label>
            </div>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" id="email" v-model="form.email" placeholder="name@example.com" />
                <label for="email">Email</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Password" />
                <label for="password">Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password_confirmation" v-model="form.password_confirmation"
                    placeholder="Password Confirmation" />
                <label for="password_confirmation">Password Confirmation</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        </form>
    </main>
</template>

<script setup>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { userAuthStore } from "../stores/auth";

const router = useRouter()
const store = userAuthStore()
const { isLoggedIn, errors } = storeToRefs(store)
const { handleRegister } = store

const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const handleSubmit = async () => {
   const res =  await handleRegister(form)
   
     
        router.push("/login")
    
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

.invalid-feedback {
    color: red;
    font-size: 0.8rem;
    margin-top: 0.2rem;
}
</style>
