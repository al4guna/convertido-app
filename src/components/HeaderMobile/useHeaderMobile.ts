import { useState, useCallback } from "react";

export const useHeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false );

    const handleShowMenu = useCallback(() => {
        setIsOpen(isOpen => !isOpen);
    }, []);

    return {
        isOpen,
        handleShowMenu
    }
}
