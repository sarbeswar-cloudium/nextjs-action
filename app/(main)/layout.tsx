import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'

const MainLayout = async ({children}: {children: React.ReactNode}) => {
    const token = (await cookies()).get('token')?.value;

    if (!token) {
        redirect("/unauthorized");
    }

    return (
        <>
        <div className="">
            {children}
        </div>
        </>
    )
}

export default MainLayout;