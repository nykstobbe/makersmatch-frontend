export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server) return;

    let token = localStorage.getItem("token");

    if (token == null) {
        return navigateTo('/login')
    }
})