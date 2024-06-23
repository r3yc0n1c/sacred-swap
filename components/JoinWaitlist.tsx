import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function JoinWaitlist() {
    return (
        <div className='mx-14 border-x border-neutral-400 flex flex-col justify-center items-center'>
            <div className='my-4'>
                <h1 className='text-3xl font-semibold'>Join the waitlist!</h1>

                <div className='flex gap-4 mt-8'>
                    <Input />
                    <Button variant="neo" className='neo-btn'>Button</Button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default JoinWaitlist