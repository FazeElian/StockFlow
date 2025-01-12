// Styles for this component
import "../../assets/css/components/admin/modules/TitleView.css";

interface TitleViewProps {
    name: string
}

// Functional component -> React.FC
const TitleView : React.FC<TitleViewProps> = (props) => {
    return (
        <div className="title-view">
            {props.name}
        </div>
    )
}

export { TitleView };