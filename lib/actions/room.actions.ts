"use server"

import { nanoid } from 'nanoid'
import {liveblocks} from "@/lib/liveblocks";
import {RoomAccesses} from "@liveblocks/node";
import {revalidatePath} from "next/cache";
import {parseStringify} from "@/lib/utils";

const createDocument = async ({ userId, email }: CreateDocumentParams) => {
    const roomId = nanoid()

    try {
        const metadata = {
            creatorId: userId,
            email,
            title: 'Untitled'
        }

        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        }

        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: []
        });

        revalidatePath('/')

        return parseStringify(room)

    } catch (error) {
        console.log(`Error happened while creating a room: ${error}`)
    }

}

export default createDocument