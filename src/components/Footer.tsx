import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    return (
        <div className="space-y-4">
            <div className="me-10 ms-10 flex justify-evenly">
                <div className="flex-1">
                    <h1 className="text-xl font-semibold">TECH TRADER</h1>
                    <div className="pe-10">
                        <p className="text-ms">
                            Welcome to the best place to buy and sell your
                            personal electronics. Make a trade today with the
                            click of a button!
                        </p>
                    </div>
                </div>
                <div className="flex-1 justify-start">
                    <h1 className="text-xl font-semibold">PRODUCTS</h1>
                    <ul className="list-inside">
                        <li>PC Desktops</li>
                        <li>Monitors</li>
                        <li>Gaming Consoles</li>
                        <li>TVs</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h1 className="text-xl font-semibold">USEFUL lINKS</h1>
                    <ul className="list-inside">
                        <li>Home</li>
                        <li>My Account</li>
                        <li>Order Tracking</li>
                        <li>Wishlist</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h1 className="text-xl font-semibold">CONTACT</h1>
                    <div className="container">
                        <div className="flex">
                            <PlaceIcon
                                style={{
                                    marginRight: "10px",
                                    color: "#a83e32",
                                }}
                            />
                            <p>622 Dixie Rd Toronto Ontario</p>
                        </div>
                        <div className="flex">
                            <PhoneIcon
                                style={{
                                    marginRight: "10px",
                                    color: "#58a832",
                                }}
                            />
                            <p>+1 234 533 3245</p>
                        </div>
                        <div className="flex">
                            <EmailIcon
                                style={{
                                    marginRight: "10px",
                                    color: "#32a881",
                                }}
                            />{" "}
                            <p>techtrader@gmail.dev</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="me-10 ms-10 flex items-center justify-center gap-20">
                <div className="h-10 w-10 cursor-pointer">
                    <FacebookIcon style={{ color: "#3b5999" }} />
                </div>
                <div className="h-10 w-10 cursor-pointer">
                    <InstagramIcon style={{ color: "#e1306c" }} />
                </div>
                <div className="h-10 w-10 cursor-pointer">
                    <TwitterIcon style={{ color: "#1da1f2" }} />
                </div>
                <div className="h-10 w-10 cursor-pointer">
                    <PinterestIcon style={{ color: "#e60023" }} />
                </div>
            </div>
            <div className="flex w-full items-center justify-center bg-teal-500">
                <h1>Copyright: Techtrader.com</h1>
            </div>
        </div>
    );
};

export default Footer;
