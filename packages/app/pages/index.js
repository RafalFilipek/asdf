import foo from "pkg-ts";
import { Button } from "pkg-react";

export default function Index() {
  return (
    <div>
      hello {foo}! <Button>LOL</Button>
    </div>
  );
}
