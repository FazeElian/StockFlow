import { Link } from "react-router-dom";

// Styles for this component
import "../../assets/css/components/admin/modules/BottomModuleForm.css";

interface BottomModuleFormProps {
    hrefCancelBtn: string,
    txtBtnSubmit: string
}

const BottomModuleForm : React.FC<BottomModuleFormProps> = (props) =>{
    return (
        <div className="btm-module-form">
            <Link to={props.hrefCancelBtn} className="btn-module-form btn-cancel-module-form font-inter">
                Cancel
            </Link>
            <button className="btn-module-form btn-submit-module-form font-inter" type="submit">
                {props.txtBtnSubmit}
            </button>
        </div>
    )
}

export { BottomModuleForm };