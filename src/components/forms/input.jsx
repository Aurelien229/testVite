/**
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange 
 */
export function Input({ placeholder, value, onChange }) {
    return (
      <div>
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500 mb-5"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  