<template>
    <div class="px-4 py-5 sm:px-6 bg-white shadows">
        <div class="flex justify-center items-center">
            <h3 class="text-lg leading-6 font-bold text-tapa-700">
                {{ title }}
            </h3>
        </div>
    </div>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    props: {
        title: String,
        description: String,
    },
    components: {
        Button
    }
}
</script>