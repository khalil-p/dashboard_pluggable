import React from 'react'
import { SUB_MENU_LIST } from '../../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const linkClases =
    'flex items-center gap-2 font-medium pl-5 py-2 hover:bg-neutral-700 hover:no-underline active:bg-netral-600 rounded-sm text-base'

function Submenu({ mainMenuName }) {
    return (
        <div>
            {SUB_MENU_LIST.map((item) => (item.name === mainMenuName ? <SubMenuList data={item.menus} /> : undefined))}
        </div>
    )
}
export default Submenu

function SubMenuList({ data }) {
    const pathname = useLocation()
    return data.map((item) => (
        <Link
            key={item.key}
            to={item.path}
            className={classNames(
                pathname === item.path ? 'text-white bg-neutral-700' : 'rgb(96 125 139/var(--tw-text-opacity))',
                linkClases
            )}
        >
            {item.label}
        </Link>
    ))
}
