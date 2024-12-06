"use client";

import {ClientSideSuspense, LiveblocksProvider} from "@liveblocks/react/suspense";
import {ReactNode} from "react";
import Image from 'next/image'
import {getClerkUsers, getDocumentUsers} from "@/lib/actions/user.actions";
import {useUser} from "@clerk/nextjs";

const Provider = ({ children }: { children: ReactNode }) => {
    const { user: clerkUser } = useUser()

    return (
        <LiveblocksProvider
            authEndpoint="/api/liveblocks-auth"
            resolveUsers={async ({ userIds }) => {
                return await getClerkUsers({userIds})
            }}
            resolveMentionSuggestions={async ({ text, roomId }) => {
                const roomUsers = await getDocumentUsers({
                    roomId,
                    currentUser: clerkUser?.emailAddresses[0].emailAddress!,
                    text
                })

                return roomUsers
            }}
        >
                <ClientSideSuspense fallback={
                    <div className="loader">
                        <Image
                            src="assets/icons/loader.svg"
                            alt="loader"
                            width={32}
                            height={32}
                            className="animate-spin"
                        />
                        Loading...
                    </div>
                }>
                    {children}
                </ClientSideSuspense>
        </LiveblocksProvider>
    )
}

export default Provider