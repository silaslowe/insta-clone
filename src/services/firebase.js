import user from '../components/sidebar/user';
import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.length > 0;
}

export async function getUserByUserId(userId) {
  const result = await firebase.firestore()
  .collection('users')
  .where('userId', '==', userId)
  .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))
  return user
}

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore()
  .collection('users')
  .limit(10)
  .get();

  return result.docs
  .map((user) => ({ ...user.data(), docId: user.id}))
  .filter((profile) => profile.userId !== userId && !following.includes(profile.userId))
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,  //currently logged in user document id
  profileId,  // user requested to follow
  isFollowingProfile // true/fasle Am I following this person
  ){
  return firebase
  .firestore()
  .collection('users')
  .doc(loggedInUserDocId)
  .update({
    following: isFollowingProfile
    ? FieldValue.arrayRemove(profileId)
    : FieldValue.arrayUnion(profileId)
  })
}


export async function updateFollowedUserFollowers(
  profileDocId, 
  loggedInUserDocId,
  isFollowingProfile // true/fasle Am I following this person
  ){
  return firebase
  .firestore()
  .collection('users')
  .doc(profileDocId)
  .update({
    followers: isFollowingProfile
    ? FieldValue.arrayRemove(loggedInUserDocId)
    : FieldValue.arrayUnion(loggedInUserDocId)
  })
}
