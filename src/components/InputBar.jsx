function InputBar({ onChange, value }) {
  return (
    <div className="px-4 pb-5 pt-2">
      <div className="mx-auto flex max-w-2xl items-center gap-2 rounded-3xl border border-zinc-800 bg-zinc-900 px-3 py-2">
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Ask Nova anything..."
          className="flex-1 bg-transparent py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
        />
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-zinc-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default InputBar
