import CollaborativeRoom from '@/app/CollaborativeRoom';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getDocument } from '@/lib/actions/room.actions';
import React from 'react';
import { getClerkUsers } from '@/lib/actions/user.actions';

const Document = async ({ params: { id } }: SearchParamProps) => {
    const clerkUser = await currentUser();

    // Redirect to sign-in if no user is logged in
    if (!clerkUser) redirect('/sign-in');

    // Fetch the room details
    const room = await getDocument({
        roomId: id,
        userId: clerkUser.emailAddresses[0].emailAddress,
    });

    // Redirect to home if the room doesn't exist
    if (!room) redirect('/');

    // Extract user IDs from room access data
    const userIds = Object.keys(room.usersAccesses || {});

    // Initialize users array and handle potential errors
    let users = [];
    try {
        users = await getClerkUsers({ userIds }) || [];
    } catch (error) {
        console.error('Error fetching users:', error);
    }

    // Ensure users is an array before mapping
    const usersData = (Array.isArray(users) ? users : []).map((user: User) => ({
        ...user,
        userType: room.usersAccesses[user.email]?.includes('room:write')
            ? 'editor'
            : 'viewer',
    }));

    // Determine the current user's access level
    const currentUserType = room.usersAccesses[clerkUser.emailAddresses[0].emailAddress]?.includes('room:write')
        ? 'editor'
        : 'viewer';

    // Render the CollaborativeRoom component
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

export default Document;
