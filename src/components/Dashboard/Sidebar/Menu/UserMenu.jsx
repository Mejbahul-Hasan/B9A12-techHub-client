import MenuItem from './MenuItem';
import { FcSettings } from 'react-icons/fc';
import { BsFillHouseAddFill } from 'react-icons/bs';
import { MdHomeWork } from 'react-icons/md';

const UserMenu = () => {
    return (
        <div>
            <MenuItem label='My Profile' address='my-profile' icon={FcSettings} />

            <MenuItem label='Add Product' address='add-product' icon={BsFillHouseAddFill} />

            <MenuItem label='My Products' address='my-products' icon={MdHomeWork} />

        </div>
    );
};

export default UserMenu;