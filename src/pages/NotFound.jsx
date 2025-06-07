import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("404");

  return (
    <div className="text-center py-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Sorry, the page you’re looking for doesn’t exist.</p>
    </div>
  );
}
