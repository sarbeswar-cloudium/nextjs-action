'use client';
import Link from "next/link";

export default function Header() {
    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                    <li><Link href={"/login"}>Login</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}