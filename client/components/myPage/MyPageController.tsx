import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCommentsFromUser } from '../../actions/CommentsActions';
import { Logout } from '../../actions/DatabaeActions';
import { RootStore } from '../../Store';
import MyPageView from "./MyPageView";

// component meant to handle logic for login page.
// In MyPageView we use useSelector and in MyPageController we handle the dispatch functions.
// (basically writing TO the reducers. Ex if the user updates something.)

const MyPageController = () => {
    const userState = useSelector((state: RootStore) => state.databae);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(Logout());
    }

    useEffect(() => {

        userState.currentUser &&
        dispatch(GetAllCommentsFromUser(userState?.currentUser?.id));
    }, [userState?.currentUser?.id])

    // useEffect(() => {

    //     userState.currentUser &&
    //     dispatch(GetAllCommentsFromUser(userState?.currentUser?.id));
    // }, [userState?.currentUser?.id])


    return (
        <div>
            <MyPageView
                handleClick = {handleClick}
            />
        </div>
    )
}

export default MyPageController;

