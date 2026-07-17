// import { useState } from "react";

// function GenderCheckbox() {
//   const [selected, setSelected] = useState("");

//   return (
//     <div className="flex items-center gap-6 mt-4">

//       {/* Male */}
//       <label className="flex items-center gap-2 cursor-pointer">
//         <input
//           type="radio"
//           name="gender"
//           value="male"
//           checked={selected === "male"}
//           onChange={() => setSelected("male")}
//           className="radio border-slate-400"
//         />
//         <span className="text-white text-base">Male</span>
//       </label>

//       {/* Female */}
//       <label className="flex items-center gap-2 cursor-pointer">
//         <input
//           type="radio"
//           name="gender"
//           value="female"
//           checked={selected === "female"}
//           onChange={() => setSelected("female")}
//           className="radio border-slate-400"
//         />
//         <span className="text-white text-base">Female</span>
//       </label>

//     </div>
//   );
// }

// export default GenderCheckbox;

import { useState } from "react";

function GenderCheckbox({ onCheckboxChange }) {
  const [selected, setSelected] = useState("");

  const handleChange = (value) => {
    setSelected(value);
    onCheckboxChange(value); // ✅ connects to Signup.jsx
  };

  return (
    <div className="flex items-center gap-6 mt-4">

      {/* Male */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="gender"
          value="male"
          checked={selected === "male"}
          onChange={() => handleChange("male")}
          className="radio border-slate-400"
        />
        <span className="text-white text-base">Male</span>
      </label>

      {/* Female */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selected === "female"}
          onChange={() => handleChange("female")}
          className="radio border-slate-400"
        />
        <span className="text-white text-base">Female</span>
      </label>

    </div>
  );
}

export default GenderCheckbox;