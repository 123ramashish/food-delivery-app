import React, { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Alert,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignupSuccess, SignupFailure } from "../Redux/User/userSlice";
import { HiInformationCircle } from "react-icons/hi";

export default function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    admin: false,
  });
  const { error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        const errordata = await response.json();
        throw new Error(errordata.message);
      }
      dispatch(SignupSuccess());
      navigate("/signin");
    } catch (err) {
      console.log(err.message);
      dispatch(SignupFailure(err.message));
    }
  };

  return (
    <>
      {error && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Info alert!</span> {error}
        </Alert>
      )}

      <Card className="max-w-sm m-auto my-8 bg-red-200">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="name"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="***********"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="admin"
              checked={userData.admin}
              onChange={handleChange}
            />
            <Label htmlFor="admin">Signup as Recruiter</Label>
          </div>
          <Button type="submit" className="bg-red-600">
            Submit
          </Button>
          <p className="text-xs font-thin">
            Do you have an account?
            <Link to="/signin" className="text-blue-600 underline">
              Signin
            </Link>
          </p>
        </form>
      </Card>
    </>
  );
}
