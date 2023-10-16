<script setup lang="ts">

const problems = ref([]);

onMounted(() => {
    fetch("https://localhost:7194/api/Problem/get-user-problems", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${GetToken()}`
        }
    }).then(async (res) => {
        const response : [] = await res.json();

        if (res.ok) 
            problems.value = response;
    });
});

</script>

<template>

    <h2>My problems</h2>

    <p v-for="problem in problems">
        <b>Name:</b> {{ problem.name }} <br/>
        <b>Description:</b> {{ problem.description }}
    </p>

</template>