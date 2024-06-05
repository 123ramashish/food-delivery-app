import React from "react";
import { FileInput, Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function NewFood() {
  return (
    <div className="flex flex-col w-auto m-auto items-center my-4 ">
      <div className="flex flex-col">
        <h1 className="font-sans font-bold text-2xl m-auto pb-4 ">
          Add new Food
        </h1>
        <div>
          <Label htmlFor="picture-upload" value="Upload Picture" />
        </div>
        <FileInput id="picture-upload" className="w-96" />
      </div>

      <form className="flex flex-col gap-4 w-96">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="food" value="Food Name" />
          </div>
          <TextInput id="food" type="text" placeholder="Burger..." required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Food price in $" />
          </div>
          <TextInput id="price" type="number" required />
        </div>

        <Button type="submit" className="bg-red-500">
          Submit
        </Button>
      </form>
    </div>
  );
}
