import useDebounce from "@/hooks/useDebounce";
import useThrottle from "@/hooks/useThrottle";
import { FinalProductType } from "@/Types";
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
import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { TbPlus, TbMinus } from "react-icons/tb";

type Props = {
	id: string;
	initialCount: number;
	deleteCartItem: (id: string) => Promise<void>;
	updateCartItem: (id: string, count: number) => Promise<void>;
	handleCartAmount: (p: number) => void;
};

const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const CartItem = ({
	id,
	initialCount,
	deleteCartItem,
	handleCartAmount,
	updateCartItem,
}: Props) => {
	const [count, setCount] = useState(initialCount);
	const [product, setProduct] = useState({} as FinalProductType);

	const debouncedValue = useDebounce(count, 1000);

	useEffect(() => {
		updateCartItem(id, debouncedValue);
	}, [debouncedValue, id, updateCartItem]);

	const getProduct = useCallback(
		async function () {
			try {
				const { data }: AxiosResponse<FinalProductType, any> = await axios.get(
					`${base_url}/product/${id}`,
				);
				setProduct(data);
			} catch (error) {
				console.log(error);
			}
		},
		[id],
	);

	useEffect(() => {
		getProduct();
	}, [getProduct]);

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
						src={product.thumbnail}
						alt={product.title}
					/>
					<Stack>
						<Text fontWeight={"600"} fontSize="1.1rem">
							{product.title}
						</Text>
						<Text>Size: Free Size</Text>

						<Text>₹ {product.price}</Text>
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
							onClick={() => {
								setCount(count - 1);
							}}
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
							onClick={() => {
								setCount(count + 1);
							}}
							borderRadius={"50%"}
							size="sm"
							variant="outline"
							aria-label="Search database"
							icon={<TbPlus />}
						/>
					</Flex>
					<Button
						onClick={() => {
							deleteCartItem(product._id);
						}}
						leftIcon={<FaTrash />}
						variant="solid"
						colorScheme={"teal"}>
						Remove
					</Button>
				</Stack>
			</Flex>
			<Divider borderColor={"rgba(0,0,0,0.1)"} />
			<Flex p="1rem" justifyContent={"space-between"}>
				<Text>Brand : {product.brand}</Text>
				<Text>Total Price : ₹ {count * product.price}</Text>
			</Flex>
		</Stack>
	);
};

export default CartItem;
