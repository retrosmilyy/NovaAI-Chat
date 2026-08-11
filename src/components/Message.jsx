export default function Message({ text, role, thinking }) {
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
        {thinking ? (
          <span className="flex gap-1 py-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.3s]" />
          </span>
        ) : (
          text
        )}
      </div>
    </div>
  )
}
