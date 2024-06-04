import AuthLayout from "../../components/Authentication/Layout"

const VerifyEmail = () => {
  return (
    <AuthLayout height={'h-auto'}>
        <div>
            Check your email for the verification link before you proceed to login
            <br />
            <p className="pt-4">Redirecting to Login...</p>
        </div>
    </AuthLayout>
  )
}

export default VerifyEmail