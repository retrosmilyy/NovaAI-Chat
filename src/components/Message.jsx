function Message(props) {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl max-w-[80%] bg-zinc-800 px-4 py-3 text-sm text-zinc-100">
        {props.text}
      </div>
    </div>
  )
}

export default Message
