<script setup lang="ts">

import { Chat } from '@/types/chat'

const chats = ref<Chat[]>([]);

onMounted(() => {
    fetch("/api/Chat/get-chats", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${GetToken()}`
        }
    }).then(async (res) => {
        const response : [] = await res.json();

        if (res.ok) 
            chats.value = response;
    });
});

</script>

<template>

    <h3>My chats.</h3>

    <ul>
        <li v-for="chat in chats">
            <a :href="'./chat/' + chat.id"> chat: {{ chat.id }}</a>
        </li>
    </ul>

</template>