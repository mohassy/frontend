import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ReactNode } from "react";

interface Props {
    user?: { name: string; CartItems: ReactNode };
}
const Navbar = ({ user }: Props) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center justify-start ">
                <span className="me-4 cursor-pointer text-lg font-bold">
                    EN
                </span>
                <form>
                    <div className="relative flex items-center text-gray-400 focus-within:text-gray-900">
                        <SearchIcon className="absolute ml-3 h-5 w-5" />
                        <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            autoComplete="off"
                            className=" w-2/3 rounded-2xl py-1 pl-10 font-semibold ring-1 ring-gray-300 duration-300 ease-in-out focus:w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>
                </form>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <h1 className="text-3xl font-bold">Tech Trader</h1>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-8 ">
                {user ? (
                    <>
                        <div className="cursor-pointer">
                            <Badge
                                badgeContent={user.CartItems}
                                color={"success"}
                            >
                                <CartIcon />
                            </Badge>
                        </div>
                        <h1 className="text-lg">{user.name}</h1>
                        <button className="rounded bg-sky-500 px-4 py-2 text-white duration-300 hover:-translate-y-1 hover:bg-sky-700">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button className="rounded bg-sky-500 px-4 py-2 text-white duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-700 ">
                            Login
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
