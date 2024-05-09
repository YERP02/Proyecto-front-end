export type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  //props.title
  //props.subtitle

  return <header>{title}</header>;
}

export default Header;
