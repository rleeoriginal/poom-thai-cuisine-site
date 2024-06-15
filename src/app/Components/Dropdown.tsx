import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Dropdown() {

  return (
    <Menu>
        <MenuButton className="">Order</MenuButton>
        <MenuItems anchor="bottom">
        <MenuItem>
            <a className="block data-[focus]:bg-blue-100  text-[#FFE838] text-center" href="https://www.doordash.com/store/poom-thai-cuisine-santa-monica-78008/">
            DoorDash
            </a>
        </MenuItem>
        <MenuItem>
            <a className="block data-[focus]:bg-blue-100 text-[#FFE838] text-center" href="https://postmates.com/store/poom-thai-cuisine/qOfP_swRQLaYs_U9bA8NSQ">
            Postmates
            </a>
        </MenuItem>
        <MenuItem>
            <a className="block data-[focus]:bg-blue-100 text-[#FFE838] text-center" href="https://www.ubereats.com/store/poom-thai-cuisine/qOfP_swRQLaYs_U9bA8NSQ">
            Uber Eats
            </a>
        </MenuItem>
        <MenuItem>
            <a className="block data-[focus]:bg-blue-100 text-[#FFE838] text-center" href="https://www.grubhub.com/restaurant/poom-thai-2204-lincoln-blvd-ste-a-santa-monica/289536">
                GrubHub
            </a>
        </MenuItem>
        <MenuItem>
            <a className="block data-[focus]:bg-blue-100 text-[#FFE838] text-center" href="#">
                Test
            </a>
        </MenuItem>
        </MenuItems>
    </Menu>
  )
}