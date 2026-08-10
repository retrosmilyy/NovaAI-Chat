function Topbar() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <button
        type="button"
        className="rounded-lg px-2 py-1 font-semibold text-zinc-100 hover:bg-zinc-800"
      >
        Nova 1.1
        <span className="ml-2 rounded-full bg-zinc-800 px-2 py-0.5 text-xs font-normal text-zinc-800">
          Pro
        </span>
      </button>
    </div>
  )
}

export default Topbar
