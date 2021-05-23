<template>
    <div v-show="show" class="flex justify-end">
        <div class="fixed bg-red-500 text-white px-5 py-4 mt-5 mr-5 block rounded-lg whitespace-nowrap">
            <h1>{{ message }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Alert',
        props: {
            message: String,
            show: Boolean,
        }
    }
</script>