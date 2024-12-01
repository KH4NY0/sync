"use server"

import {clerkClient} from "@clerk/nextjs/server";
import {parseStringify} from "@/lib/utils";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
    try {
        // @ts-ignore
        const { data } = await clerkClient.users.getUserList({
            emailAddress: userIds
        })

        const users = data.map((user: { id: any; firstName: any; lastName: any; emailAddresses: { emailAddress: any; }[]; imageUrl: any; }) => ({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.emailAddresses[0].emailAddress,
            avatar: user.imageUrl
        }))

        const sortedUsers = userIds.map((email) => users.find((user: { email: string; }) => user.email === email))

        return parseStringify(sortedUsers)

    } catch (error) {
        console.log(`Error fetching users: ${error}`)
    }
}

