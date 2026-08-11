import Hero from "./Hero.jsx"
import Message from "./Message.jsx"

export default function ChatArea({ messages, isTyping, onSuggestionClick }) {
  const isEmpty = messages.length === 0 && !isTyping

  return (
    <div className={`overflow-y-auto px-4 ${isEmpty ? "" : "flex-1"}`}>
      <div className="mx-auto flex max-w-2xl flex-col">
        {isEmpty ? (
          <Hero onSuggestionClick={onSuggestionClick} />
        ) : (
          <div className="space-y-3 pt-4">
            {messages.map((message, index) => (
              <Message key={index} role={message.role} text={message.text} />
            ))}
            {isTyping && <Message role="nova" thinking />}
          </div>
        )}
      </div>
    </div>
  )
}
