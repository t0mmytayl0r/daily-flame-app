export function Card({ children }: any) {
  return <div className="bg-white shadow rounded-xl p-4">{children}</div>;
}

export function CardContent({ children }: any) {
  return <div>{children}</div>;
}
