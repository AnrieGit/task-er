<template>
    <div class="flex justify-between items-center bg-white p-5">
        <div @click="$emit('toggle-reminder', task.id)" class="flex items-center text-sm font-medium text-gray-500 cursor-pointer">
            <CheckIcon v-if="task.reminder" classes="h-5 w-5 text-green-500"/>
            <MinusIcon v-else classes="h-5 w-5 text-gray-500"/>
            <div class="ml-3">
                {{ task.task }}
                <p class="text-xs text-gray-400 font-light">{{ task.date }}</p>
            </div>
        </div>

        <DeleteIcon @click="$emit('delete-task', task.id)" classes="h-5 w-5 text-gray-500 hover:text-red-500 transform hover:scale-110 cursor-pointer"/>
    </div>
</template>

<script>
    import CheckIcon from './icons/CheckIcon'
    import MinusIcon from './icons/MinusIcon'
    import DeleteIcon from './icons/DeleteIcon'

    export default {
        name: 'Task',
        props: {
            task: Object,
        },
        components: {
            CheckIcon,
            MinusIcon,
            DeleteIcon
        }
    }
</script>