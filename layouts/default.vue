<template>
    <CustomHeader/>
    <div class="content">
        <slot/>
    </div>
</template>

<style>

html, body {
    height: 100%;
    width: 100%;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
}

.content {
    margin: 8px;
}

</style>