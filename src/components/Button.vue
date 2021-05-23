<template>
    <button :disabled="loading" :type="type" :class="classes" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-tapa-600 hover:bg-tapa-700 rounded-md focus:outline-none focus:ring-4 focus:ring-tapa-500 focus:ring-opacity-50 disabled:opacity-75">
        <span v-if="loading">Loading...</span>
        <span v-else>{{ title }}</span>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            title: String,
            classes: String,
            type: String,
            loading: Boolean,
        }
    }
</script>