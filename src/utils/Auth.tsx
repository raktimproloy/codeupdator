'use client'
// AuthFunc.tsx
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProfile } from "@/store/redux/slices/profileSlice";

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

    useEffect(() => {
        const token = cookie._token;
        if (token !== undefined) {
            const decode = jwtDecode(token);
            if (decode.exp * 1000 < Date.now()) {
                dispatch(addProfile({}))
                setAuthenticated(false);
            } else {
                dispatch(addProfile(decode))
                setAuthenticated(true);
            }
        } else {
            dispatch(addProfile({}))
            setAuthenticated(false);
        }
    }, [cookie]);

    return authenticated;
};
