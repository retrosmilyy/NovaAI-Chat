import { useState } from "react"
import Topbar from "./components/Topbar.jsx"
import ChatArea from "./components/ChatArea.jsx"
import InputBar from "./components/InputBar.jsx"
import Sidebar from "./components/Sidebar.jsx"

const can_reply =
  "Here's a first pass - happy to go deeper on any part of this."

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const isEmpty = messages.length === 0 && !isTyping

  const sendMessage = text => {
    setMessages(prev => [...prev, { role: "user", text }])
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { role: "nova", text: can_reply }])
    }, 1200)
  }

  const handleSend = () => {
    if (!input.trim()) return
    sendMessage(input)
    setInput("")
  }

  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <div
          className={`flex flex-1 flex-col ${isEmpty ? "justify-center" : ""}`}
        >
          <ChatArea
            messages={messages}
            isTyping={isTyping}
            onSuggestionClick={sendMessage}
          />
          <InputBar value={input} onChange={setInput} onSend={handleSend} />
        </div>
      </div>
    </div>
  )
}

export default App
