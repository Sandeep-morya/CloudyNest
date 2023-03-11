import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CookiesProvider>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</CookiesProvider>
	);
}
