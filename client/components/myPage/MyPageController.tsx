import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetFromCocktailDB } from '../../actions/CocktailActions';
import { GetAllCommentsFromUser } from '../../actions/CommentsActions';
import { Logout } from '../../actions/DatabaeActions';
import { RootStore } from '../../Store';
import MyPageView from "./MyPageView";

// component meant to handle logic for login page.
// In MyPageView we use useSelector and in MyPageController we handle the dispatch functions.
// (basically writing TO the reducers. Ex if the user updates something.)

const MyPageController = () => {
    const userState = useSelector((state: RootStore) => state.databae);
    const [show, setShow] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(Logout());
    }

    useEffect(() => {

        userState.currentUser &&
        dispatch(GetAllCommentsFromUser(userState?.currentUser?.id));
    }, [userState?.currentUser?.id])


    const handleClose = () => {
        dispatch(GetAllCommentsFromUser(userState?.currentUser?.id));
        setShow(false);
    };

    const handleShow = (id: string) => {
        dispatch(GetFromCocktailDB("https://thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id));
        // setDrinkToShow(cocktailState?.cocktail?.drinks[0]);
        // setShow(true);
    };

    // useEffect(() => {

    //     userState.currentUser &&
    //     dispatch(GetAllCommentsFromUser(userState?.currentUser?.id));
    // }, [userState?.currentUser?.id])


    return (
        <div>
            <MyPageView
                handleClick = {handleClick}
                handleClose = {handleClose}
                handleShow = {handleShow}
                show = {show}
                setShow = {setShow}
            />
        </div>
    )
}

export default MyPageController;

