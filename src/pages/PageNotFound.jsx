// import { useToasts } from "react-hot-toast";

function PageNotFound() {
  //   const { error } = useToasts();

  const handleLogin = () => {
    // Logic to handle login
    // If login fails, show error toast
    // error("Login failed. Please try again.");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default PageNotFound;
