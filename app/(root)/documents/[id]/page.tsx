import CollaborativeRoom from '@/app/CollaborativeRoom'
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import { getDocument } from "@/lib/actions/room.actions"
import React from "react";
import {getClerkUsers} from "@/lib/actions/user.actions";

const Document = async ({ params: { id } }: SearchParamProps) => {
    const clerkUser = await currentUser();

    if (!clerkUser) redirect("/sign-in");

    const room = await getDocument({
        roomId: id,
        userId: clerkUser.emailAddresses[0]?.emailAddress,
    });

    if (!room) redirect("/");

    const userIds = Object.keys(room.usersAccesses || {});
    console.log("User IDs:", userIds);

    const users = await getClerkUsers({ userIds });
    console.log("Fetched users:", users);

    const usersData = Array.isArray(users)
        ? users.map((user: User) => ({
            ...user,
            userType: room.usersAccesses[user.email]?.includes("room:write")
                ? "editor"
                : "viewer",
        }))
        : [];

    const currentUserType = room.usersAccesses[clerkUser.emailAddresses[0]?.emailAddress]?.includes("room:write")
        ? "editor"
        : "viewer";


    return (
        <main className="flex w-full flex-col items-center">
            <CollaborativeRoom
                roomId={id}
                roomMetadata={room.metadata}
                // @ts-ignore
                users={usersData}
                currentUserType={currentUserType}
            />
        </main>
    );
};


export default Document