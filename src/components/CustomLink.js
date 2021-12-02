import Button from "./Button";
import { Fragment } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

export default function CustomLink({ children, to, name, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Fragment>
      <Link
        to={to}
        {...props}
      >
        <Button isActive={match} name={name} />
      </Link>
    </Fragment>
  );
}
