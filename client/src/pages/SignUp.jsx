import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Card className="max-w-sm m-auto my-8 bg-red-200">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput id="name" type="text" placeholder="name" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="***********"
            required
          />
        </div>

        <Button type="submit" className="bg-red-600">
          Submit
        </Button>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Signup as Requiter</Label>
        </div>
        <p className="text-xs font-thin">
          Do you have accound?
          <Link to={"/signin"} className="text-blue-600 underline">
            {" "}
            Signin
          </Link>
        </p>
      </form>
    </Card>
  );
}
