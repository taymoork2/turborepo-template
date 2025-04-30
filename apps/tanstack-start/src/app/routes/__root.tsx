import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { DefaultCatchBoundary } from "#src/components/default-catch-boundary";
import { NotFound } from "#src/components/not-found";
import { ThemeProvider, useTheme } from "#src/components/theme-provider";
import { seo } from "#src/utils/seo";
import { getThemeServerFn } from "#src/utils/theme";

import appCss from "@repo/design-system/shadcn.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			...seo({
				title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
				description: "TanStack Start is a type-safe, client-first, full-stack React framework. ",
			}),
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{ rel: "icon", href: "/favicon.ico" },
		],
	}),
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
	notFoundComponent: () => <NotFound />,
	component: RootComponent,
	loader: () => getThemeServerFn(),
});

function RootComponent() {
	const data = Route.useLoaderData();

	return (
		<ThemeProvider theme={data}>
			<RootDocument>
				<Outlet />
			</RootDocument>
		</ThemeProvider>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	const { theme } = useTheme();

	return (
		<html lang="en" className={theme} suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="font-regular antialiased tracking-wide">
				{children}
				<Scripts />
			</body>
		</html>
	);
}
