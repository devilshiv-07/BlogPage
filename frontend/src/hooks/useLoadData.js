import { useState, useEffect, useRef } from "react";
import { getUserData } from "../http";
import { removeUser, setUser } from "../redux/slices/userSlice";
import {useDispatch } from "react-redux";
import { enqueueSnackbar } from "notistack";

const useLoadData = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const isFetched = useRef(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUserData();
                const user = res.data.user;
                dispatch(setUser(user));
                                
            } catch (error) {
                dispatch(removeUser());
                console.log(error.response.data.message);
                enqueueSnackbar("Please login, or you will miss functionalities", {variant: "default"});
                
            } finally {
                setIsLoading(false);
            }
        };

        if(!isFetched.current) {
            isFetched.current = true;
            fetchUser();
        }
    }, [dispatch])

    return isLoading;
}

export default useLoadData;