import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const getAbsolutePath = (packageName: string) =>
	dirname(import.meta.resolve(join(packageName, "package.json"))).replace(/^file:\/\//, "");

const config: StorybookConfig = {
	stories: ["../../../packages/design-system/@(stories|src)/**/*.stories.@(ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-a11y"),
		getAbsolutePath("@storybook/addon-docs"),
		getAbsolutePath("@storybook/addon-vitest"),
	],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},
};

export default config;
