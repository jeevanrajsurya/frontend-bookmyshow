import { useEffect, useState } from "react"
import { FiX, FiMail, FiChevronDown } from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import { BsFlagFill } from "react-icons/bs"

function Signin({ onClose }) {
  const [phone, setPhone] = useState("")
  const [authMethod, setAuthMethod] = useState(null) // google | email | phone | apple

  const isValid = phone.length === 10

  /* ============ LOCK BACKGROUND SCROLL ============ */
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  /* ============ PHONE INPUT HANDLER ============ */
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 10) setPhone(value)
  }

  /* ============ AUTH HANDLERS (API READY) ============ */
  const handleGoogleLogin = () => {
    setAuthMethod("google")
    // later: Google OAuth API
    console.log("Google login")
  }

  const handleEmailLogin = () => {
    setAuthMethod("email")
    // later: Email auth flow
    console.log("Email login")
  }

  const handleAppleLogin = () => {
    setAuthMethod("apple")
    // later: Apple auth
    console.log("Apple login")
  }

  const handlePhoneSubmit = () => {
    if (!isValid) return
    setAuthMethod("phone")

    // later: send OTP API
    console.log("Send OTP to:", phone)
  }

  return (
    <>
      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      {/* MODAL */}
      <div className="fixed z-50 inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-[420px] bg-white rounded-lg p-10 relative font-['Roboto']">
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <FiX size={20} />
          </button>

          {/* TITLE */}
          <h2 className="text-center text-[16px] font-medium mb-6">
            Get Started
          </h2>

          {/* GOOGLE */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border border-gray-400 rounded-md py-2.5
                       flex items-center justify-center gap-3 mb-5
                       text-sm font-medium hover:bg-gray-50
                       hover:border-gray-300 transition"
          >
            <FcGoogle size={18} />
            Continue with Google
          </button>

          {/* EMAIL */}
          <button
            onClick={handleEmailLogin}
            className="w-full border border-gray-400 rounded-md py-2.5
                       flex items-center justify-center gap-3 mb-5
                       text-sm font-medium hover:bg-gray-50
                       hover:border-gray-300 transition"
          >
            <FiMail size={18} />
            Continue with Email
          </button>

          {/* APPLE */}
          <button
            onClick={handleAppleLogin}
            className="w-full border border-gray-400 rounded-md py-2.5
                       flex items-center justify-center gap-3 mb-5
                       text-sm font-medium hover:bg-gray-50
                       hover:border-gray-300 transition"
          >
            <FaApple size={18} />
            Continue with Apple
          </button>

          {/* OR */}
          <div className="text-center text-xs text-gray-400 mb-6">
            OR
          </div>

          {/* PHONE INPUT */}
          <div className="mb-6">
            <div className="flex items-end gap-2">
              {/* FLAG */}
              <BsFlagFill className="text-[#138808] text-[14px] mb-[3px]" />

              {/* +91 */}
              <div className="flex items-center gap-1 text-sm text-gray-700 mb-[2px]">
                +91
                <FiChevronDown size={14} />
              </div>

              {/* INPUT */}
              <div className="flex-1">
                <input
                  type="text"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Continue with mobile number"
                  className="w-full bg-transparent outline-none
                             text-sm text-[#333]
                             placeholder-gray-400"
                />
                <div className="h-[1.5px] bg-[#EB4E62] mt-1" />
              </div>
            </div>
          </div>

          {/* ERROR */}
          {phone.length > 0 && !isValid && (
            <p className="text-[11px] text-[#EB4E62] -mt-4 mb-4">
              Please enter 10 digit mobile number
            </p>
          )}

          {/* CONTINUE */}
          <button
            onClick={handlePhoneSubmit}
            disabled={!isValid}
            className={`w-full py-2.5 rounded-md
              text-white text-sm font-medium transition
              ${
                isValid
                  ? "bg-[#EB4E62] hover:bg-[#e03b52]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            Continue
          </button>

          {/* TERMS */}
          <p className="text-[11px] text-center text-gray-500 mt-4">
            I agree to{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signin
