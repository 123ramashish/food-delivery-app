import React, { useEffect, useState } from "react";
export default function useCartShow() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return { isOpen, handleClose, handleOpen };
}
