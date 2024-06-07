import React, { useState } from "react";
import { FileInput, Button, Label, TextInput } from "flowbite-react";
import { storage } from "../../firebase.js";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { ImageFailure } from "../Redux/User/userSlice.js";

export default function NewFood() {
  const [data, setData] = useState({ image: null, name: "", price: 0 });
  const [imageUrl, setImageUrl] = useState(null);
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "image") {
      setData((prevState) => ({ ...prevState, image: files[0] }));
    } else {
      setData((prevState) => ({ ...prevState, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { image } = data;

    if (!image) {
      dispatch(ImageFailure("Please upload an image"));
      return;
    }

    const filename = new Date().getTime() + "_" + image.name;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, image);
    console.log(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log("ERROR:", error.message);
        dispatch(ImageFailure(error.message));
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageUrl(downloadURL);
        } catch (error) {
          dispatch(ImageFailure(error.message));
        }
      }
    );
    uploadData();
  };

  const uploadData = async () => {};
  return (
    <div className="flex flex-col w-auto m-auto items-center my-4 ">
      <form className="flex flex-col gap-4 w-96" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <h1 className="font-sans font-bold text-2xl m-auto pb-4">
            Add new Food
          </h1>
          <div>
            <Label htmlFor="image" value="Upload Picture" />
          </div>
          <FileInput
            id="image"
            className="w-96"
            helperText="SVG, PNG, JPEG, JPG (MAX. 800x400px)."
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Food Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Burger..."
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Food price in $" />
          </div>
          <TextInput
            id="price"
            type="number"
            required
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="bg-red-500">
          Submit
        </Button>
      </form>
    </div>
  );
}
