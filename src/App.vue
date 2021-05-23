<template>
	<transition name="alert">
		<Alert :show="isShowAlert" :message="message"/>
	</transition>

	<div class="flex flex-col justify-center items-center mt-10 mb-10 px-5 sm:px-0">
		<div class="w-full sm:w-1/4">
			<Nav/>
			
			<router-view @show-alert="showAlert" v-slot="{ Component }">
				<transition name="route" mode="out-in">
					<component :is="Component"></component>
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script>
import Nav from './components/Nav'
import Alert from './components/Alert'

export default {
	name: 'App',
	components: {
		Nav,
		Alert,
	},
	data() {
		return {
			isShowAlert: false,
			message: '',
		}
	},
	methods: {
		showAlert(message) {
			this.isShowAlert = true
			this.message = 'Task field cant be empty.'

			setTimeout(() => this.isShowAlert = false, 2500)
		},
	},
}
</script>

<style>
body {
	font-family: 'Quicksand', sans-serif !important;
	background-color: #c9c6c4;
	background-image: url("data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18c0-1.105.887-2 1.998-2 1.104 0 2-.895 2.002-1.994V14v6h-4v-2zM0 13.998C0 12.895.888 12 2 12c1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2 .888 2 2v2H0v-6.002zm16 4.004A1.994 1.994 0 0 1 14 20c-1.105 0-2-.887-2-1.998v-4.004A1.994 1.994 0 0 0 10 12c-1.105 0-2-.888-2-2 0-1.105-.888-2-2-2-1.105 0-2-.887-2-1.998V1.998A1.994 1.994 0 0 0 2 0a2 2 0 0 0-2 2V0h8v2c0 1.105.888 2 2 2 1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2-.888 2-2 0-1.105.888-2 2-2 1.105 0 2-.888 2-2V0h4v6.002A1.994 1.994 0 0 1 22 8c-1.105 0-2 .888-2 2 0 1.105-.888 2-2 2-1.105 0-2 .887-2 1.998v4.004z' fill='%23484441' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.task-components-enter-from,
.task-components-leave-to {
	opacity: 0;
	transform: scale(0.6);
}

.task-components-enter-active {
	transition: all 0.4s ease;
}
.task-components-leave-active {
	transition: all 0.4s ease;
}

.alert-enter-from,
.alert-leave-to {
	opacity: 0;
	transform: translateY(-100px);
}

.alert-enter-active,
.alert-leave-active {
	transition: all 0.4s ease;
}

.route-enter-from {
	opacity: 0;
	transform: translateX(100px);
}
.route-enter-active {
	transition: all 0.3s ease-out;
}
.route-leave-to {
	opacity: 0;
	transform: translateX(-100px);
}
.route-leave-active {
	transition: all 0.3s ease-in;
}
</style>
