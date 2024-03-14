'use client'
import { postMessage } from "@/app/lib/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function MessageInput() {

    const [message, setMessage] = useState('')
    const post = useMutation({
        mutationFn: postMessage
    })
    // const queryClient = useQueryClient()

    const handleSend = () => {
        post.mutate(
            {
                message, author: 'Rene'
            },
            // {
            //     onSuccess: () => {
            //         queryClient.invalidateQueries(['messages'])
            //         setMessage('')
            //     }
            // }
        )
    }
    return (
        <div >
            <InputGroup className="mb-3 ">
                <Form.Control
                    placeholder="Message"
                    aria-label="Message Input"
                    aria-describedby="add-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="outline-secondary" id="add-message" onClick={handleSend}>
                    Add
                </Button>
            </InputGroup>
        </div>

    )
}