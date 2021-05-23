<template>
    <transition name="switch" mode="out-in">
        <div v-if="loading">
            <transition-group tag="ul" name="list" appear class="border-t border-gray-200 divide-y divide-gray-200 relative p-0">
                <li v-for="task in tasks" :key="task.id" class="block w-full list-none">
                    <Task
                        @toggle-reminder="$emit('toggle-reminder', task.id)" 
                        @delete-task="$emit('delete-task', task.id)" 
                        :task="task"
                    />
                </li>
            </transition-group>
        </div>
        <div v-else class="text-center p-5 text-tapa-500 font-bold">
            Loading...
        </div>
    </transition>
</template>

<script>
    import Task from './Task'

    export default {
        name: 'Tasks',
        props: {
            tasks: Array,
            loading: Boolean,
        },
        emits: [
            'delete-task',
            'toggle-reminder'
        ],
        components: {
            Task
        }
    }
</script>

<style scoped>
.list-enter-from {
    opacity: 0;
    transform: scale(0.6)
}
.list-enter-to {
    opacity: 1;
    transform: scale(1)
}
.list-enter-active {
    transition: all 0.4s ease;
}

.list-leave-from {
    opacity: 1;
    transform: scale(1)
}
.list-leave-to {
    opacity: 0;
    transform: scale(0.6)
}
.list-leave-active {
    transition: all 0.4s ease;
    position: absolute;
}
.list-move {
    transition: all 0.3s ease;
}

.switch-enter-from,
.switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
.switch-enter-to,
.switch-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.switch-enter-active {
    transition: all 0.4s ease;
}
.switch-leave-active {
    transition: all 0.4s ease;
}
</style>