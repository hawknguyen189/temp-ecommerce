import React, {useState} from "react";

const warningObject = {
  get throwWarning() {
    throw new Error("You probably forgot to put <MyProvider>.");
  }
};
const StoreContext = React.createContext(warningObject);
const StoreContextProvider = (props) => {
  const [tag,setTag] = useState("all");
  return(
    <StoreContext.Provider value={[tag,setTag]}>
      {props.children}
    </StoreContext.Provider>
  )
}

export {StoreContext, StoreContextProvider};