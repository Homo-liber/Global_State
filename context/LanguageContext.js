import { Text } from "react-native";
import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // language: "English", "Deutsch"
  const [language, setLanguage] = useState("English");

  function changeLanguage(chosenLanguage) {
    // check the current language and switch it to the chosen language
    setLanguage(chosenLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
