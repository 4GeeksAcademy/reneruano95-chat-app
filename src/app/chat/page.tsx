'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatApp from "@/components/ChatApp";



const queryClient = new QueryClient()

export default function Page() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChatApp />
        </QueryClientProvider >
    )

}