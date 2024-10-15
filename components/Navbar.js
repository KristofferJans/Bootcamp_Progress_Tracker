import { Sidebar, NavButton, NavContainer } from "./StyledComponents";
import AuthButton from "./AuthButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <Sidebar>
      <h1>Bootcamp Tracker</h1>

      <NavContainer>
        <Link href="/" passHref style={{ width: "100%" }}>
          <NavButton>Dashboard</NavButton>
        </Link>

        <Link href="/sessions" passHref style={{ width: "100%" }}>
          <NavButton>Sessions</NavButton>
        </Link>

        <Link href="/challenges" passHref style={{ width: "100%" }}>
          <NavButton>Challenges</NavButton>
        </Link>

        <NavButton>Homework / ToDo</NavButton>
      </NavContainer>
      <AuthButton></AuthButton>
    </Sidebar>
  );
}
