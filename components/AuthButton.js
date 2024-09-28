import { signOut, signIn, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  console.log(session);

  if (session) {
    return (
      <>
        <button className={`${btn} ${logout}`} onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button className={`${btn} ${login}`} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}
