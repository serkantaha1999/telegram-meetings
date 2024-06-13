import { useEffect, useState } from "react";

const useModal = () => {
    const [open, setIsOpen] = useState(false);
    const [animation, setAnimation] = useState("in");

    useEffect(() => {
        if (open) {
            setAnimation("in");
        }
    }, [open]);

    const handleOpenModal = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden"
    };

    const handleCloseModal = () => {
        setIsOpen(false)
        setAnimation("out");
        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                handleCloseModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return {
        open,
        onOpen: handleOpenModal,
        onClose: handleCloseModal,
        animation,
    };
};

export default useModal;