import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link, useLocation } from "react-router-dom";

const menu = [
    { name: 'Shorts', href: '/shorts' },
    { name: 'Music video', href: '/musicvideo' },
]

export default function FlyoutMenu() {
    const location = useLocation();

    return (
        <Popover className="absolute top-[5vw] right-[7.5vw] flex">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                <span className='text-[#FED722]'>Menu</span>
                <ChevronDownIcon aria-hidden="true" className="size-5 text-[#FED722]" />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="w-56 shrink rounded-xl bg-[#FED722] p-4 text-sm/6 font-semibold shadow-lg ring-1 ring-gray-900/5">
                    {menu.map((item) => (
                        <Link key={item.name} className="block p-2 hover:text-[#69d2e6] text-white" to={item.href}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </PopoverPanel>
        </Popover>
    )
}
