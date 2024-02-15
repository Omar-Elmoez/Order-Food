import Navbar from "../components/Navbar";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>An Error Occurred!</h1>
        <p>Couldn't find this page.</p>
      </main>
    </>
  )
}

export default ErrorPage