/**
 * FreeCodeCamp Daily Coding Challenge (2025-10-23)
 * Problem: Favorite Songs
 * Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-23
 * 
 * Given an array of song objects representing an iPod playlist,
 * return an array containing the titles of the two most played songs,
 * with the most played song first.
 *
 * Explanation:
 * - Each song object has a "title" (string) and a "plays" (integer).
 * - The goal is to find the top two songs based on their play counts.
 * - If multiple songs have the same play count, the first in order is chosen.
 * - The algorithm runs in O(n) time by scanning the list once.
 *
 * Example:
 *  Input:
 *    [
 *      { title: "Sync or Swim", plays: 3 },
 *      { title: "Byte Me", plays: 1 },
 *      { title: "Earbud Blues", plays: 2 }
 *    ]
 *  Output: ["Sync or Swim", "Earbud Blues"]
 */

function favoriteSongs(playlist) {
  let first = { title: "", plays: -1 };
  let second = { title: "", plays: -1 };

  for (let i = 0; i < playlist.length; i++) {
    const song = playlist[i];

    if (song.plays > first.plays) {
      second = first;     // demote old first
      first = song;       // new top song
    } else if (song.plays > second.plays) {
      second = song;      // update only second
    }
  }

  return [first.title, second.title];
}

function favoriteSongs1(playlist) {
  // Sort the playlist in descending order based on 'plays'
  playlist.sort((a, b) => b.plays - a.plays);

  // Return the titles of the top two most played songs
  return [playlist[0].title, playlist[1].title];
}


// Example test cases
console.log(
  favoriteSongs([
    { title: "Sync or Swim", plays: 3 },
    { title: "Byte Me", plays: 1 },
    { title: "Earbud Blues", plays: 2 }
  ])
); // ["Sync or Swim", "Earbud Blues"]

console.log(
  favoriteSongs([
    { title: "Skip Track", plays: 98 },
    { title: "99 Downloads", plays: 99 },
    { title: "Clickwheel Love", plays: 100 }
  ])
); // ["Clickwheel Love", "99 Downloads"]

console.log(
  favoriteSongs([
    { title: "Song A", plays: 42 },
    { title: "Song B", plays: 99 },
    { title: "Song C", plays: 75 }
  ])
); // ["Song B", "Song C"]
