<script>
export default {
	setup() {
		definePageMeta({
			middleware: [
				function (to, from) {
					if (to.params.id === 'levels/0') {
						abortNavigation();
						console.log('Test');
					}
					this.levelNumber = useRoute().fullPath.split('/')[2]
				}
			],
		});
	},
	mounted() {
		if (localStorage.getItem('color-theme') === 'dark' ||
			(!('color-theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}		
	},
	data() {
		return {
			levelNumber: this.levelNumber = useRoute().fullPath.split('/')[2],
			levelCount: 20
		}
	},
	methods: {
		toggleTheme() {
			if (localStorage.getItem('color-theme')) {
				if (localStorage.getItem('color-theme') === 'light') {
					document.documentElement.classList.add('dark');
					document.querySelectorAll('NuxtLink').forEach((el) => el.classList.add('dark'));
					localStorage.setItem('color-theme', 'dark');
				} else {
					document.documentElement.classList.remove('dark');
					document.querySelectorAll('NuxtLink').forEach((el) => el.classList.remove('dark'));
					localStorage.setItem('color-theme', 'light');
				}

			} else {
				if (document.documentElement.classList.contains('dark')) {
					document.documentElement.classList.remove('dark');
					localStorage.setItem('color-theme', 'light');
				} else {
					document.documentElement.classList.add('dark');
					localStorage.setItem('color-theme', 'dark');
				}
			}
		},
	},
};
</script>

<template>
	<div class="flex flex-col dark:bg-bg-dark bg-bg-light h-screen">
		<header class="flex justify-between w-11/12 h-20 mt-6 mx-auto mb-6 items-center">
			<div class="pr-9 flex items-center">
				<img src="~/assets/img/accessolotl.svg" onerror="this.src='~/assets/img/accessolotl.png'"
					class="h-11 dark:hidden">
				<img src="~/assets/img/icons/dark/accessolotllogo-dark.svg"
					onerror="this.src='~/assets/img/icons/dark/accessolotllogo-dark.png'"
					class="h-11 hidden dark:block">
			</div>
			<div class="flex grow items-center dark:bg-levelbar-dark bg-levelbar-light h-16 rounded-2xl">
				<button type="button" class=" ml-12 invisible">
					<Icon name="material-symbols:wb-sunny-outline" class="text-4xl" />
				</button>
				<nav class="flex justify-center items-center align-center flex-grow">
					<NuxtLink :to="`${parseInt(levelNumber) - 1}`" @click="levelNumber--" class="mr-2">
						<Icon name="material-symbols:arrow-back-ios-rounded"
							class="dark:text-t-dark text-t-light text-2xl" />
					</NuxtLink>
					<span class="text-2xl dark:text-t-dark text-t-light">Level {{ levelNumber }} of {{ levelCount
						}}</span>
					<NuxtLink :to="`${parseInt(levelNumber) + 1}`" @click="levelNumber++" class="ml-2">
						<Icon name="material-symbols:arrow-forward-ios-rounded"
							class="dark:text-t-dark text-t-light text-2xl" />
					</NuxtLink>
				</nav>
				<button type="button" class="ml-auto mr-16" @click="toggleTheme()">
					<div class="dark:hidden">
						<Icon name="material-symbols:dark-mode-outline" class="text-t-light text-4xl" />
					</div>
					<div class=" hidden dark:block">
						<Icon name="material-symbols:wb-sunny-outline" class="text-t-dark text-4xl" />
					</div>
				</button>
			</div>

			<div class="flex justify-between items-center ml-12">
				<NuxtLink to="about" class="font-heading dark:text-t-dark underline text-2xl">About us</NuxtLink>
				&nbsp;
				<a href="https://github.com/A11y-Game/A11y-Game">
					<Icon name="mdi:github" class="dark:text-t-dark text-t-light text-3xl" />
				</a>
			</div>
		</header>
		<main class="h-0 flex-1 text-t-light dark:text-t-dark">
			<NuxtPage />
		</main>
	</div>
</template>
