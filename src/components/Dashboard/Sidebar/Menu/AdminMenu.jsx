import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { BsGraphUp } from 'react-icons/bs'
import { RiCoupon2Fill } from 'react-icons/ri'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label='Statistics' address='statistics' />
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={RiCoupon2Fill} label='Manage Coupons' address='manage-coupons' />
    </>
  )
}

export default AdminMenu