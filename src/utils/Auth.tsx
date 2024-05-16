'use client'
// AuthFunc.tsx
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfile } from "@/store/redux/slices/profileSlice";
import { FetchMainApi } from "./fetch/clientSideFetchApi";

/**
 * Authentication function to check if a user is authenticated based on client-side logic using cookies.
 *
 * @returns {boolean} Returns true if the user is authenticated (has a valid token), otherwise returns false.
 */
export const AuthFunc = () => {
    // Use react-cookie hook to access cookies
    const dispatch = useDispatch()
    const [cookie, setCookie] = useCookies(["_token"]);
    const [authenticated, setAuthenticated] = useState(false);
    const profileData = useSelector((state:any) => state.profile)

    useEffect(() => {
        const token = cookie._token;
        if (token !== undefined) {
            const decode:any = jwtDecode(token);
            if (decode.exp * 1000 < Date.now()) {
                dispatch(addProfile({}))
                setAuthenticated(false);
            } else {
                if(Object.keys(profileData).length === 0){
                    const header = {
                        'Authorization': `Bearer ${cookie._token}`
                    };
                    FetchMainApi({url: `/user/get/${decode.id}`, method: "get", header:header})
                    .then((res) => {
                        dispatch(addProfile(res.data.data))
                        setAuthenticated(true);
                    })
                    .catch((err) =>{
                        console.log(err)
                        dispatch(addProfile({}))
                        setAuthenticated(false);
                    })
                }else{
                    setAuthenticated(true);
                }
            }
        } else {
            dispatch(addProfile({}))
            setAuthenticated(false);
        }
    }, [cookie]);

    return authenticated;
};
