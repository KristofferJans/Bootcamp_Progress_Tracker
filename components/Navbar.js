import { Sidebar, NavButton } from "./StyledComponents";
import AuthButton from "./AuthButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <Sidebar>
      <h1>Bootcamp Tracker</h1>
      <AuthButton></AuthButton>

      <Link href="/" passHref>
        <NavButton>Dashboard</NavButton>
      </Link>

      <Link href="/sessions" passHref>
        <NavButton>Sessions</NavButton>
      </Link>

      <Link href="/challenges" passHref>
        <NavButton>Challenges</NavButton>
      </Link>

      <NavButton>Homework / ToDo</NavButton>
    </Sidebar>
  );
}
