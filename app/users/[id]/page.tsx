import { fetchUserById } from "@/lib/api";
import { User } from "@/types/user";

const UserPage = async ({
  params,
}: {
  params: { id: string };
}) => {
    console.log(params.id)
  let userInfo: User | null = null;
  try {
    userInfo = await fetchUserById(Number(params.id));
  } catch (error) {
    console.error("Error in fetchUsers:", error);
  }

  if (!userInfo) {
    return <div>User not found</div>;
  }

  return (
    <div className="ml-10 mr-10 mt-3 text-center border-solid border-2 border-orange-400 rounded-md">
      <div className="text-2xl font-bold">{userInfo.name}</div>
      <div>{userInfo.username}</div>
      <div className="font-semibold ">{userInfo.email}</div>
      <div>{userInfo.address.street}</div>
      <div>{userInfo.address.city}</div>
      <div>{userInfo.phone}</div>
      <div>{userInfo.website}</div>
      <div>{userInfo.company.name}</div>

    </div>
  );
};

export default UserPage;

