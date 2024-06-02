import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
export function SignIn() {
  return (
    <Card className="max-w-sm  m-auto my-8 bg-red-200">
      <form className="flex flex-col gap-4">
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
            placeholder="*********"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" className="bg-red-600">
          Submit
        </Button>
        <p className="text-xs font-thin">
          Don't have accound?
          <Link to={"/signup"} className="text-blue-600 underline">
            {" "}
            Signup
          </Link>
        </p>
      </form>
    </Card>
  );
}
