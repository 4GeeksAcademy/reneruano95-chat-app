'use client'
import { getMessage } from "@/app/lib/actions"
import { useQuery } from "@tanstack/react-query"

export default function MessageList() {
    const message = useQuery({
        queryKey: ['messages'],
        queryFn: getMessage,
    })

    return (
        <div>{message.data?.map((item: { author: string, message: string }, index: any) => {
            <div key={index}>
                <b>{item.author}</b> - {item.message}
            </div>
        })}</div>
    )
}