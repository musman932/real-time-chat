import Form from 'next/form'

export default function LoginForm() {
    async function loginUser(formData: FormData) {
        'use server';
        console.log("loginUser function called");
    }

    return (
        <Form action={loginUser} className='flex flex-col gap-y-5'>
            <input name="Email:" className='bg-gray-100 outline-3 outline-red-500'/>
            <input name="Password:" className='bg-gray-100 outline-3 outline-red-500'/>
            <button type="submit" className="text-white font-bold py-2 mx-7 rounded-full bg-sky-500 cursor-pointer hover:bg-sky-700">Login</button>
        </Form>
    );
}
