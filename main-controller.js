
function MainController() {
    var loading = true;
    var playersService = new PlayersService(ready)
    
    this.getPlayersBySearch = function getPlayersBySearch(e){
        // debugger
        e.preventDefault();
        var team = e.target.team.value;
        playersService.getPlayersBySearch(team)
        updateRoster(playersService.getPlayers());
      }





    this.addPlayer = function addPlayer(i) {
        playersService.addToMyPlayers()
    }


    
    
    function ready(data) {

        update(data)
    }

    function updateRoster(players) {
        var elem = document.getElementById('player-roster')
        elem.innerHTML = ''
        var template = ''
        for (var i = 0; i < players.length; i++)
        var player = players[i]
            template += `
            <div class="row">
            <div class="col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-body panel-player">
                        <div class="player-roster">
                            <div class="player-card">
                                <div class="player-image text-center">
                                    <img src="${player.photo}">
                                </div>
                                <div class="player-info">
                                    <ul>
                                        <li>Name: ${player.firstname}</li>
                                        <li>Positon: ${player.position}</li>
                                        <li>Team: ${player.pro_team}</li>
                                        <li>
                                            <a href="#" class="btn btn-info btn-sm">
                                                <span class="id="${player.id}" glyphicon glyphicon-plus" onclick="app.controllers.mainController.add('${player.id}')"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

          `
            elem.innerHTML = template

        }



    var loading = true;

    function ready() {
        loading = false; //stop the spinner

        //Now that all of our player data is back we can safely setup our bindings for the rest of the view.

        $('.form-inline').on('submit', function () {
            playerService.getPlayersBySomeValue('pro_team',"SF");
        })

    }

}