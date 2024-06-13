import { GoReport } from "react-icons/go";
import MenuItem from "./MenuItem";
import { MdOutlinePreview } from "react-icons/md";

const ModeratorMenu = () => {
    return (
        <div>
            <MenuItem icon={MdOutlinePreview} label='Product Review Queue' address='product-review-queue' />
            <MenuItem icon={GoReport} label='Reported Contents' address='reported-content' />
        </div>
    );
};

export default ModeratorMenu;