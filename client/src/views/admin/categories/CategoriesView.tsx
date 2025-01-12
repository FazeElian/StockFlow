import { Link } from "react-router-dom";

// Styles
import "../../../assets/css/components/admin/modules/Tables.css";
import "../../../assets/css/views/admin/CategoriesView.css";

// Components for this view
import { TitleView } from "../../../components/admin/TitleView";
import { TopSearchBar } from "../../../components/admin/TopSearchBar";

// React icons
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const CategoriesView = () => {
    return (
        <main className="content-page--admin font-inter">
            <TitleView name="Categories view" />
            <TopSearchBar
                searchPlaceholder="Search category"
                exportText="Categories"
                newText="Category"
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
                        <td className="td td-name-category">Category 1</td>
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

export default CategoriesView