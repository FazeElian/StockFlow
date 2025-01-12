import { Link, useLocation } from "react-router-dom";

// Styles for this component
import "../../assets/css/components/admin/SideBar.css";

// Images - icons
import Logo from "../../assets/img/Logo.png";

// React icons
import { MdOutlineDashboard } from "react-icons/md";
import { BiShoppingBag, BiCategory } from "react-icons/bi";
import { TbCashRegister } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const SideBar = () => {
    const location = useLocation();

    return (
        <aside className="side-bar font-inter">
            <div className="top-side-bar">
                <img src={Logo} alt="" />
            </div>
            <nav className="nav-side-bar">
                <Link
                    to="/admin/home"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/home" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <MdOutlineDashboard />
                    <h2>Dashboard</h2>
                </Link>
                <Link
                    to="/admin/products"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/products" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <BiShoppingBag />
                    <h2>Products</h2>
                </Link>
                <Link
                    to="/admin/categories"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/categories" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <BiCategory />
                    <h2>Categories</h2>
                </Link>
                <Link
                    to="/admin/invoices"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/invoices" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <LiaFileInvoiceSolid />
                    <h2>Invoices</h2>
                </Link>
                <Link
                    to="/admin/sales"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/sales" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <TbCashRegister />
                    <h2>Sales</h2>
                </Link>
                <Link
                    to="/admin/customers"
                    className={`item-nav-side-bar
                        ${location.pathname === "/admin/customers" ? "item-selected-nav-side-bar" : ""}
                    `}
                >
                    <IoPeopleOutline />
                    <h2>Customers</h2>
                </Link>
            </nav>
        </aside>
    )
}

export { SideBar };