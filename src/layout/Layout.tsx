import { NavLink, Outlet } from 'react-router-dom'


const Layout = () => {

  return (
    <div>


      <div>
        <header>
          <nav>
            <NavLink to={'main'}>Main Page</NavLink>
            <NavLink to={'history'}>History</NavLink>
          </nav>
        </header>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout