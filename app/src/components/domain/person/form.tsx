import { createFormHook } from '@tanstack/react-form';
import { X } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';
import type { Label_ListFragment, CreatePersonInput as NewPerson } from '@/__generated__/graphql.js';
import { Button } from '@/components/ui/button.js';
import { FieldGroup } from '@/components/ui/field.js';
import { FormError, fieldContext, formContext, TextField } from '@/components/ui/form-field.tsx';

const personSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().min(1, 'Email is required.').email('Please enter a valid email address.'),
});

export interface PersonFormValue {
  person: NewPerson;
  labelIds: string[];
}

export interface PersonFormInitialValues {
  firstName: string;
  lastName: string;
  email: string;
  labelIds?: string[];
}

interface PersonFormProps {
  availableLabels: Label_ListFragment[];
  initialValues?: PersonFormInitialValues;
  submitLabel?: string;
  onSubmit: (value: PersonFormValue) => Promise<void>;
  onCancel: () => void;
}

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldComponents: { TextField },
  formComponents: {},
  fieldContext,
  formContext,
});

export function PersonForm({ availableLabels, initialValues, submitLabel, onSubmit, onCancel }: PersonFormProps) {
  const [formError, setFormError] = useState<string | null>(null);
  const [selectedLabelIds, setSelectedLabelIds] = useState<Set<string>>(new Set(initialValues?.labelIds ?? []));

  const toggleLabel = (id: string) => {
    setSelectedLabelIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const form = useAppForm({
    defaultValues: {
      firstName: initialValues?.firstName ?? '',
      lastName: initialValues?.lastName ?? '',
      email: initialValues?.email ?? '',
    },
    validators: {
      onSubmit: personSchema,
    },
    onSubmit: async ({ value }) => {
      setFormError(null);
      try {
        await onSubmit({
          person: value,
          labelIds: Array.from(selectedLabelIds),
        });
        if (!initialValues) {
          form.reset();
          setSelectedLabelIds(new Set());
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setFormError(err.message);
        } else {
          setFormError('An unexpected error occurred.');
        }
      }
    },
  });

  const defaultSubmitLabel = initialValues ? 'Save' : 'Create';
  const submittingLabel = initialValues ? 'Saving...' : 'Creating...';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup className="gap-4">
        <div className="grid grid-cols-2 gap-4">
          <form.AppField name="firstName">{() => <TextField label="First Name" />}</form.AppField>
          <form.AppField name="lastName">{() => <TextField label="Last Name" />}</form.AppField>
        </div>
        <form.AppField name="email">{() => <TextField label="Email" />}</form.AppField>
        {availableLabels.length > 0 && (
          <div className="space-y-2">
            <p className="font-medium text-sm">Labels</p>
            {/* Selected label chips */}
            {selectedLabelIds.size > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {availableLabels
                  .filter((l) => selectedLabelIds.has(l.id))
                  .map((l) => (
                    <span key={l.id} className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs">
                      <span
                        className="inline-block h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: l.color }}
                        aria-hidden="true"
                      />
                      {l.label}
                      <button
                        type="button"
                        onClick={() => toggleLabel(l.id)}
                        className="ml-0.5 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label={`Remove label ${l.label}`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
              </div>
            )}
            {/* Available label picker */}
            {availableLabels.some((l) => !selectedLabelIds.has(l.id)) && (
              <div className="flex flex-wrap gap-1.5 rounded-md border border-border p-3">
                {availableLabels
                  .filter((l) => !selectedLabelIds.has(l.id))
                  .map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => toggleLabel(l.id)}
                      className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs hover:bg-muted transition-colors cursor-pointer"
                    >
                      <span
                        className="inline-block h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: l.color }}
                        aria-hidden="true"
                      />
                      {l.label}
                    </button>
                  ))}
              </div>
            )}
          </div>
        )}
        <FormError formError={formError} />
        <div className="flex gap-2">
          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <Button type="submit" disabled={!canSubmit || isSubmitting}>
                {isSubmitting ? submittingLabel : (submitLabel ?? defaultSubmitLabel)}
              </Button>
            )}
          </form.Subscribe>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
