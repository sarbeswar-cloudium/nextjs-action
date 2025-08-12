'use client';
import Link from "next/link";
import { Logout } from '@/app/services/userService';
import { redirect } from "next/navigation";

export default function Header() {

    const handleLogout = async () => {
        const res = await Logout();

        if (res == 0) {
            return false;
        } else {
            redirect("/login");
        }
    }

    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link href={"/dashboard"}>Dashboard</Link></li>
                <li><a href="#" onClick={handleLogout}>Logout</a></li>
                <li style={{display: 'none'}}>
                    <details>
                    <summary>Parent</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
        </>
    )
}