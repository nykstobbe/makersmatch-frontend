<script setup lang="ts">

// state
const username = ref('');
const email = ref('');
const password = ref('');
const roles = ref([]);

const register = () => {
    const registerModel = {
        username: username.value,
        email: email.value,
        password: password.value,
        roles: roles.value
    }

    console.log(JSON.stringify(registerModel));

    fetch("https://localhost:7194/api/Authentication/register", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registerModel)
    }).then(async (res) => {
        console.log(await res.json());
    })
}

</script>

<template>
    Register page

    <form v-on:submit.prevent="register">
        <label for="username">Username:</label>
        <input id="username" type="text" v-model="username">
        <label for="email">Email adress</label>
        <input id="email" type="email" v-model="email">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
        <label for="role">Pick wether you want to be a maker, a problem owner or both.</label>
        <select id="role" name="role" size="2" multiple v-model="roles">
            <option value="Maker">Maker</option>
            <option value="ProblemOwner">Problem Owner</option>
        </select>
        <input type="submit" value="Register">
    </form>
</template>

<style>
form {
    display: flex;
    flex-direction: column;
    width: 160px;
}
</style>