import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center align-middle mt-12">
        <Button>jira</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="muted">muted</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="teritary">teritary</Button>
      </div>
      <div className="flex flex-col items-center justify-center align-middle mt-12">
        <Input />
        <Select />
      </div>
    </>
  );
}
