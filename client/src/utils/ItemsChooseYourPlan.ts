interface ItemChooseYourPlan {
    id: number,
    title: string,
    duration: string,
    price: string,
} 

const ItemsChooseYourPlan: ItemChooseYourPlan[] = [
    {
        id: 1,
        title: "Monthly Plan",
        duration: "1 Month",
        price: "14.99",
    },
    {
        id: 2,
        title: "Semi-Annual Plan",
        duration: "6 Months",
        price: "59.99",
    },
    {
        id: 3,
        title: "Annual Plan",
        duration: "12 Months",
        price: "129.999",
    },
];

export default ItemsChooseYourPlan;