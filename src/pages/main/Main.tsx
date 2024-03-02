import { useOutletContext } from 'react-router-dom'


interface GalleryContextType {
  data: string | null;
  isLoading: boolean;
  error: string | null;
  searchHistory: string[];
  executeSearch: (searchTerm: string) => void;
}


const Main: React.FC =() => {
  const { data, isLoading, error } = useOutletContext<GalleryContextType>();

  useEffect(() => {
    if (data) {
      console.log('New data received:', data);
    }
  }, [data]);


  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;


  return (
    <div>
      Main
    </div>
  )
}

export default Main