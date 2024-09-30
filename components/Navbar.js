import { Sidebar, NavButton } from "./StyledComponents";
import AuthButton from "./AuthButton";

export default function Navbar() {
  return (
    <Sidebar>
      <h1>Bootcamp Tracker</h1>
      <AuthButton></AuthButton>
      <NavButton>Dashboard</NavButton>
      <NavButton>Topics</NavButton>
      <NavButton>All Challenges</NavButton>
      <NavButton>Homework / ToDo</NavButton>
    </Sidebar>
  );
}
