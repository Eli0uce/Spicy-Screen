async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // When the user laucn Spotify, make a loading screen.
  Spicetify.Player.addEventListener("onready", () => {
    Spicetify.showNotification("Loading...");
  });
}

export default main;
