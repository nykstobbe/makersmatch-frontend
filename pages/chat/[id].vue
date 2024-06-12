<script setup lang="ts">

import { Chat } from '@/types/chat'
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'

const route = useRoute();
const chatId = route.params.id;

const chats = ref<Chat[]>([]);
const message = ref('');

onMounted(() => {
    fetch(`https://localhost:7194/api/Chat/get-messages/${chatId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${GetToken()}`
        }
    }).then(async (res) => {
        const response : [] = await res.json();

        if (res.ok) 
            chats.value = response.chatMessages;
    });

    // signalr
    const connection = new HubConnectionBuilder()
        .withUrl('https://localhost:7194/chat-hub')
        .configureLogging(LogLevel.Debug)
        .build()

    connection.start()
    connection.on('receiveMessage', (UserId, message) => {
        chats.value.push({
            "senderID": UserId,
            "message": message
        })
    })

});

const sendMessage = () => {
    fetch(`https://localhost:7194/api/Chat/send-message/${chatId}`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${GetToken()}`
        },
        body: JSON.stringify(message.value)
    }).then(async (res) => {
        if (res.status >= 200 && res.status < 300) {
            console.log("message send succesful")
        }
    })
}

</script>

<template>
    <h3>Chat {{ chatId }}.</h3>

    <p v-for="chat in chats">
        <b>From:</b> {{ chat.senderID }} <br/>
        <b>Message:</b> {{ chat.message }}
    </p>

    <form class='chat-box' v-on:submit.prevent='sendMessage'>
        <input
            v-model='message'
            placeholder='Send a message'
            type='text'
        />
    <button :disabled='message === ""'>Send</button>
  </form>

</template>