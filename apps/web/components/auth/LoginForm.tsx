import Form from 'next/form'

export default function LoginForm() {
    async function loginUser(formData: FormData) {
        'use server';
        console.log("loginUser function called");
    }

    return (
        <Form action={loginUser} className='flex flex-col gap-y-4'>
            <input name="Email:" className='bg-gray-100 outline-3 outline-red-500'/>
            <input name="Password:" className='bg-gray-100 outline-3 outline-red-500'/>
            <button type="submit">Login</button>
        </Form>
    );
}
