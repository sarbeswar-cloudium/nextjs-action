"use server";
import { cookies } from "next/headers";

export const Login = async (request: Request, username: string, password: string) => {
    const baseUrl = process.env.BASE_URL;
    try {
        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);

        const res = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            body: formData.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const data = await res.json();

        // validate the presence of token
        if (data.access_token) {
            const token = data.access_token;

            const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            const cookieStore = await cookies()
            
            cookieStore.set('token', token, {
                httpOnly: true,
                secure: true,
                expires: expiresAt,
                sameSite: 'lax',
                path: '/',
            });
        }
        
        return {
            data: data,
            error: null
        };
    } catch (error) {
        console.log(error);
        return {
            data: null,
            error: error
        };
    }
}
