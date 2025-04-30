import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "#src/components/providers";

import "@repo/design-system/shadcn.css";

const fontSans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
