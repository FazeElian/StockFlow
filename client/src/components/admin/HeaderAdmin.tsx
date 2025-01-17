import { Outlet } from "react-router-dom";

// Tanstack
import { useQuery } from "@tanstack/react-query"

// Function from API
import { getUser } from "../../api/auth";

// Redirection
import { useNavigate } from "react-router-dom";

// Components for this layout
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

// Toaster component
import { Toaster } from "sonner";

// Type
// import { User } from "../../types/auth";

const HeaderAdmin = () => {
    const { data: user, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ["user"],
        retry: 1,
        refetchOnWindowFocus: false,
        // staleTime: 30 * 10000,
    });

    const navigate = useNavigate();

    if (isLoading) {
        return (
            <h1 className="color-white">Loading</h1>
        )
    }
    
    if (isError) {
        navigate("/auth/login");
    }

    if (user) {
        return (
            <>
                <NavBar
                    userName={user.userName}
                    profilePhoto={user.profilePhoto}
                />
                <SideBar />
                <Toaster position="bottom-right" richColors />
                <Outlet />
            </>
        )
    }
}

export { HeaderAdmin };