<template>
    <div>
        <Header title="Task Tracker"/>
        <AddTask @show-alert="$emit('show-alert')" @add-task="addTask"/>
        <Tasks :loading="loading" @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
    </div>   
</template>

<script>
    import { ref } from 'vue'
    import Header from '../components/Header'
    import AddTask from '../components/AddTask'
    import Tasks from '../components/Tasks'

    export default {
        name: 'Home',
        components: {
            Header,
            AddTask,
            Tasks
        },
        emits: [
            'show-alert',
        ],
        setup() {
            let tasks = ref([])
            const loading = ref(false)

            return {
                tasks,
                loading
            }
        },
        async created() {
            this.tasks = await this.fetchTasks()
            this.loading = true
        },
        methods: {
            async fetchTasks() {
                const res = await fetch('api/tasks?_sort=id&_order=desc')
                const data = await res.json()

                return data
            },
            async fetchTask(id) {
                const res = await fetch(`api/tasks/${id}`)
                const data = await res.json()

                return data
            },
            addTask(newTask) {
                this.tasks = [newTask, ...this.tasks]
            },
            async deleteTask(id) {
                if(confirm('Are you sure you want to delete this task?')) {
                    const res = await fetch(`api/tasks/${id}`, {
                        method: 'DELETE'
                    })

                    res.status === 200 
                        ? this.tasks = this.tasks.filter((task) => task.id !== id)
                        : alert('Oops! There is something wrong.')
                }
            },
            async toggleReminder(id) {
                const fetchTask = await this.fetchTask(id)
                const updateTask = {...fetchTask, reminder: !fetchTask.reminder}

                const res = await fetch(`api/tasks/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(updateTask)
                })

                const data = await res.json()

                this.tasks = this.tasks.map(
                    (task) => task.id === id
                        ? {...task, reminder: data.reminder}
                        : task
                )
            },
        }
    }
</script>