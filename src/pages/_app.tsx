import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Router from "next/router";
import { useEffect, useState } from "react";
import NProgress from "nprogress"

export default function App({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = () => {
			NProgress.start()
			setLoading(true);
		};

		const handleComplete = () => {
			NProgress.done()
			setLoading(false);
		};

		// Add event listeners
		Router.events.on("routeChangeStart", handleStart);
		Router.events.on("routeChangeComplete", handleComplete);
		Router.events.on("routeChangeError", handleComplete);

		// Clean up event listeners
		return () => {
			Router.events.off("routeChangeStart", handleStart);
			Router.events.off("routeChangeComplete", handleComplete);
			Router.events.off("routeChangeError", handleComplete);
		};
	}, []);

	return (
		<ChakraProvider>
			<Layout>
				{loading && <Loader />}

				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}
