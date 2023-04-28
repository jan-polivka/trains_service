import { Button } from "@mui/material"
import { useState } from "react"

export const RetrieveForm = (props: { retrieveTimeString: () => string }): JSX.Element => {

    const [timeString, setTimeString] = useState("")

    return (
        <>
            <label aria-label="retrieved-time-string">{timeString}</label>
            <br />
            <Button aria-label="retrieve-time-string" onClick={() => { setTimeString(props.retrieveTimeString()) }}>Retrieve time string</Button>
        </>
    )
}