export default function InputField({ label, ...props }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-blue-500"

        {...props}
      />
    </div>
  );
}
