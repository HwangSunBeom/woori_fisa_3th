'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: 'Regiser', href: '/register' },
    { name: 'Logout', href: '/logout' },
    { name: 'Forgot Password?', href: '/forgot-password' },
];

export default function AuthLayout({children}) {

    const pathName = usePathname();
    console.log(pathName);

    return (
        <section>
            {/* navLinks배열과 <Link />를 활용하여 네비게이팅 가능하도록 화면 출력 */}
            <div>
                {navLinks.map(link => {

                    // 사용자가 현재 접속 중인 URL 세그먼트의 경로가 link.href 값으로 시작하는지
                    const isActive = pathName.startsWith(link.href);

                    return (
                        <Link className={`mr-2 text-blue-400 ${isActive ? 'text-red-400' : ''}`} 
                            href={link.href} 
                            key={link.name}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>

            {/* 현재 사용자가 어떤 페이지에 접속 중인지 활성 링크 적용 */}
            {children}
        </section>
    );
}