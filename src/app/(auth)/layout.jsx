import { logout } from "@/action/FormAction";

export default function AuthLayout({ children }) {
    return (
        <html lang="en">
            <body className="">
                <header className="flex justify-between my-3 border-b mx-30 py-5">
                    <p className="flex justify-center items-center">
                        Wellcome Back
                    </p>
                    <form action={logout} className="flex justify-center items-center">
                        <button type="submit" className="bg-blue-500 rounded cursor-pointer py-2 px-5">Logout</button>
                    </form>
                </header>
                <div className="mx-30">
                    {children}
                </div>

            </body>
        </html>
    );
}
