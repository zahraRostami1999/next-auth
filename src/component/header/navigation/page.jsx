import Link from "next/link"
function Navigation() {
    return (
        <div>
            <ul className="flex gap-10">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/training">Training</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;
