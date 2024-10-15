import { signOut, signIn, useSession } from "next-auth/react";
import { LoginButton } from "./StyledComponents";

export default function AuthButton() {
  const { data: session } = useSession();

  console.log(session);

  if (session) {
    return (
      <>
        <LoginButton className={`$LogOut`} onClick={() => signOut()}>
          Sign out
        </LoginButton>
      </>
    );
  }
  return (
    <>
      <LoginButton className={`Login`} onClick={() => signIn()}>
        Sign in
      </LoginButton>
    </>
  );
}
