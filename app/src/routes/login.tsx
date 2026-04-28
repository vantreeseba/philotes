import { useMutation } from '@apollo/client';
import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { graphql } from '@/__generated__/gql.js';
import { Button } from '@/components/ui/button.js';
import { Input } from '@/components/ui/input.js';
import { Label } from '@/components/ui/label.js';
import { setToken } from '@/lib/auth.js';

// ── GraphQL mutations ─────────────────────────────────────────────────────────

const REQUEST_MAGIC_LINK = graphql(`
  mutation RequestMagicLink($email: String!) {
    requestMagicLink(email: $email)
  }
`);

const VERIFY_MAGIC_LINK = graphql(`
  mutation VerifyMagicLink($token: String!) {
    verifyMagicLink(token: $token) {
      token
      userId
    }
  }
`);

// ── Route ─────────────────────────────────────────────────────────────────────

export const Route = createFileRoute('/login')({
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === 'string' ? search.token : undefined,
  }),
  component: LoginPage,
});

// ── Component ─────────────────────────────────────────────────────────────────

function LoginPage() {
  const navigate = useNavigate();
  const { token } = useSearch({ from: '/login' });

  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [requestLink, { loading: requesting }] = useMutation(REQUEST_MAGIC_LINK);
  const [verifyLink, { loading: verifying }] = useMutation(VERIFY_MAGIC_LINK);

  // Auto-verify when a token arrives in the URL
  useEffect(() => {
    if (!token) return;
    verifyLink({ variables: { token } })
      .then(({ data }) => {
        if (data?.verifyMagicLink.token) {
          setToken(data.verifyMagicLink.token);
          navigate({ to: '/' });
        }
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Invalid or expired link.');
      });
  }, [token, verifyLink, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await requestLink({ variables: { email } });
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  // Verifying token from URL
  if (token && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-2">
          <p className="text-lg font-medium">{verifying ? 'Signing you in…' : 'Redirecting…'}</p>
        </div>
      </div>
    );
  }

  // Email sent confirmation
  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-sm space-y-4 p-6 border rounded-lg shadow-sm bg-card text-center">
          <h1 className="text-2xl font-semibold">Check your email</h1>
          <p className="text-sm text-muted-foreground">
            We sent a sign-in link to <strong>{email}</strong>. It expires in 15 minutes.
          </p>
          <button
            type="button"
            className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground"
            onClick={() => setSent(false)}
          >
            Use a different email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm space-y-6 p-6 border rounded-lg shadow-sm bg-card">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Sign in to Philotes</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and we'll send you a sign-in link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="w-full" disabled={requesting}>
            {requesting ? 'Sending…' : 'Send sign-in link'}
          </Button>
        </form>
      </div>
    </div>
  );
}
