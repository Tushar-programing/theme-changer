import { useContext, useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const [number, setNumber] = useState(0)

  const lightTheme = () => {
    setThemeMode("light")
    setNumber (number - 1)
  }

  const darkTheme = () => {
    setThemeMode("dark")
    setNumber (number + 1)
  }
  console.log(number)
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add((themeMode))
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme, number}} >
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="tushar w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
               <Card/>
            </div>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default App
 