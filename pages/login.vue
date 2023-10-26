<script setup lang="ts">

// state
const email = ref('');
const password = ref('');

const login = () => {
    const loginModel = {
        email: email.value,
        password: password.value
    }

    fetch("https://localhost:7194/api/Authentication/login", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginModel)
    }).then(async (res) => {
        if (res.status >= 200 && res.status < 300) {
            const response = await res.json();
            localStorage.setItem("token", response.token);

            navigateTo("/app");
        }
    })
}

</script>

<template>
    
    <h3>Login Page</h3>

    <form class="login-form" v-on:submit.prevent="login">
        <label for="email">email:</label>
        <input id="email" type="text" v-model="email">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password">
        <input id="submit" type="submit" value="Login">
    </form>
</template>

<style>

form {
    display: flex;
    flex-direction: column;
    width: 160px;
}

</style>