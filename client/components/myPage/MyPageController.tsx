import React from 'react';
import MyPageView from "./MyPageView";

// component meant to handle logic for login page.
// In MyPageView we use useSelector and in MyPageController we handle the dispatch functions.
// (basically writing TO the reducers. Ex if the user updates something.)

const MyPageController = () => {

    return (
        <div>
            <MyPageView/>
        </div>
    )
}

export default MyPageController;

