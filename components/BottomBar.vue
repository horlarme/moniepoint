<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";

const links = [
    'home-outline',
    'stats-chart-outline',
    'add-outline',
    'chatbubble-outline',
    'person-outline'
]

const modalNavLinks: Array<{ title: string, icon: string }> = [
    { icon: 'pulse-outline', title: 'Add Blood Pressure' },
    { icon: 'clipboard-outline', title: 'Add Weight Measurement' },
    { icon: 'bicycle-outline', title: 'Add Activity' },
    { icon: 'watch-outline', title: 'Track My Workout' },
]

const modalRef = ref<null | HTMLDivElement>(null)
const modalContentRef = ref<null | HTMLDivElement>(null)

function toggleModal() {
    console.log('toggleModal')
    modalRef.value!.classList.toggle('modal-open')
}

function closeModal() {
    modalRef.value!.classList.remove('modal-open')
}

function handleNavClick(index: number) {
    if (index === 2 && modalRef.value) {
        toggleModal()
    }
}

onClickOutside(modalContentRef, closeModal)
</script>

<template>
    <div ref="modalRef" class="modal items-end">
        <div ref="modalContentRef" class="modal-box mb-32 rounded-3xl flex flex-col gap-y-4">
            <div v-for="(link, index) in modalNavLinks"
                 class="group font-semibold flex items-center p-4 rounded-2xl shadow-lg gap-x-3 text-lg w-full bg-white hover:scale-90 transition-all hover:bg-primary"
                 :key="index">
                <i class="text-3xl text-primary grid place-items-center group-hover:text-white transition-all">
                    <ion-icon :name="link.icon"/>
                </i>
                <p class="text-sm group-hover:text-white">{{ link.title }}</p>
            </div>
        </div>
    </div>
    <div class="fixed bottom-0 bg-white rounded-t-2xl flex items-center justify-around inset-x-0">
        <i class="text-xl text-black/60 grid place-items-center w-14 aspect-square align-center px-3"
           :class="{'bg-primary -translate-y-8 rounded-full text-3xl text-white': index===2}"
           v-for="(link, index) in links"
           @click="handleNavClick(index)"
           :key="link">
            <ion-icon :name="link"/>
        </i>
    </div>
</template>

<style scoped></style>
