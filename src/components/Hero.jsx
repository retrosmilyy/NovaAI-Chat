const SUGGESTIONS = [
  { title: "Explain a concept", body: "how transformers process language" },
  { title: "Write something", body: "a short story about a lighthouse keeper" },
  { title: "Plan a trip", body: "3 days in Kumasi on a budget" },
  { title: "Debug this", body: "why my React state won't update" },
]

function Hero({ onSuggestionClick }) {
  return (
    <div className="flex flex-1 flex-col justify-center px-5">
      <p className="text-3xl font-semibold text-zinc-100">Hello, Kwame</p>
      <p className="mb-8 text-4xl font-semibold text-zinc-500">
        What are we exploring today?
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SUGGESTIONS.map(s => (
          <button
            key={s.title}
            onClick={() => onSuggestionClick(`${s.title} - ${s.body}`)}
            className="rounded-2xl border border-zinc-800 pb-5 bg-zinc-900 p-4 text-left text-sm text-zinc-400 hover:bg-zinc-800"
          >
            <span className="mb-2 block font-medium text-zinc-100">
              {s.title}
            </span>
            {s.body}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Hero
