import { TbEdit } from "react-icons/tb";
import { TitleView } from "../../../components/admin/TitleView";
import { TopSearchBar } from "../../../components/admin/TopSearchBar";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { getAllCustomers } from "../../../api/customer";
import { useQuery } from "@tanstack/react-query";
import { Customer } from "../../../types/customer";

const CustomersView = () => {
    const { data: customers, isLoading } = useQuery({
        queryFn: getAllCustomers,
        queryKey: ["customers"],
        retry: 1,
        refetchOnWindowFocus: false,
        refetchInterval: 2 * 100,
    });

    if (isLoading) return <h1>Loading....</h1>;

    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Customers view" />
            <TopSearchBar
                searchPlaceholder="Search customer"
                exportText="Customers"
                newText="Customer"
            />
            <table className="table table-categories">
                <thead>
                    <tr className="thead-categories thead">
                        <th className="tr tr-categories tr-no-category">#</th>
                        <th className="tr tr-name-category">Name</th>
                        <th className="tr tr-description-category">Description</th>
                        <th className="tr tr-options-category">Options</th>
                    </tr>
                </thead>
                
                <tbody>
                    {customers && customers?.length > 0 ? (
                        customers.map((customer: Customer, i: number) => (
                            <tr className="tbody tbody-categories" key={customer.id}>
                                <td className="td td-no-category">{i + 1}</td>
                                <td className="td td-name-category">{customer.name}</td>
                                {customer.description ? (
                                    <td className="td td-description-category">
                                        {customer.description}
                                    </td>
                                ) : (
                                    <td className="td td-description-category color-gray">
                                        No description
                                    </td>
                                )}
                                <td className="td td-options td-options-category">
                                    <Link to="edit/:id" className="btn-td btn-td-edit">
                                        <TbEdit />
                                    </Link>
                                    <button className="btn-td btn-td-delete">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="tbody tbody-categories">
                            <td className="td td-none">No Customers Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}

export default CustomersView