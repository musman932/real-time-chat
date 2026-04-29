import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="px-25 pb-50 pt-5 flex flex-col items-center justify-center gap-4 bg-purple-200 rounded-lg">
                <h1 className="text-black font-bold mb-auto">Login Page</h1>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}