type ClassValueType = string | false | null | undefined;

export default function classNames(...values: ClassValueType[]): string {
  return values.filter(Boolean).join(' ');
}
