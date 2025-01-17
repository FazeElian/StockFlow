import { TbEdit } from "react-icons/tb";
import { TitleView } from "../../../components/admin/TitleView";
import { TopSearchBar } from "../../../components/admin/TopSearchBar";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CustomersView = () => {
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
                    <tr className="tbody tbody-categories">
                        <td className="td td-no-category">1</td>
                        <td className="td td-name-category">Customer 1</td>
                        <td className="td td-description-category color-gray">
                            No description
                        </td>
                        <td className="td td-options td-options-category">
                            <Link to="edit/:id" className="btn-td btn-td-edit">
                                <TbEdit />
                            </Link>
                            <button className="btn-td btn-td-delete">
                                <MdDelete />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default CustomersView