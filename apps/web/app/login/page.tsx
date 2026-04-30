import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[url('/images/login-background.jpg')] bg-cover bg-center">
            <div className="w-full max-w-md px-8 pb-12 pt-5 flex flex-col items-center justify-center gap-4 rounded-2xl drop-shadow-xl/50 bg-linear-to-b from-sky-200 to-white">
                
                <div className="flex flex-col justify-center items-center bg-sky-100 shadow-xl/20 rounded-lg size-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clipRule="evenodd" />
                    </svg>
                </div>

                <h1 className="text-black font-bold">Sign in with email</h1>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}