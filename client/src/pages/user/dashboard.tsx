import Head from "next/head";
import React from "react";

type Props = {};

const UserDashboard = (props: Props) => {
	return (
		<>
			<Head>
				<title>CloudyNest - Shopping</title>
				<meta
					name="description"
					content="CloudyNest - An Online Shopping Website"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/CloudyNest-Logo-Image.png" />
			</Head>
			<main></main>
		</>
	);
};

export default UserDashboard;
