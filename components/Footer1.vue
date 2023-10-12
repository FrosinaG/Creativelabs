<template>
    <footer class="m-0 w-full">
        <div class="bg-black bg-cover text-white max-w-full m-0  ">
            <nav class="container  p-4 flex justify-between  ">
                <div class="w-3/6">
                    <div class="relative h-35 w-35">
                        <NuxtLink to="/"> <img src='/logo.png' alt="logo "
                                class="absolute h-14 w-14 -left-11 -top-4 " /><img src='/creativelabs.png' alt="logo" />
                        </NuxtLink>
                        <p id="About">Creative Labs, a web agency based in Sweden, is expanding its reach and opening a
                            new
                            office in Macedonia. The
                            agency is well-known for providing cutting-edge solutions to businesses across a wide range
                            of
                            industries,
                            and
                            their expansion to Macedonia is a testament to their commitment to delivering exceptional
                            results
                            for their
                            clients on a global scale.</p>
                    </div>
                </div>
                <div class="w-1/4 p-10 m-10 ">
                    <ul class="pl-16">
                        <li class="p-1">
                            <NuxtLink to="#work" class="btn">Work</NuxtLink>
                        </li>
                        <li class="p-1">
                            <NuxtLink to="#what" class="btn">What we do</NuxtLink>
                        </li>
                        <li class="p-1">
                            <NuxtLink to="#stories" class="btn">Stories</NuxtLink>
                        </li>
                        <li class="p-1">
                            <NuxtLink to="#contact" class="btn">Contact</NuxtLink>
                        </li>
                        <li class="p-1">
                            <NuxtLink to="#careers" class="btn">Careers</NuxtLink>
                        </li>
                        <li class="p-1">
                            <NuxtLink to="#about" class="btn">About us</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="w-1/4 p-10 m-10  ">
                    <p>Contact us</p>
                    <p>Creative Labs</p>
                    <p>Pelagonka 2Bitola, Macedonia</p>
                    <p> hi@creativelabs.se</p>
                    <NuxtLink to="  https://www.linkedin.com/company/creativelabs-se/">
                        <p>LinkedIn</p>
                    </NuxtLink>
                </div>
            </nav>
            <div class="flex justify-between w-9/12"> <span>© COPYRIGHT 2023 Creative Labs. All rights reserved. </span>
                <span>Privacy policy | Cookie policy</span>
            </div>
        </div>
    </footer>
</template>

<script setup></script>
<style scoped>
;
</style>