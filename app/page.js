import { Button } from "../components/ui/button.jsx";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <h1>hi</h1>
      <Button>hlo</Button>
      <UserButton/>
    </div>
  );
}
