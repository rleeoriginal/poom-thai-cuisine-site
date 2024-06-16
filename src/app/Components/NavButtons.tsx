import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ 
    weight: ['400'],
    subsets: ['latin'] 
});

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavButtons() {
  return <>
    <div className={`grid grid-cols-2 flex-1 gap-2 ${pacifico.className}`}>
        <div className="flex justify-center items-center">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2  font-semibold text-[#FFE838] shadow-sm hover:bg-gray-50/50">
                        <a href="">Menu</a>
                    </MenuButton>
                </div>
            </Menu>
        </div>

        <div className="flex justify-center items-center ">
            <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2  font-semibold text-[#FFE838] shadow-sm hover:bg-gray-50/50">
                Order
                </MenuButton>
            </div>

            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#007E3A]/70 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <MenuItem>
                    {({ focus }) => (
                        <a
                        href="https://www.doordash.com/store/poom-thai-cuisine-santa-monica-78008/"
                        className={classNames(
                            focus ? 'bg-[gray-50]/50 text-[#FFE838] rounded-md' : 'text-[#FFE838]',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        DoorDash
                        </a>
                    )}
                    </MenuItem>
                    <MenuItem>
                    {({ focus }) => (
                        <a
                        href="https://postmates.com/store/poom-thai-cuisine/qOfP_swRQLaYs_U9bA8NSQ"
                        className={classNames(
                            focus ? 'bg-gray-50/50 text-[#FFE838] rounded-md' : 'text-[#FFE838]',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Postmates
                        </a>
                    )}
                    </MenuItem>
                    <MenuItem>
                    {({ focus }) => (
                        <a
                        href="https://www.ubereats.com/store/poom-thai-cuisine/qOfP_swRQLaYs_U9bA8NSQ"
                        className={classNames(
                            focus ? 'bg-gray-50/50 text-[#FFE838] rounded-md' : 'text-[#FFE838]',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Uber Eats
                        </a>
                    )}
                    </MenuItem>
                    <form method="POST" action="https://www.grubhub.com/restaurant/poom-thai-2204-lincoln-blvd-ste-a-santa-monica/289536">
                    <MenuItem>
                        {({ focus }) => (
                        <button
                            type="submit"
                            className={classNames(
                            focus ? 'bg-gray-50/50 text-[#FFE838] rounded-md' : 'text-[#FFE838]',
                            'block w-full px-4 py-2 text-left text-sm'
                            )}
                        >
                            GrubHub
                        </button>
                        )}
                    </MenuItem>
                    </form>
                </div>
                </MenuItems>
            </Transition>
            </Menu>
        </div>
    </div>

    
  </>
}
