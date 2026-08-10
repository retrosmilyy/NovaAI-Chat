function Message({ text, role }) {
  const isUser = role === "user"
  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <div
        className={
          isUser
            ? "max-w-[80%] rounded-2xl bg-violet-600 px-4 py-3 text-sm text-white"
            : "max-w-[80%] rounded-2xl bg-zinc-800 px-4 py-3 text-sm text-zinc-100"
        }
      >
        {text}
      </div>
    </div>
  )
}

export default Message
