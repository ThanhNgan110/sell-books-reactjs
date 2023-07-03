import React from "react";

const InputField = ({ value, label, type, onChange, onBlur, placeholder }) => {
  return (
    <> 
      <div class="form-floating mb-3">
        <input
          value={value}
          type={type}
          class="form-control"
          id="floatingInput"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </>
  );
};

export default InputField;
