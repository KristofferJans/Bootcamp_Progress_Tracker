import { TopBar } from "./StyledComponents";
import { useSession } from "next-auth/react";

export default function Topbar() {
  const { data: session, status } = useSession();
  return (
    <TopBar>
      <div>
        <h2>Hi There, {session?.user?.name || " Name"}</h2>
        <p>welcome back!</p>
      </div>
      <input type="text" placeholder="Search..." />
    </TopBar>
  );
}
