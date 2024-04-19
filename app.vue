<script>
export default {
	mounted() {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	},
	data() {
		return {
			theme: localStorage.theme || 'light'
		}
	},
	methods: {
		toggleTheme() {
			console.log("test");
			if (this.theme === 'light') {
				document.documentElement.classList.add('dark')
				this.theme = 'dark';
				localStorage.theme = 'dark';
			} else {
				document.documentElement.classList.remove('dark')
				this.theme = 'light';
				localStorage.theme = 'light';
			}
		}
	}
};
</script>

<template>
	<div class="h-full flex flex-col dark:bg-bg-dark bg-bg-light">
		<header class="flex justify-between w-11/12 h-20 mt-16 mx-auto mb-6 items-center">
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
					<NuxtLink to="" class="mr-2">
						<Icon name="material-symbols:arrow-back-ios-rounded"
							class="dark:text-t-dark text-t-light text-2xl" />
					</NuxtLink>
					<span class="text-2xl dark:text-t-dark text-t-light">Level 1 of 3</span>
					<NuxtLink to="" class="ml-2">
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
