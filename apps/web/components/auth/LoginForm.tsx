'use client';

import Form from 'next/form'
import { RedirectType, redirect } from 'next/navigation';
import React from 'react';

export default function LoginForm() {
    async function loginUser(formData: FormData) {
        'use server';
        console.log("loginUser function called");
    };

    function handleSignUpButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        redirect('/signup', RedirectType.replace);
    };

    return (
        <div className="flex flex-col gap-y-6">
            <Form action={loginUser} className='flex flex-col gap-y-5'>
                <input placeholder='Email'
                className='w-full px-4 py-2 bg-gray-100 rounded-md shadow-lg/30'
                />
                <input placeholder='Password'
                className='w-full px-4 py-2 bg-gray-100 rounded-md shadow-lg/30'
                />
                <button type="submit" className="mt-2 w-full text-white font-bold py-2 rounded-full bg-sky-500 cursor-pointer hover:bg-sky-700">Login</button>
            </Form>
            <div className="flex items-center gap-4">
                <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>
                <span className="text-gray-500 text-sm">Or Sign Up</span>
                <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>
            </div>
            <button type="button" onClick={handleSignUpButtonClick}>
                Sign Up
            </button>
        </div>
    );
}
