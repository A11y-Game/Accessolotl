<script>
export default {
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
			levelCount: 1
		}
	},
	methods: {
		toggleTheme() {
			if (localStorage.getItem('color-theme')) {
				if (localStorage.getItem('color-theme') === 'light') {
					document.documentElement.classList.add('dark');
					localStorage.setItem('color-theme', 'dark');
				} else {
					document.documentElement.classList.remove('dark');
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
		incrementLevel() {
			this.levelNumber++;
		},
		decrementLevel() {
			this.levelNumber--;
		}
	},
	computed: {
		prevLevel() {
			return parseInt(this.levelNumber) - 1 + "";
		},
		nextLevel() {
			return parseInt(this.levelNumber) + 1 + "";
		},
		levelNumber() {
			return useRoute().fullPath.split('/')[2] ?? 0;
		}
	}
};
</script>

<template>
	<div class="flex flex-col dark:bg-bg-blue-1-dark bg-bg-blue-1-light h-screen">
		<header class="flex justify-between w-11/12 h-20 mt-6 mx-auto mb-6 items-center">
			<div class="pr-9 flex items-center">
				<picture class="h-11 dark:hidden">
					<source srcset="~\assets\img\icons\light\accessolotllogo-light.svg">
					<img src="assets\img\icons\light\accessolotllogo-light.png">
				</picture>
				<picture class="h-11 hidden dark:block">
					<source srcset="assets\img\icons\dark\accessolotllogo-dark.svg">
					<img src="assets\img\icons\dark\accessolotllogo-dark.png">
				</picture>
			</div>
			<div class="flex grow items-center dark:bg-blue-2-dark bg-blue-2-light h-16 rounded-2xl">
				<button type="button" class=" ml-12 invisible">
					<Icon name="material-symbols:wb-sunny-outline" class="text-4xl" />
				</button>
				<nav class="flex justify-center items-center align-center flex-grow gap-2">
					<NuxtLink :to="prevLevel" @click="decrementLevel()">
						<Icon name="material-symbols:arrow-back-ios-rounded"
							class="dark:text-text-dark text-text-light text-2xl" />
					</NuxtLink>
					<span class="text-2xl dark:text-text-dark text-text-light">Level {{ levelNumber }} of {{ levelCount
						}}</span>
					<NuxtLink :to="nextLevel" @click="incrementLevel()">
						<Icon name="material-symbols:arrow-forward-ios-rounded"
							class="dark:text-text-dark text-text-light text-2xl" />
					</NuxtLink>
				</nav>
				<button type="button" class="ml-auto mr-16" @click="toggleTheme()">
					<div class="dark:hidden">
						<Icon name="material-symbols:dark-mode-outline" class="text-text-light text-4xl" />
					</div>
					<div class=" hidden dark:block">
						<Icon name="material-symbols:wb-sunny-outline" class="text-text-dark text-4xl" />
					</div>
				</button>
			</div>

			<div class="flex justify-between items-center ml-12">
				<NuxtLink to="about" class="font-heading dark:text-text-dark text-text-light underline text-2xl">About us</NuxtLink>
				&nbsp;
				<a href="https://github.com/A11y-Game/A11y-Game">
					<Icon name="mdi:github" class="dark:text-text-dark text-text-light text-3xl" />
				</a>
			</div>
		</header>
		<main class="h-0 flex-1 text-text-light dark:text-text-dark">
			<NuxtPage />
		</main>
	</div>
</template>
