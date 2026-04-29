import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-purple-200">
            <h1>Login Page</h1>
            <LoginForm></LoginForm>
        </div>
    )
}