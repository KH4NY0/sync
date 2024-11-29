import Link from "next/link";


const Header = ({ children }: HeaderProps) => {
    return (
        <div className="header">
            <Link href="/" className="md:flex-1">
                <h1 className="text-3xl md:text-5xl">Sync</h1>
            </Link>
            {children}
        </div>
    )
}

export default Header