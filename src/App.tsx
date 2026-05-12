import { TornAPI } from "torn-client";
import "./App.css";
import { useEffect } from "react";

function App() {
  const client = new TornAPI({
    apiKeys: [import.meta.env.VITE_FULL_ACCESS_KEY],
    comment: "TornTraderTools",
  });

  // Example: Fetch a user's profile using a context method
  async function getUserProfile() {
    try {
      const user = await client.user.profile();
      console.log(user.profile.name, user.profile.level, user.profile.gender);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return <main>Hello world</main>;
}

export default App;
