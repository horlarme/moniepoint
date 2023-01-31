<script lang="ts" setup>
import { Chart } from "chart.js/auto";

const chartElementRef = ref<HTMLCanvasElement | null>(null)

Chart.defaults.color = 'white'
Chart.defaults.plugins.legend.display = false

onMounted(() => {
    nextTick(() => {
        new Chart<'bar'>(chartElementRef.value!, {
            type: 'bar',
            data: {
                labels: ['t', 'w', 't', 'f', 's', 's', 'm'],
                datasets: [
                    {
                        label: '',
                        data: [11, 10, 5, 8, 9, 4, 6],
                        backgroundColor: [
                            '#c4ff53', '#c4ff53', '#bdbdbd', '#bdbdbd', '#c4ff53', '#bdbdbd', '#bdbdbd'
                        ],
                        borderRadius: 200,
                        borderWidth: 0,
                        barThickness: 15
                    }
                ]
            },
            options: {
                font: {
                    family: 'Poppins',
                },
                indexAxis: 'x',
                scales: {
                    y: {
                        grid: {
                            display: false
                        },
                        border: { display: false }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        },
                        position: 'bottom',
                    }
                }
            }
        })
    })
})

</script>

<template>
    <div class="w-full px-4">
        <div class="flex items-center justify-between mb-3">
            <p class="text-base font-semibold">Goal for week</p>
            <p class="text-sm font-normal text-black/60">42 of 54</p>
        </div>

        <div class="bg-primary rounded-xl p-4 w-full aspect-video">
            <canvas class="w-full h-full" ref="chartElementRef"/>
        </div>
    </div>
</template>

<style scoped></style>
