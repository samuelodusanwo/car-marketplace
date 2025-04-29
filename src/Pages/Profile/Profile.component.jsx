import Footer from "@/components/Footer/Footer.component";
import Header from "@/components/Header/Header.component";
import { Button } from "@/components/ui/button";

function Profile() {
    return (
        <div>
            <Header />
            <div className="px-10 md:px-20 my-10">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-4xl">My Listing</h2>
                    <Button>+ Add New Listing</Button>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Profile;