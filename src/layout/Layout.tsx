import React, { useState, ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { QueryFunctionContext, useQuery } from '@tanstack/react-query'


interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>()

  const accessKey = 'tPdyTu74On85viGJ0ZcnNY3eAojdhVptwWOGToDYtrM'
  const handlePhotosFetch = async ({
                                     queryKey
                                   }: QueryFunctionContext<[string, string]>) => {
    const [, query] = queryKey
    let url = `https://api.unsplash.com/photos?order_by=popular&per_page=20`

    if (query) {
      url = `https://api.unsplash.com/search/photos?query=${query}&per_page=20`
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    })

    const jsonData = await response.json()
    return query ? jsonData.results : jsonData
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['photos', searchInputValue],
    queryFn: handlePhotosFetch,
    enabled: true
  })

  const handleTriggerSearchQuery = async (inputValue: string) => {
    console.log(inputValue)
    setSearchInputValue(inputValue)
  }

  return (
    <div>
      {error ? <p> ... Error </p> :
        <div>
          <header>
            <nav>
              <NavLink to={'main'}>Main Page</NavLink>
              <NavLink to={'history'}>History</NavLink>
            </nav>
          </header>
          <Outlet context={{ data, error, handleTriggerSearchQuery }}/>
        </div>}
    </div>
  )
}

export default Layout