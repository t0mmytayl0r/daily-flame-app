export function Button({ children, onClick }: any) {
  return (
    <button onClick={onClick} className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
      {children}
    </button>
  );
}
