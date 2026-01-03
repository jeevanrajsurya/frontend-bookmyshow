import { FiX } from "react-icons/fi"

function Signin({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[90%] max-w-[400px] bg-white rounded-lg p-6">

        <button onClick={onClose} className="absolute top-4 right-4">
          <FiX />
        </button>

        <h2 className="text-lg font-semibold text-center">Signin</h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          Design next step-la pannalaam
        </p>
      </div>
    </>
  )
}

export default Signin
