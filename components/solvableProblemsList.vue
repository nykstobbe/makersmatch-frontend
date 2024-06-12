<script setup lang="ts">

import { Problem } from '@/types/problem'

const problems = ref<Problem[]>([]);

onMounted(() => {
    fetch("/api/Problem/get-solvable-problems", {
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


const startChat = (userId: string) => {
    fetch(`/api/Chat/start-new-chat/${userId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${GetToken()}`
        }
    }).then(async (res) => {
        const response : number = await res.json();

        console.log(response)

        if (res.ok) 
            navigateTo(`/chat/${response}`);
    });
}

</script>

<template>

    <h3>Problems you could solve.</h3>

    <p v-for="problem in problems">
        <b>Name:</b> {{ problem.name }} <br/>
        <b>Description:</b> {{ problem.description }} <br/>
        <button @click="startChat(problem.userId)">Chat with problem-owner</button>
    </p>

</template>