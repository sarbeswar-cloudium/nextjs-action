import Header from "../components/Header";

export default function About() {
    return (
        <>
        <Header/>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="">
                    <h1>About Page</h1>
                </div>
            </main>
        </div>
        </>
    )
}