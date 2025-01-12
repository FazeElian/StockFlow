import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";

// Function from API Call
import { getUser } from "../../api/auth";

const HeaderAdmin = () => {
    const { data, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ["user"]
    })

    const navigate = useNavigate();

    if (isLoading) {
        return (
            <h1 className="color-white">Loading</h1>
        )
    }
    
    if (isError) {
        navigate("/auth/login");
    }

    if (data) {
        return (
            <>
                <header>
                    <h1>Header Admin</h1>
                </header>
        
                <Outlet />
            </>
        )
    } else {
        navigate("/auth/login");
    }
}

export { HeaderAdmin };