export function Input({ label, type="text", value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

