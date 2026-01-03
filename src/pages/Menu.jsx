import { FiX } from "react-icons/fi"

function Menu({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-[280px] bg-white z-50 p-4">
        <button onClick={onClose} className="mb-4">
          <FiX />
        </button>

        <p className="text-sm text-gray-600">
          Menu design next step-la pannalaam
        </p>
      </div>
    </>
  )
}

export default Menu
