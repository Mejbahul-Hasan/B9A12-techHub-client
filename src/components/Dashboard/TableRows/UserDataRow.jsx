import PropTypes from 'prop-types'
import { useMutation } from '@tanstack/react-query'
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useAuth from '../../../hooks/useAuth';

const UserDataRow = ({ user, refetch }) => {
    const { user: loggedInUser } = useAuth()

    const axiosSecure = useAxiosSecure()
    const { mutateAsync } = useMutation({
        mutationFn: async role => {
            const { data } = await axiosSecure.patch(
                `/users/update/${user?.email}`,
                role
            )
            return data
        },
        onSuccess: data => {
            refetch()
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Your role changed successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        },
    })

    //   make moderator
    const handleModerator = async e => {
        if (loggedInUser.email === user.email) {
            return (Swal.fire('Admin are not allowed to change role'))
            ;
        }

        const userRole = {
            role: e.target.value = 'moderator',
            status: 'Verified',
        }

        try {
            await mutateAsync(userRole)
        } catch (err) {
            console.log(err)
            Swal.fire(err.message);
        }
    }


    //   make admin
    const handleAdmin = async e => {
        if (loggedInUser.email === user.email) {
            return (Swal.fire('Admin are not allowed to change role'))
            ;
        }

        const userRole = {
            role: e.target.value = 'admin',
            status: 'Verified',
        }

        try {
            await mutateAsync(userRole)
        } catch (err) {
            console.log(err)
            Swal.fire(err.message);
        }
    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={handleModerator} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span aria-hidden='true' className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                    <span className='relative'>Moderator</span>
                </button>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={handleAdmin} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span aria-hidden='true' className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                    <span className='relative'>Admin</span>
                </button>
            </td>
        </tr>
    )
}

UserDataRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func,
}

export default UserDataRow