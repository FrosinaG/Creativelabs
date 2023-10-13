<template >
    <div class="bg-cover bg-[url('/img/Hero-Bg.png')] p-10 pt-0 ">
        <header>
            <nav class="container mx-auto p-4 flex justify-between ">

                <div class="relative h-35 w-35">
                    <NuxtLink to="/"> <img src='/logo.png' alt="logo " class="absolute h-14 w-14 -left-11 -top-4 "
                            loading="lazy" /><img src='/creativelabs.png' alt="logo" loading="lazy" />
                    </NuxtLink>
                </div>
                <ul class="flex gab-6  font-sans text-center font-size-14 text-white w-1/2">
                    <li class="p-3 ">
                        <NuxtLink to="#work" class="btn"> Work</NuxtLink>
                    </li>
                    <li class="p-3">
                        <NuxtLink to="#what" class="btn">What we do</NuxtLink>
                    </li>
                    <li class="p-3">
                        <NuxtLink to="#stories" class="btn">Stories</NuxtLink>
                    </li>
                    <li class="p-3">
                        <NuxtLink to="#contact" class="btn">Contact</NuxtLink>
                    </li>
                    <li class="p-3">
                        <NuxtLink to="#careers" class="btn">Careers</NuxtLink>
                    </li>
                    <li class="p-3">
                        <NuxtLink to="#about" class="btn">About us</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="flex pt-0 mt-0 mb-10 pb-10  ml-10">
            <div class="w-2/4"></div>
            <div class=" flex ml-8 ">
                <Whatwedo />
            </div>
        </div>
        <div class="text-white m-2 mt-10  w-4/5">
            <div class="mt-11 pt-1">
                <p class="text-5xl leading-10 font-bold break-words font-['inter var'] ">Lorem ipsum dolor sit
                    amet,
                    adipiscing elit, sed
                    do eiusmod
                    tempor
                    incididunt.
                </p>
            </div>
            <div class="mr-10 pt-8 pr-10">
                <p class="">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo
                    consequat.
                    Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur
                    sint
                    occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            </div>
        </div>
    </div>
    <div class="container mx-auto">
        <slot />
    </div>
</template>
<script setup>

</script>
<style scoped>
.router-link-exact-active {
    text-decoration: none;
}
</style>