import {
	Box,
	Button,
	Divider,
	Flex,
	IconButton,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { TbPlus, TbMinus } from "react-icons/tb";

type Props = {};
const price=387;
const CartItem = (props: Props) => {
	const [count, setCount] = useState(1);
    const [totalPrice,setTotalPrice] = useState(price)
    useEffect(()=>{
        setTotalPrice(count*price)
    },[count])
	return (
		<Stack
			spacing={0}
			w="100%"
			bgColor={"white"}
			boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
			borderRadius={"0.5rem"}>
			{/* Box - 1 */}
			<Flex p="1rem" justifyContent={"space-between"}>
				<Flex gap="1rem">
					<Image
						w={"7rem"}
						h={"7rem"}
                        borderRadius="0.5rem"
                        objectFit={"cover"}
						src="https://images.meesho.com/images/products/19519349/3acaf_512.jpg"
						alt="image"
					/>
					<Stack>
						<Text fontWeight={"600"} fontSize="1.1rem">
							Unique Men Watches
						</Text>
						<Text>Size: Free Size</Text>

						<Text>₹ {price}</Text>
					</Stack>
				</Flex>

				{/* Box - 2 */}

				<Stack h="100%" spacing={4}>
					<Button
						w="100%"
						textAlign={"center"}
						color="blackAlpha.500"
						variant="outline">
						Quantity
					</Button>

					<Flex alignItems={"center"} gap="1rem">
						<IconButton
							isDisabled={count === 1}
							onClick={() => setCount(count - 1)}
							borderRadius={"50%"}
							variant="outline"
							size="sm"
							aria-label="Search database"
							icon={<TbMinus />}
						/>
						<Text color="blackAlpha.500" fontWeight={"600"} fontSize="1.1rem">
							{count}
						</Text>
						<IconButton
							onClick={() => setCount(count + 1)}
							borderRadius={"50%"}
							size="sm"
							variant="outline"
							aria-label="Search database"
							icon={<TbPlus />}
						/>
					</Flex>
					<Button
						leftIcon={<FaTrash />}
						variant="solid"
						colorScheme={"teal"}>
						Remove
					</Button>
				</Stack>
			</Flex>
			<Divider borderColor={"rgba(0,0,0,0.1)"} />
			<Flex p="1rem" justifyContent={"space-between"}>
				<Text>Supplier : {"seller Name"}</Text>
				<Text>Total Price : ₹ {totalPrice}</Text>
			</Flex>
		</Stack>
	);
};

export default CartItem;
