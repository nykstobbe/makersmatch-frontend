<script setup>

const token = ref('');

onMounted(() => {

    token.value = localStorage.getItem("token");

    if (token.value == null) {
        navigateTo('/login');
    }
});

</script>

<template>

    Logged in<br/>
    Token: {{ token }}

</template>