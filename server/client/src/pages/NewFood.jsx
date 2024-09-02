import React, { useState } from "react";
import { FileInput, Button, Label, TextInput, Toast } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";
import { storage } from "../../firebase.js";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { ImageFailure, ImageSuccess } from "../Redux/User/userSlice.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewFood() {
  const notify = () => toast("Item added Successfully!");
  const [data, setData] = useState({ image: null, name: "", price: 0 });
  const [imageUrl, setImageUrl] = useState(null);
  const [add, setAdd] = useState(false);
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
    const { image, name, price } = data;

    if (!image) {
      dispatch(ImageFailure("Please upload an image"));
      return;
    }

    try {
      const filename = new Date().getTime() + "_" + image.name;
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, image);

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
            uploadData(name, price, downloadURL);
          } catch (error) {
            dispatch(ImageFailure(error.message));
          }
        }
      );
    } catch (error) {
      dispatch(ImageFailure("Something went wrong with the upload."));
    }
  };

  const uploadData = async (name, price, imageUrl) => {
    try {
      const response = await fetch("/api/food/newfood", {
        method: "POST",
        body: JSON.stringify({ name, price, imageUrl }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = await response.json();
        dispatch(ImageFailure(errorData.message));
        return;
      }

      dispatch(ImageSuccess());
      setData({ name: "", price: 0, image: null });
      setImageUrl("");
      setAdd(true);
      notify();
    } catch (error) {
      dispatch(ImageFailure("Failed to upload food data."));
    }
  };

  return (
    <div className="flex flex-col w-auto m-auto items-center my-4 ">
      <form className="flex flex-col gap-4 w-96" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <h1 className="font-sans font-bold text-2xl m-auto pb-4">
            Add new Food
          </h1>
          {error && (
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                <HiX className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">{error}</div>
              <Toast.Toggle />
            </Toast>
          )}
          {add && (
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                <HiCheck className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">
                Item added successfully.
              </div>
              <Toast.Toggle />
            </Toast>
          )}

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
