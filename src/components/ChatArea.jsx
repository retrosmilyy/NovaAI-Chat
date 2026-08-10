import Hero from "./Hero"
import Message from "./Message"

function ChatArea({ messages, onSuggestionClick }) {
  const isEmpty = messages.length === 0
  return (
    <div className="flex-1 overflow-y-auto px-4">
      <div className="mx-auto flex h-full max-w-2xl flex-col">
        {isEmpty ? (
          <Hero onSuggestionClick={onSuggestionClick} />
        ) : (
          <div className="space-y-3 pt-4">
            {messages.map((message, index) => {
              ;<Message key={index} role={message.role} text={message.text} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatArea
