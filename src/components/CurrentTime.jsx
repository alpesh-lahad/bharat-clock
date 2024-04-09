import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
    const [mTime, setMtime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMtime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <>
            <h3>This is the current time: {mTime.toLocaleDateString()} -  {mTime.toLocaleTimeString()}</h3>
        </>
    )
}

export default CurrentTime;