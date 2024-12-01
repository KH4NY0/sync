"use client";

import {ClientSideSuspense, LiveblocksProvider, RoomProvider} from "@liveblocks/react/suspense";
import {ReactNode} from "react";
import Image from 'next/image'
import { getClerkUsers } from "@/lib/actions/user.actions";

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <LiveblocksProvider
            authEndpoint="/api/liveblocks-auth"
            resolveUsers={async ({ userIds }) => {
                const users = await getClerkUsers({ userIds })

                return users
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