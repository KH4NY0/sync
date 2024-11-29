import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";


const Header = ({ children, className }: HeaderProps) => {
    return (
        <div className={cn("header", className)}>
            <Link href="/" className="md:flex-1">
                <div className="flex items-center">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Sync's logo"
                        width={42}
                        height={23}
                    />
                    <h1 className="text-xl md:text-3xl">Sync</h1>
                </div>

            </Link>
            {children}
        </div>
    )
}

export default Header