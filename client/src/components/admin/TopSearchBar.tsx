import { Link } from "react-router-dom";

// Styles for this component
import "../../assets/css/components/admin/modules/TopSearchBar.css";

// React icons
import { IoSearchSharp, IoAddCircleOutline } from "react-icons/io5";
import { TiExportOutline } from "react-icons/ti";
import { RiListSettingsLine } from "react-icons/ri";

interface TopSearchBarProps {
    searchPlaceholder: string,
    exportText: string,
    newText: string
}

const TopSearchBar: React.FC<TopSearchBarProps> = (props) => {
    return (
        <div className="top-search-bar">
            <div className="search">
                <button className="btn-filter">
                    <RiListSettingsLine />
                </button>
                <div className="search-bar">
                    <IoSearchSharp />
                    <input
                        className="font-inter"
                        type="text"
                        name="search"
                        id="search"
                        placeholder={props.searchPlaceholder}
                    />
                </div>
            </div>
            <div className="module-options">
                <button className="btn-module-options btn-export font-inter">
                    <TiExportOutline />
                    Export <h2>{props.exportText}</h2>
                </button>
                <Link to="new" className="btn-module-options btn-new font-inter">
                    <IoAddCircleOutline />
                    Add <h2>{props.newText}</h2>
                </Link>
            </div>
        </div>
    )
}

export { TopSearchBar };