import { User } from "@/types/user";
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface Props {
  user: User;
}

const CardBlock: React.FC<Props> = ({ user }) => {
  return (
    

    <Card className="w-[350px]">
      <CardHeader className="mt-2">
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        {user.company.name}
      </CardContent>
      <CardFooter className="flex justify-between">
      <Link href={`/users/${user.id}`} legacyBehavior passHref>
        Click me
  </Link>
      </CardFooter>
    </Card>
  )
}

export default CardBlock;
