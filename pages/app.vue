<script setup lang="ts">

definePageMeta({
    middleware: [
        'auth',
    ],
});

const loading = ref(true);
const isMaker = ref(false);
const isProblemOwner = ref(false)

onMounted(() => {
    fetch("/api/Authentication/get-roles", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${GetToken()}`
        }
    }).then(async (res) => {
        const response : string[] = await res.json();

        if (response.includes("Maker"))
            isMaker.value = true

        if (response.includes("ProblemOwner"))
            isProblemOwner.value = true

        loading.value = false;
    })
});

</script>

<template>

    <div id="loader" v-if="loading"> 
        Loading...
    </div>

    <div id="section-maker" v-if="isMaker">
        <MakerSection/>    
    </div>
    
    <div id="section-problemowner" v-if="isProblemOwner">
        <ProblemOwnerSection/>
    </div>

    <div id="section-chats">
        <MyChatsList/>
    </div>

</template>