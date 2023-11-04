import React, { useState } from "react";

function TextInputExample() {
  const [value, setValue] = useState();

  return (
    <TextInput
      size="large"
      value={value}
      placeholder="example@example.com"
      onChange={setValue}
    />
  );
}
export default TextInputExample;
