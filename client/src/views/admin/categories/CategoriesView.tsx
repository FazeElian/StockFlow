import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Styles
import "../../../assets/css/components/admin/modules/Tables.css";
import "../../../assets/css/views/admin/CategoriesView.css";

// Components for this view
import { TitleView } from "../../../components/admin/TitleView";
import { TopSearchBar } from "../../../components/admin/TopSearchBar";

// React icons
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

// Function from API Call
import { deleteCategory, getAllCategories } from "../../../api/category";

// Type
import { Category } from "../../../types/category";

const CategoriesView = () => {
    const { data: categories, isLoading } = useQuery({
        queryFn: getAllCategories,
        queryKey: ["categories"],
        retry: 1,
        refetchOnWindowFocus: false,
        gcTime: 30 * 10000,
        refetchInterval: 2 * 1000,
    });

    if (isLoading) return <h1>Loading....</h1>;

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
                    {categories && categories?.length > 0 ? (
                        categories.map((category: Category, i: number) => (
                            <tr className="tbody tbody-categories" key={category.id}>
                                <td className="td td-no-category">{i + 1}</td>
                                <td className="td td-name-category">{category.name}</td>
                                {category.description ? (
                                    <td className="td td-description-category">
                                        {category.description}
                                    </td>
                                ) : (
                                    <td className="td td-description-category color-gray">
                                        No description
                                    </td>
                                )}
                                <td className="td td-options td-options-category">
                                    <Link to={`edit/${category.id}`} className="btn-td btn-td-edit">
                                        <TbEdit />
                                    </Link>
                                    <button onClick={() => deleteCategory(category.id)} className="btn-td btn-td-delete">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="tbody tbody-categories">
                            <td className="td td-none">No Categories Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}

export default CategoriesView