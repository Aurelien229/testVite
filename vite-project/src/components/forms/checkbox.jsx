/**
 * 
 * @param {boolean} checked 
 * @param {(v: boolean) => void} onChange 
 * @param {string} label
 * @param {string} id 
 */
export function Checkbox({ checked, onChange, label, id }) {
    return (
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          className=" h-5 w-5 text-blue-600 mb-5"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="ml-2 block text-gray-800 mb-5">{label}</label>
      </div>
    );
  }
  