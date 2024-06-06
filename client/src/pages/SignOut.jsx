import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "flowbite-react";
import { HiCheck, HiExclamation } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { SignOutSuccess, SignOutFailure } from "../Redux/User/userSlice.js";

export default function SignOut() {
  const { error } = useSelector((state) => state.user);
  const [signout, setSignout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleSignout = async () => {
      try {
        const response = await fetch("/api/user/signout", {
          method: "POST",
        });
        if (!response.ok) {
          const errordata = await response.json();
          throw new Error(errordata.message);
        }
        dispatch(SignOutSuccess());
        setSignout(true);
        navigate("/signin");
      } catch (err) {
        console.error(err.message);
        dispatch(SignOutFailure(err.message));
      }
    };

    handleSignout();
  }, [dispatch, navigate]);

  return (
    <div>
      {signout && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Signout successfully.</div>
          <Toast.Toggle />
        </Toast>
      )}

      {error && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <HiExclamation className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{error}</div>
          <Toast.Toggle />
        </Toast>
      )}
    </div>
  );
}
