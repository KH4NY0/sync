"use client";

import {ClientSideSuspense, LiveblocksProvider, RoomProvider} from "@liveblocks/react/suspense";
import {ReactNode} from "react";
import Image from 'next/image'

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
            <RoomProvider id="my-room">
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
            </RoomProvider>
        </LiveblocksProvider>
    )
}

export default Provider