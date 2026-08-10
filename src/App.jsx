import { useState } from "react"
import Topbar from "./components/Topbar.jsx"
import ChatArea from "./components/ChatArea.jsx"

function App() {
  const [messages, setMessages] = useState([])

  const sendMessage = text => {
    setMessages(prev => [...prev, { role: "user", text }])
  }

  return (
    <div className="flex h-screen flex-col bg-zinc-950">
      <Topbar />
      <ChatArea messages={messages} onSuggestionClick={sendMessage} />
    </div>
  )
}

export default App
