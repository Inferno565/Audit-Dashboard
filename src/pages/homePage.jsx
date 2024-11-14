import Dashboard from "@/Components/dashboard";
import Sidebar from "@/Components/idebar";

function HomePage() {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="flex-1 ml-16 p-4">
          <Dashboard />
        </div>
      </main>
    </>
  );
}

export default HomePage;
