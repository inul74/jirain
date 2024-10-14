import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <Input />
      <Button size="lg" variant="primary">
        Primary123
      </Button>
      <Button size="sm" variant="secondary">
        Secondary
      </Button>
      <Button size="xs" variant="tertiary">
        Tertiary
      </Button>
      <Button size="sm" variant="destructive">
        Destructive
      </Button>
      <Button size="sm" variant="outline">
        Outline
      </Button>
      <Button size="sm" variant="ghost">
        Ghost
      </Button>
      <Button size="sm" variant="muted">
        Muted
      </Button>
    </div>
  );
}
