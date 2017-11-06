
function MainController() {
    var loading = true;
    var playersService = new PlayersService(ready)

    this.getPlayersBySearch = function getPlayersBySearch(e) {
        e.preventDefault();
        var team = e.target.team.value;
        playersService.getPlayersBySearch(team)
        updateRoster(playersService.getPlayers());
    }





    this.addToMyPlayers = function addToMyPlayers(id) {
        playersService.addToMyPlayers(id)
        updateMyTeam(playersService.getMyPlayers());
    }

    this.removeMyPlayers = function removeMyPlayers(id) {
        playersService.removeMyPlayers(id)
        updateMyTeam(playersService.getMyPlayers())
        updateRoster(playersService.getPlayers());
    }


    function ready(data) {

        update(data)
    }

    function updateRoster(players) {
        var template = ''
        for (var i = 0; i < players.length; i++) {
            var player = players[i]
            template += `
                            <div class="player-card">
                                <div class="player-image text-center">
                                    <img src="${player.photo}" alt=''>
                                </div>
                                <div class="player-info">
                                    <ul>
                                        <li>Name: ${player.firstname}</li>
                                        <li>Positon: ${player.position}</li>
                                        <li>Team: ${player.pro_team}</li>
                                        <li>
                                            <button class="btn btn-info btn-sm"
                                            onclick="app.controllers.mainController.addToMyPlayers('${player.id}')" id="${player.id}">Add Player
                                            </button>
                                            </li>
                                            </ul>
                                            </div>
                                            </div>
                                            
                                            `
        }
        document.getElementById('player-roster').innerHTML = template
    }

    function updateMyTeam(myPlayers) {
        var template = ''
        for (var i = 0; i < myPlayers.length; i++) {
            var player = myPlayers[i]
            template += `
                            <div class="player-card">
                                <div class="player-image text-center">
                                    <img src="${player.photo}" alt="">
                                </div>
                                <div class="player-info">
                                    <ul>
                                        <li>Name: ${player.firstname}</li>
                                        <li>Positon: ${player.position}</li>
                                        <li>Team: ${player.pro_team}</li>
                                        <li>
                                        <button class="btn btn-info btn-sm"
                                        onclick="app.controllers.mainController.removeMyPlayers('${player.id}')" id="${player.id}">Remove
                                        </button>
                                            </a>
                                            </li>
                                            </ul>
                                            </div>
                                            </div>
                                            
                                            `
        }
        document.getElementById('my-team').innerHTML = template
    }


    var loading = true;

    function ready() {
        loading = false; //stop the spinner

        // //Now that all of our player data is back we can safely setup our bindings for the rest of the view.

        // $('.form-inline').on('submit', function () {
        //     playerService.getPlayersBySomeValue('pro_team', "SF");
        // })


    }
}