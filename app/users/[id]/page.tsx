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
    <div className="">
      <div className="text-2xl font-bold">{userInfo.name}</div>
      <div>{userInfo.username}</div>
      <div>{userInfo.email}</div>
      <div>{userInfo.address.street}</div>
      <div>{userInfo.address.city}</div>
      <div>{userInfo.phone}</div>
      <div>{userInfo.website}</div>
      <div>{userInfo.company.name}</div>

    </div>
  );
};

export default UserPage;

