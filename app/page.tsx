import Card from "@/components/CardBlock";
import { fetchUsers } from "@/lib/api";
import { User } from "@/types/user";

export default async function Home() {
  let users: User[] = [];

  try {
    // Загружаем данные прямо в компоненте
    users = await fetchUsers();
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
  return (
    <div>
      {users.map((user)=>(
        <Card user={user} key={user.id}/> 
      ))}
    </div>
    )
}

async function getServerSideProps(){
  try{
    const users = await fetchUsers();
    return{props:{users}}
  }
  catch(error) { console.error(error)

  }
}

