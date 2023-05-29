import { useNavigate } from "react-router-dom"

function Feed() {
    const navigate = useNavigate();
    
    if (window.localStorage.getItem('userID') === '') {
        navigate('/');
    }
    
  
    return (
        <>
            <h1>FEED</h1>
        </>
    ) 
}

export default Feed