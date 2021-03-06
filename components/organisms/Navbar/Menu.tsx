import cx from "classnames";
// cx itu sama dengan classnames , both are fine
import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}
export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;
  const classActive = cx({
    "nav-link": true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classActive} aria-current="page" href="#">
          {title}
        </a>
      </Link>
    </li>
  );
}
