<template>
    <div class="w-full bg-white rounded-t-lg border-collapse border-b border-gray-200">
        <ul class="flex justify-center flex-row space-x-10 font-medium text-gray-400">
            <router-link 
                to="/"
                v-slot="{ href,  navigate, isActive }"
                custom
            >
                <a :href="href" @click="navigate" :class="[isActive ? 'text-tapa-500 border-b-2 border-tapa-500' : '']" class="font-bold hover:text-tapa-500 p-5 border-b-2 border-transparent hover:border-b-2 hover:border-tapa-500 cursor-pointer">
                    Home
                </a>
            </router-link>

            <router-link 
                to="/about"
                v-slot="{ href,  navigate, isActive }"
                custom
            >
                <a :href="href" @click="navigate" :class="[isActive ? 'text-tapa-500 border-b-2 border-tapa-500' : '']" class="font-bold hover:text-tapa-500 p-5 border-b-2 border-transparent hover:border-b-2 hover:border-tapa-500 cursor-pointer">
                    About
                </a>
            </router-link>

            <router-link 
                to="/contact"
                v-slot="{ href,  navigate, isActive }"
                custom
            >
                <a :href="href" @click="navigate" :class="[isActive ? 'text-tapa-500 border-b-2 border-tapa-500' : '']" class="font-bold hover:text-tapa-500 p-5 border-b-2 border-transparent hover:border-b-2 hover:border-tapa-500 cursor-pointer">
                    Contact
                </a>
            </router-link>
    
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>