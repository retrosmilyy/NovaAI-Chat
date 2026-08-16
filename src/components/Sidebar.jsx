export default function Sidebar() {
  return (
    <div className="flex h-full flex-col bg-zinc-900 p-3">
      <div className="flex items-center gap-2 px-2 pb-5 pt-1">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
        <span className="font-semibold text-zinc-100">Nova</span>
      </div>
      <button
        type="button"
        className="mb-5 w-fit rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500"
      >
        + New chat
      </button>
      <nav className="flex-1 overflow-y-auto">
        <p className="px-2 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Today
        </p>
        <ul>
          <li>
            <a className="block cursor-pointer truncate rounded-lg px-2 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
              Weekend trip ideas near the coast
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
