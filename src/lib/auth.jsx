import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { cookies } from "next/headers";
import db from "./db";

const adapter = new BetterSqlite3Adapter(db, {
    user: 'users',
    session: 'sessions'
});

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === 'production'
        }
    }
});

export async function CreateAuthSession(userId) {
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    (await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )
}

export async function verifyAuth() {
    const sessionCookie = await cookies().get(lucia.sessionCookieName);
    if (!sessionCookie) return {
        user: null,
        session: null
    };
    const sessionId = sessionCookie.value;
    if (!sessionId) return {
        user: null,
        session: null
    };
    const session = await lucia.validateSession(sessionId);
    try {
        if (session.session && session.session.fresh) {
            const sessionCookie = lucia.createSessionCookie(session.session.id);
            (await cookies()).set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            )
        }
        if (!session.session) {
            sessionCookie = lucia.createBlankSessionCookie();
            (await cookies()).set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            )
        }
    }
    catch { }

    return session;
}

export async function destroySession(){
    const {session} = await verifyAuth();
    if(!session){
        return{
            error: 'Unauthorized!'
        }
    }
    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    (await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )
}