import { TopBar } from "./StyledComponents";
import { useSession } from "next-auth/react";
import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from "./StyledComponents";

export default function Topbar() {
  const { data: session, status } = useSession();
  return (
    <TopBar>
      <div>
        <h2>Hi There, {session?.user?.name || " Name"}</h2>
        <p>welcome back!</p>
      </div>
      <SearchInput type="text" placeholder="Search.." />
    </TopBar>
  );
}
