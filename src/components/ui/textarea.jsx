export function Textarea(props) {
  return (
    <textarea
      className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
      {...props}
    />
  );
}