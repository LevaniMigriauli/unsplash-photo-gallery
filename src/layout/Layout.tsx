import React, { useState, ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


interface LayoutProps {
  children?: ReactNode;
}

const accessKey = 'tPdyTu74On85viGJ0ZcnNY3eAojdhVptwWOGToDYtrM'

const Layout: React.FC<LayoutProps> = () => {
  // const [data, setData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [searchedKeyHistory, searchedKeyHistory] = useState<string[]>([])


  const handlePhotosFetch =async ((page = 1) => {
    const url = `https://api.unsplash.com/photos?order_by=popular&per_page=20&page=${page}`

    const response = await fetch(url, {
      headers: {
        Authorization: `Client - ID ${accessKey}`
      }
    })

    // console.log(response.json())
    return response.json()
  })

  handlePhotosFetch()

  return (
    <div>
      {isLoading ? <p>Loading...</p>
        :
        <div>
          <header>
            <nav>
              <NavLink to={'main'}>Main Page</NavLink>
              <NavLink to={'history'}>History</NavLink>
            </nav>
          </header>
          <Outlet/>
        </div>}
    </div>
  )
}

export default Layout