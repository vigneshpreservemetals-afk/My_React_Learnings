import { useState } from "react";
import formFields from "./form-config/StudentFormJson.json";

export default function JsonLoginForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFields.map((value, index) => {
          return (
            <div key={index}>
              <label>{value.fieldLabel}</label>

              {(value.fieldType === "text" ||
                value.fieldType === "password" ||
                value.fieldType === "number") && (
                <input
                  type={value.fieldType}
                  name={value.fieldName}
                  onChange={handleChange}
                />
              )}

              {value.fieldType === "select" && (
                <select
                  name={value.fieldName}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>

                  {value.option?.map((option, optionIndex) => (
                    <option
                      key={optionIndex}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          );
        })}

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}