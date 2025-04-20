'use client'
import React, { useEffect } from "react";

export default function Resume() {
    useEffect(() => {
        const message = {
            type: "CLOSE_MODAL"
        }
        window.parent.postMessage(message, "*")
    }, [])

    return <div>
    </div>
}