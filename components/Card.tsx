import { User } from "@/types/user";

interface Props {
  user: User;
}

const Card: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};
export default Card;
