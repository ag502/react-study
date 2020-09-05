import React from 'react';
import logo from './logo.svg';
import MyComponent from "./MyComponent";
import CustomTextInput from "./CustomTextInput";
import AutoFocusTextInput from "./AutoFocusTextInput";

function App() {
  return (
    <div className="App">
      <MyComponent/>
      <CustomTextInput/>
      <AutoFocusTextInput/>
    </div>
  );
}

export default App;
