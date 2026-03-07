/**
 * Avatar — shows a person photo if available, otherwise a deterministic
 * initials circle.
 *
 * Usage:
 *   <Avatar firstName="Alice" lastName="Smith" avatarPath="/avatars/uuid.jpg" size="md" />
 */

interface AvatarProps {
  firstName: string;
  lastName: string;
  avatarPath?: string | null;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/** Deterministic background color from a name string. */
export function nameToColor(name: string): string {
  const colors = [
    '#e2a87a',
    '#7ab8e2',
    '#7ae2a8',
    '#e27ab8',
    '#a8e27a',
    '#b87ae2',
    '#e2c87a',
    '#7ae2c8',
    '#c87ae2',
    '#e27a7a',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return colors[hash % colors.length];
}

const SIZE_CLASSES: Record<NonNullable<AvatarProps['size']>, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-16 w-16 text-xl',
};

export function Avatar({ firstName, lastName, avatarPath, size = 'md', className = '' }: AvatarProps) {
  const sizeClass = SIZE_CLASSES[size];
  const initials = `${firstName[0] ?? ''}${lastName[0] ?? ''}`.toUpperCase();
  const bgColor = nameToColor(`${firstName} ${lastName}`);

  const base = `inline-flex shrink-0 items-center justify-center rounded-full font-semibold ${sizeClass} ${className}`;

  if (avatarPath) {
    return (
      <img
        src={`/avatars/${avatarPath}`}
        alt={`${firstName} ${lastName}`}
        className={`${base} object-cover`}
        onError={(e) => {
          // Fall back to initials if image fails to load
          const target = e.currentTarget;
          target.style.display = 'none';
          const sibling = target.nextElementSibling as HTMLElement | null;
          if (sibling) sibling.style.display = 'flex';
        }}
      />
    );
  }

  return (
    <span className={`${base} text-white`} style={{ backgroundColor: bgColor }} aria-hidden="true">
      {initials}
    </span>
  );
}
