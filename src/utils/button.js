import Link from "next/link"

const button = (btn) => {
  if(!btn) return;
  return (
    <Link href={btn?.url} target={btn?.target} className="button-primary">
      {btn.title}
    </Link>
  )
}

export default button