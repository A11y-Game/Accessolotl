<script>
import { useProgressStore } from '../stores/ProgressStore';
import { mapStores } from 'pinia';
import { useThemeChanger } from '~/composables/themeChanger';

export default {
	mounted() {
		this.initialize();
		if (!this.progressStore.initialized) {
			this.progressStore.init();
		}
	},
	methods: {
		...useThemeChanger(),
	},
	setup() {
		definePageMeta({
			layout: false,
		});
	},
	computed: {
		...mapStores(useProgressStore),
	},
};
</script>

<template>
	<div class="homepage-gradient flex h-screen flex-col overflow-scroll p-16">
		<header class="flex place-content-between items-center">
			<picture class="h-11 dark:hidden">
				<source srcset="~\assets\img\icons\light\accessolotllogo-light.svg" />
				<img src="assets\img\icons\light\accessolotllogo-light.png" />
			</picture>
			<picture class="hidden h-11 dark:block">
				<source srcset="assets\img\icons\dark\accessolotllogo-dark.svg" />
				<img src="assets\img\icons\dark\accessolotllogo-dark.png" />
			</picture>
			<button type="button" class="ml-auto mr-8" @click="toggleTheme()">
				<div class="dark:hidden">
					<Icon name="material-symbols:dark-mode-outline" class="text-4xl text-text-light" />
				</div>
				<div class="hidden dark:block">
					<Icon name="material-symbols:wb-sunny-outline" class="text-4xl text-text-dark" />
				</div>
			</button>
			<button @click="progressStore.jumpToLevel(progressStore.currentLevel, $router)"
				class="flex h-11 w-64 items-center justify-center rounded-2xl bg-button-active p-1 font-heading text-2xl font-semibold">
				Play
			</button>
		</header>



		<div class="mt-32 flex-1 justify-center text-center text-6xl">
			<p class="font-heading">Welcome to</p>
			<div class="mb-8 mt-12 flex justify-center">
				<picture class="h-36 dark:hidden">
					<source srcset="~\assets\img\icons\light\accessolotllogo-light.svg" />
					<img src="assets\img\icons\light\accessolotllogo-light.png" />
				</picture>
				<picture class="hidden h-36 dark:block">
					<source srcset="assets\img\icons\dark\homepage-accessolotllogo-dark.svg" />
					<img src="assets\img\icons\dark\homepage-accessolotllogo-dark.png" />
				</picture>
			</div>
			<p class="mb-12 text-3xl font-semibold">
				your place to learn web-accessibility
			</p>
			<div class="flex justify-center">
				<picture class="hidden h-36 dark:block">
					<source srcset="assets\img\icons\dark\homepage-arrow-accessibility-dark.svg" />
					<img src="assets\img\icons\dark\homepage-arrow-accessibility-dark.png" />
				</picture>
				<button @click="progressStore.jumpToLevel(progressStore.currentLevel, $router)"
					class="mx-48 mt-8 flex h-16 w-96 items-center justify-center rounded-2xl bg-button-active p-1 font-heading text-3xl font-semibold">
					Play
				</button>
				<picture class="hidden h-36 dark:block">
					<source srcset="assets\img\icons\dark\homepage-arrow-axolotl-dark.svg" />
					<img src="assets\img\icons\dark\homepage-arrow-axolotl-dark.png" />
				</picture>
			</div>
			<div class="row flex place-content-around font-heading">
				<p>accessibility</p>
				<p class="text-axolotl-light">axolotl</p>
			</div>
		</div>
	</div>
</template>



<style>
.homepage-gradient {
	background: linear-gradient(rgb(51, 78, 153), rgb(35, 51, 92));
}
</style>
