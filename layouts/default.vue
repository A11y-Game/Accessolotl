<script>
import { useProgressStore } from '../stores/ProgressStore';
import { mapStores } from 'pinia';
import { useThemeChanger } from '~/composables/themeChanger';

export default {
	mounted() {
		if (!this.themeInitialized()) {
			this.initialize();
		}

		this.initialize();
		if (!this.progressStore.initialized) {
			this.progressStore.init();
		}

		if (!this.progressStore.accessGranted(this.progressStore.currentLevel)) {
			this.progressStore.jumpToLevel(this.progressStore.progress + 1, this.$router);
		}
	},

	computed: {
		...mapStores(useProgressStore),
	},
	methods: {
		...useThemeChanger(),
		resetProgress() {
			this.progressStore.clearProgress();
			this.progressStore.jumpToLevel(1, this.$router);
		},

	},
};
</script>

<template>
	<div class="flex flex-col dark:bg-blue-1-dark bg-blue-1-light h-screen">
		<header class="flex justify-between w-11/12 h-20 mt-6 mx-auto mb-6 items-center">
			<div class="pr-9 flex items-center">
				<NuxtLink to="/">
					<picture class="h-11 dark:hidden">
						<source srcset="~\assets\img\icons\light\accessolotllogo-light.svg">
						<img src="assets\img\icons\light\accessolotllogo-light.png">
					</picture>
					<picture class="h-11 hidden dark:block">
						<source srcset="assets\img\icons\dark\accessolotllogo-dark.svg">
						<img src="assets\img\icons\dark\accessolotllogo-dark.png">
					</picture>
				</NuxtLink>
			</div>
			<div class="flex grow items-center dark:bg-blue-2-dark bg-blue-2-light h-16 rounded-2xl">
				<button type="button" class=" ml-12 invisible">
					<Icon name="material-symbols:wb-sunny-outline" class="text-4xl" />
				</button>
				<nav class="flex justify-center items-center align-center flex-grow gap-2">
					<NuxtLink :to="progressStore.prevLevelString" @click="progressStore.decrementLevel">
						<Icon name="material-symbols:arrow-back-ios-rounded"
							class="dark:text-text-dark text-text-light text-2xl" />
					</NuxtLink>
					<span class="text-2xl dark:text-text-dark text-text-light">Level {{ progressStore.currentLevel
						}} of {{
						progressStore.levelCount
					}}</span>
					<NuxtLink :to="progressStore.nextLevelString" @click="progressStore.incrementLevel">
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
				<NuxtLink to="about" class="font-heading dark:text-text-dark text-text-light underline text-2xl">
					About
					us</NuxtLink>
				&nbsp;
				<a href="https://github.com/A11y-Game/A11y-Game">
					<Icon name="mdi:github" class="dark:text-text-dark text-text-light text-3xl" />
				</a>
			</div>
		</header>
		<main class="h-0 flex-1 text-text-light dark:text-text-dark">
			<slot />
		</main>
		<footer class="flex justify-center pb-2">
			<button type="button" @click="resetProgress">Reset progress</button>
		</footer>
	</div>
</template>
