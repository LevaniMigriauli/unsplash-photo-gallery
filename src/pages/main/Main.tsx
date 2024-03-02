import { useOutletContext } from 'react-router-dom'
import React, { useEffect, useState } from 'react'


interface GalleryContextType {
  data: [] | null;
  isLoading: boolean;
  handleTriggerSearchQuery: (inputValue: string) => void;
}

const Main: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const { data, isLoading, error, handleTriggerSearchQuery } = useOutletContext<GalleryContextType>()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    if (newValue.trim() !== '') { // Check the directly obtained newValue instead
      handleTriggerSearchQuery(newValue); // Use the newValue directly
    }
  }

  console.log(inputValue)

  return (
    <div>
      <div>
        <input onChange={handleInputChange}/>
        {isLoading ? <p> ... Loading </p> :
          <div>
            {data?.map((el) => {
              return (
                <img key={el.id} src={el.urls.small} alt={el.alt_descrition}/>
              )
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default Main