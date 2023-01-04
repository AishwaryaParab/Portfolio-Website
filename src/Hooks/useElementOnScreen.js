import { useRef, useState } from "react";

function useElementOnScreen() {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const observer = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.IsIntersecting);
    }

}

export default useElementOnScreen;