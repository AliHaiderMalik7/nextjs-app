import Hello from "./components/hello";

export default function Home() {
  console.log("i am home component");
  return (
    <>
      <h1 className="text-3xl">Welcome to nextjs app</h1>
      <Hello />
    </>
  );
}
 