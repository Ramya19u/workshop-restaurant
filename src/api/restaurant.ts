import axios from "axios";

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  location: string;
  image:string;
}
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjcyOWM0ODQzZmM0NzgwNGM2ZWZiNjQiLCJ1c2VybmFtZSI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE5MDQ2ODQwLCJleHAiOjE3MTkwNTA0NDB9.wOx4sSMzXzbVK2O-PbiTFVB40-AKdPzDuD_oumWCZH0";
export async function getRestaurants() {
  const response = await axios.get<Restaurant[]>(
    "https://restaurant-listing-backend-f2me.onrender.com/restaurant",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
  return response.data;
}