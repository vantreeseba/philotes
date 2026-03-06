import { createFormHookContexts } from '@tanstack/react-form';
import { Field, FieldError, FieldLabel } from '@/components/ui/field.tsx';
import { Input } from '@/components/ui/input.tsx';

export const { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts();

export function TextField({ label, type = 'text' }: { label: string; type?: string }) {
  const field = useFieldContext<string>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid || undefined}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <Input
        id={field.name}
        name={field.name}
        type={type}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
      />
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
}

export function FormError({ formError }: { formError: string | null }) {
  if (!formError) {
    return null;
  }

  return (
    <div role="alert" className="rounded-md border border-red-200 bg-red-50 p-3 text-red-800 text-sm">
      {formError}
    </div>
  );
}
