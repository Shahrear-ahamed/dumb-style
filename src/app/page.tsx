import Header from "./(home)/_components/header";

export default function ComingHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">Home</main>
    </div>
  );
}
