<script lang="ts" setup></script>

<template>
    <div class="carousel-item w-1/2 animate__animated animate__bounceInUp shadow">
        <div class="bg-white p-3 rounded-lg flex items-center w-full animate__animated animate__bounceInUp">
            <i class="grid-place-items-center text-primary text-xl p-3">
                <ion-icon name="footsteps-outline"/>
            </i>
            <div class="flex flex-col gap-y-3 flex-1">
                <p class="text-base font-semibold leading-none">866</p>
                <p class="text-xs font-normal leading-none text-black/60">Calories burn</p>
                <progress class="progress progress-secondary w-full" value="70" max="100"></progress>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
