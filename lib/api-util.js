/** @format */
import db from "../config/firebase";

export async function getUnVerifiedUsersInDb() {
	// PREPARE users
	const unVerifiedUsersRef = await db
		?.collection("unVerifiedUsers")
		?.orderBy("timestamp", "desc")
		?.limit(15)
		?.get();

	let unVerifiedUsers = await unVerifiedUsersRef?.docs?.map((doc) => ({
		id: doc.id,
		...doc.data(),
		lastSeen: doc?.data()?.lastSeen?.toDate()?.getTime(),
		timestamp: doc?.data()?.timestamp?.toDate()?.getTime(),
	}));

	return JSON.stringify(unVerifiedUsers);
}

export async function getVerifiedUsersInDb() {
	// PREPARE users
	const verifiedUsersRef = await db
		?.collection("verifiedUsers")
		?.orderBy("timestamp", "asc")
		?.limit(15)
		?.get();

	let verifiedUsers = await verifiedUsersRef?.docs?.map((doc) => ({
		id: doc.id,
		...doc.data(),
		lastSeen: doc?.data()?.lastSeen?.toDate()?.getTime(),
		timestamp: doc?.data()?.timestamp?.toDate()?.getTime(),
	}));

	return JSON.stringify(verifiedUsers);
}

export async function getChatsInDB(slug) {
	// PREPARE chats
	if (slug) {
		const chatsRef = await db
			.collection("unVerifiedUsers")
			?.doc(slug)
			?.collection("messages")
			?.orderBy("timestamp", "asc")
			?.limit(100)
			?.get();

		const chatsInDB = await chatsRef?.docs?.map((doc) => ({
			id: doc.id,
			...doc.data(),
			timestamp: doc?.data()?.timestamp?.toDate()?.getTime(),
		}));

		return JSON.stringify(chatsInDB);
	} else {
		return [];
	}
}

//  function to truncate(cut) the string if the length of given string
//   bigger than  given number(n)
export function truncate(string, n) {
	return string?.length > n ? string.substr(0, n - 1) + "...." : string;
}

export function getRandomNumber(max) {
	const rndInt = Math.floor(Math.random() * max) + 1;
	return rndInt;
}

// export async function getChatsInDb(collectionName, userId) {
// 	console.log("userId", userId);
// 	if (collectionName && userId) {
// 		// PREPARE users
// 		const chatMessagesRef = await db
// 			?.collection(collectionName)
// 			?.doc(userId)
// 			?.collection("messages")
// 			?.orderBy("timestamp", "asc")
// 			?.limit(100)
// 			?.get();

// 		const chatMessages = await chatMessagesRef?.docs?.map((doc) => ({
// 			id: doc?.id,
// 			...doc?.data(),
// 			lastSeen: doc?.data()?.lastSeen?.toDate()?.getTime(),
// 			timestamp: doc?.data()?.timestamp?.toDate()?.getTime(),
// 		}));

// 		return JSON.stringify(chatMessages);
// 	}
// }
