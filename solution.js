function getTopScorers(playerList) {
    return playerList
        .slice(0, 10)
        .filter(player => player.score > 8)
        .map(player => player.name)
        .join(", ");
}
