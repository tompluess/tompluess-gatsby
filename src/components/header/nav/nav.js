import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const menuData = [
  { title: 'Home', link: '/' },
  // { title: 'Angebot', link: '/offer' },
  { title: 'Kontakt', link: '/contact' },
  { title: 'Hobbit', link: '/hobbit' },
]

const HamburgerButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className="self-end" >
    <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <circle cx="20.5" cy="20.5" r="20.5" />
      <path
        stroke="gray"
        strokeWidth="2"
        d="M0 10 H41 M0 25 H41 M0 40 H41"
      />
    </svg>
  </button>
)

const CrossButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className="self-end" >
    <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
      <g
        clipPath="url(#clip0)"
        stroke="gray"
        strokeWidth="2"
        strokeMiterlimit="10"
      >
        <path d="M5 9 L37 41 M5 41 L37 9" />
      </g>
    </svg>
  </button>
)

HamburgerButton.propTypes = {
  onClick: PropTypes.func
}
const MenuItem = ({ menuItem, className }) => (
  <div className={className}>
    <Link to={menuItem.link} >
      <span className="text-2xl font-light">{menuItem.title}</span>
    </Link>
  </div>
)

const Nav = ({ subNav }) => {
  const [navigationOpen, setNavigationOpen] = useState(false)

  const openMenu = () => setNavigationOpen(true)
  const closeMenu = () => setNavigationOpen(false)

  return (
    <>
      <nav>
        <div className="md:hidden text-right">
          {navigationOpen ? (
            <CrossButton onClick={closeMenu} />
          ) : (
            <HamburgerButton onClick={openMenu} />
          )}
        </div>
        <div className="hidden md:flex md:h-full">
          {menuData.map(menuItem => {
            return <MenuItem
                menuItem={menuItem}
                className="hidden md:block text-right ml-8"
              />
          })}
        </div>

        {navigationOpen ? (
          <div className="flex flex-col md:hidden">
            {menuData.map(menuItem => {
              return (
                <MenuItem
                  menuItem={menuItem}
                  className="flex self-end my-4 "
                />
              )
            })}
          </div>
        ) : (
          <div className="hidden" />
        )}
      </nav>
    </>
  )
}

export default Nav;
