import { User } from "@/types/user";

const BASE_URL = "https://jsonplaceholder.typicode.com";
export const fetchUsers = async ():Promise<User[]> => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    console.log(response)
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in fetchUsers:", error);
    throw new Error("Failed to fetch users.");
  }
};

export const fetchUserById= async (id:number):Promise<User> => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error in fetchUsers:", error);
      throw new Error("Failed to fetch users.");
    }
  };
  