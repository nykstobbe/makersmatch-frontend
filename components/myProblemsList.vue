<script setup lang="ts">

import { Problem } from '@/types/problem'

const problems = ref<Problem[]>([]);

onMounted(() => {
    fetch("/api/Problem/get-user-problems", {
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

    <h3>My problems.</h3>

    <p v-for="problem in problems">
        <b>Name:</b> {{ problem.name }} <br/>
        <b>Description:</b> {{ problem.description }}
    </p>

</template>