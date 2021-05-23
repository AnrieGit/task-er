<template>
    <div>
        <Header title="About"/>
        <div class="w-full block bg-white p-5">
            <div class="text-center">
                <p class="mt-3 text-gray-500 text-sm">
                    Task Tracker is a simple web application made using Vue JS 3.
                </p>
                <div class="mt-2 text-xs">
                    Copyright &copy; 2021
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'

    export default {
        name: 'About',
        components: {
            Header,
        },
    }
</script>