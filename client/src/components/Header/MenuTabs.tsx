import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const MenuTabs = (props: Props) => {
	const [tabIndex, setTabIndex] = useState(0);
	return (
		<Box w={"100%"} borderTop=".1rem solid" borderTopColor={"blackAlpha.300"}>
			<Tabs
				size={"lg"}
				index={tabIndex}
				colorScheme={"teal"}
				p={{ md: "0", xl: "0", "2xl": "0 15rem" }}
				position="relative">
				<TabList display="flex" justifyContent={"space-between"}>
					<Tab onMouseOver={() => setTabIndex(0)}>Women Ethnic</Tab>
					<Tab onMouseOver={() => setTabIndex(1)}>Women Western</Tab>
					<Tab onMouseOver={() => setTabIndex(2)}>Mens</Tab>
					<Tab onMouseOver={() => setTabIndex(3)}>Kids</Tab>
					<Tab onMouseOver={() => setTabIndex(4)}>Home & Kitchen</Tab>
					<Tab onMouseOver={() => setTabIndex(5)}>Beauty & Health</Tab>
					<Tab onMouseOver={() => setTabIndex(6)}>Jewellery & Accessories</Tab>
					<Tab onMouseOver={() => setTabIndex(7)}>Bags & Footwear</Tab>
					<Tab onMouseOver={() => setTabIndex(8)}>Electronics</Tab>
				</TabList>
				<TabPanels
					bgColor={"whiteAlpha.700"}
					onMouseLeave={() => setTabIndex(-1)}
					position="absolute">
					{/* #1  Women Ethnic*/}
					<TabPanel>
						<p>Click the tabs or pull the slider around</p>
					</TabPanel>

					{/* #2  Women Western */}
					<TabPanel>
						<p>Yeah yeah. s up?</p>
					</TabPanel>

					{/* #3  Men */}
					<TabPanel>
						<p>Oh, hello there.</p>
					</TabPanel>

					{/* #4  Kids */}
					<TabPanel>
						<p>Oh, hello there.</p>
					</TabPanel>

					{/* #5  Home & Kitchen */}
					<TabPanel>
						<p>Oh, hello there.</p>
					</TabPanel>

					{/* #6 Beauty & Health */}
					<TabPanel>
						<p>Oh, hello there.</p>
					</TabPanel>

					{/* #7  Jewellery & Accessories */}
					<TabPanel>
						<p>Oh, hello there.</p>
					</TabPanel>

					{/* #8  Bags & Footwear */}
					<TabPanel>
						<p>Oh, hello there.</p>
					</TabPanel>

					{/* #9  Electronics */}
					<TabPanel>
						<p>Oh, hello there.</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default MenuTabs;
