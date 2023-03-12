export default function originalPriceBeforeDiscount(
	price: number,
	dicount: number,
) {
	/*
	 * Example:
	 * price is 54
	 * dicount is 10%
	 * it means 54 is (100% - 10%) 90% of the actual price
	 * so if we write 54*100 / 90
	 * we will easily get the original price
	 */
	const OpDiscount = 100 - dicount;
	return ((price * 100) / OpDiscount).toFixed();
}
