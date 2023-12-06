type ErrorMessageProps = {
  error: string;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return <div>{error}</div>;
}
