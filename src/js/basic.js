// TODO: write your code here
export default function sortHP(playersList) {
  playersList.sort((a, b) => b.health - a.health);
  return playersList;
}
