<template>
    <div class="container mx-auto overflow-x-hidden min-h-screen relative flex-1">
        <TopBar/>
        <div class="carousel w-full gap-4 my-5 px-4">
            <Activity v-for="i in 3" :key="i"/>
        </div>

        <ClientOnly>
            <GoalForTheWeek/>
        </ClientOnly>

        <div class="px-4 my-4">
            <div class="flex items-center justify-between mb-4">
                <p class="heading">Trending Workouts</p>
                <p class="text-sm font-normal text-black/60 underline">see all</p>
            </div>
            <div class="grid grid-cols-1 gap-y-3">
                <Workout v-for="i in 20" :key="i"/>
            </div>
        </div>

        <BottomBar/>
    </div>
</template>
