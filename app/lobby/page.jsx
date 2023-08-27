import Board from "@/components/Board";

export default function Home() {

  return (
    <main className="w-full">
      <h1 className="text-center font-mono text-5xl mt-10">Connect-4!!</h1>
      <h3 className="text-center font-sans text-slate-400 text-sm mb-10">created by Harshith ©</h3>

      <Board />
    </main>
  )
}
