import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: ContactsPage,
});

function ContactsPage() {
  return <div>home</div>;
}
