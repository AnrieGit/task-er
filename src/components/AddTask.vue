<template>
    <form @submit.prevent="onSubmit">
        <div class="block w-full flex justify-center bg-white p-5 pt-0 sm:pt-5">
            <div class="w-full space-y-4">
                <div>
                    <label for="task" class="block text-sm font-medium text-gray-600">Task</label>
                    <input v-model="task" :disabled="loading" type="text" name="task" id="task" autocomplete="task" class="mt-1 focus:ring-tapa-500 focus:border-tapa-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="date" class="block text-sm font-medium text-gray-600">Day and Time</label>
                    <input v-model="date" :disabled="loading" type="text" name="date" id="date" autocomplete="date" class="mt-1 focus:ring-tapa-500 focus:border-tapa-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input v-model="reminder" :disabled="loading" id="reminder" name="reminder" type="checkbox" class="focus:ring-tapa-500 h-4 w-4 text-tapa-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="reminder" class="font-medium text-gray-600">Reminder</label>
                    </div>
                </div>
                <Button :loading="loading" type="submit" title="Save" class="w-full block"/>
            </div>
        </div>
    </form>
</template>

<script>
    import Button from './Button'

    export default {
        name: 'AddTask',
        props: {
            show: Boolean,
        },
        components: {
            Button,
        },
        data() {
            return {
                task: '',
                date: '',
                reminder: false,
                loading: false,
            }
        },
        methods: {
            async onSubmit() {
                this.loading = true;

                if(!this.task) {
                    const message = 'Task field cant be empty.'
                    this.$emit('show-alert', message)
                    this.loading = false;
                    
                    return
                }

                const data = {
                    task: this.task,
                    date: this.date,
                    reminder: this.reminder,
                }

                const res = await fetch('api/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })

                const newTask = await res.json()

                this.$emit('add-task', newTask)

                this.task = ''
                this.date = ''
                this.reminder = false
                this.loading = false
            }
        }
    }
</script>