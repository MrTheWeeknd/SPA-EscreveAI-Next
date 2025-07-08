import { useState } from "react";

export default function PasswordField({ label, ...props }) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-blue-500 pr-10"
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="absolute right-16 top-3 text-gray-400"
        >
        </button>
      </div>
    </div>
  );
}
