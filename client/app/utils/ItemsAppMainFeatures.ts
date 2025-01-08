// Images - Icons
    // Dashboard
    import { MdOutlineDashboard as DashboardIcon } from "react-icons/md";

    // Products
    import { BsBoxSeam as ProductsIcon } from "react-icons/bs";

    // Categories
    import { TbCategory as CategoriesIcon } from "react-icons/tb";

    // Invoices
    import { LiaFileInvoiceSolid as InvoicesIcon } from "react-icons/lia";

    // Sales
    import { IoCartOutline as SalesIcon } from "react-icons/io5";

    // Customers
    import { BsPeople as CustomersIcon } from "react-icons/bs";

// Interface - template
interface ItemMainFeatures {
    id: number,
    imgSrc: React.ComponentType,
    title: string,
    description: string
}

const ItemsMainFeatures: ItemMainFeatures[] = [
    {
        id: 1,
        imgSrc: DashboardIcon,
        title: "Dashboard",
        description: "Get an overview of your business with statistics, detailed analysis, and custom reports, all in one place.",
    },
    {
        id: 2,
        imgSrc: ProductsIcon,
        title: "Products",
        description: "Manage your stock accurately, avoid shortages and organize products with details such as code, name, category and price.",
    },
    {
        id: 3,
        imgSrc: CategoriesIcon,
        title: "Categories",
        description: "Sort and organize your products by category to facilitate navigation and management of your inventory, making it more efficient.",
    },
    {
        id: 4,
        imgSrc: InvoicesIcon,
        title: "Invoicing",
        description: "Create, edit and organize invoices with clear data, integrating customers, products and totals automatically.",
    },
    {
        id: 5,
        imgSrc: SalesIcon,
        title: "Sales",
        description: "Register, monitor and analyze your sales intuitively, ensuring you maximize your revenue and satisfy your customers.",
    },
    {
        id: 6,
        imgSrc: CustomersIcon,
        title: "Customers",
        description: "Manage your customer information efficiently: store key data, link it to your sales and identify purchasing patterns.",
    },
];

export default ItemsMainFeatures;