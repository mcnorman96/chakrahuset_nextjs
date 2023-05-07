import Link from "next/link"

const button = (btn) => {
  return (
    <Link href={btn?.url} target={btn?.target} className="button-primary">
      {btn.title}
    </Link>
  )
}

export default button