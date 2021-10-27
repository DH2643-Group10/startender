import  React,{useState,FC, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetFromCocktailDB } from '../../actions/CocktailActions';
import { RootStore } from "../../Store";
import HomeView from './HomeView';

//component is meant to be like a container for everything else
                    
const HomeController:FC = () => {

    const [isCardsLoading, setIsCardsLoading] = useState(true);

    // Show drink:
    const dispatch = useDispatch();
    const [cocktailName, setCocktailName] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setCocktailName(event.target.value);
    
 
    const handleSubmit = () => 
        {dispatch(GetFromCocktailDB("https://thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName));
        setIsCardsLoading(true);
        }
  
    // Show drinks on initial visit:
    useEffect(() => {
        // Searches all of API when user enters the page
        dispatch(GetFromCocktailDB("https://thecocktaildb.com/api/json/v1/1/search.php?s= "));
    }, []);
    
    return (
        <HomeView
            handleSubmit = {handleSubmit}
            handleChange = {handleChange}
            isCardsLoading = {isCardsLoading}
            setIsCardsLoading = {setIsCardsLoading}
        />
    )
}

export default HomeController
