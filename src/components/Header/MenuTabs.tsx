import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import TabData from "./TabData";
import { tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9 } from "./data";

const MenuTabs = () => {
	const [tabIndex, setTabIndex] = useState(10);
	return (
		<Box w={"100%"} borderTop=".1rem solid" borderTopColor={"blackAlpha.300"}>
			<Tabs
				size={"md"}
				index={tabIndex}
				colorScheme={"teal"}
				p={{ md: "0", xl: "0", "2xl": "0 15rem" }}
				position="relative">
				<TabList display="flex" justifyContent={"space-between"} p="0.5rem">
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
					bgColor={"white"}
					onMouseLeave={() => setTabIndex(-1)}
					position="absolute">
					{/* #1  Women Ethnic*/}
					<TabPanel p={0}>
						<TabData data={tab1} />
					</TabPanel>

					{/* #2  Women Western */}
					<TabPanel p={0}>
						<TabData data={tab2} />
					</TabPanel>

					{/* #3  Mens */}
					<TabPanel p={0}>
						<TabData data={tab3} />
					</TabPanel>

					{/* #4  Kids */}
					<TabPanel p={0}>
						<TabData data={tab4} />
					</TabPanel>

					{/* #5  Home & Kitchen */}
					<TabPanel p={0}>
						<TabData data={tab5} />
					</TabPanel>

					{/* #6 Beauty & Health */}
					<TabPanel p={0}>
						<TabData data={tab6} />
					</TabPanel>

					{/* #7  Jewellery & Accessories */}
					<TabPanel p={0}>
						<TabData data={tab7} />
					</TabPanel>

					{/* #8  Bags & Footwear */}
					<TabPanel p={0}>
						<TabData data={tab8} />
					</TabPanel>

					{/* #9  Electronics */}
					<TabPanel p={0}>
						<TabData data={tab9} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default MenuTabs;
