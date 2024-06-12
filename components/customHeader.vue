<template>
    <header>
        <div class="logo">
            <h2>MakersMatch Testing</h2>
        </div>
        <nav>
            <ul>
                <NuxtLink to="/login">Login</NuxtLink>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

header {
    background-color: #4d70ca;
    color: #e6c027;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
}

nav li {
    margin-right: 20px;
}

a {
    text-decoration: none;
    color: #e6c027;
}

</style>