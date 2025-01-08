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
interface ItemTopBannerServices {
    id: number,
    imgSrc: React.ComponentType,
    delay: number,
    title: string,
    class: string
}

const ItemsTopBannerServices: ItemTopBannerServices[] = [
    {
        id: 1,
        imgSrc: DashboardIcon,
        delay: 0,
        title: "Dashboard",
        class: "bg-blue circle-dashboard-btm-banner-services",
    },
    {
        id: 2,
        imgSrc: ProductsIcon,
        delay: .20,
        title: "Products",
        class: "bg-green circle-products-btm-banner-services",
    },
    {
        id: 3,
        imgSrc: CategoriesIcon,
        delay: .40,
        title: "Categories",
        class: "bg-brown circle-categories-btm-banner-services",
    },
    {
        id: 4,
        imgSrc: InvoicesIcon,
        delay: .60,
        title: "Invoicing",
        class: "bg-red circle-invoices-btm-banner-services",
    },
    {
        id: 5,
        imgSrc: SalesIcon,
        delay: .80,
        title: "Sales",
        class: "bg-purple circle-sales-btm-banner-services",
    },
    {
        id: 6,
        imgSrc: CustomersIcon,
        delay: 1,
        title: "Customers",
        class: "bg-pink circle-customers-btm-banner-services",
    },
];

export default ItemsTopBannerServices;