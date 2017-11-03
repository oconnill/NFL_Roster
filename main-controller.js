function MainController() {
    var playersService = new PlayersService()

    this.add = function add(id) {
        console.log(id)
        playersService.addToMyPlayers(id, updateMyChar)
    }
    

    playersService.getPlayersByPosition(ready)
    playersService.getPlayersByTeam(ready)

    function ready(data) {

        update(data)
    }

    function update(list) {
        var elem = document.getElementById('player-list')
        elem.innerHTML = ''
        var template = ''
        for (var i in list) {
            var player = list[i];
            template += `
          <div class="card">
            <h3>${player.name}</h3>
            <img src='${player.name}'>
            <div>
              <button class="btn-success" id="${player.id}" onclick="app.controllers.mainController.add('${player.id}')">Add to Team</button>
            </div>
          <div>
          `
            elem.innerHTML = template

        }

    }

    var loading = true;

    function ready() {
        loading = false; //stop the spinner

        //Now that all of our player data is back we can safely setup our bindings for the rest of the view.

        $('some-button').on('click', function () {
            var teamSF = playerService.getPlayersByTeam("SF");
        })

    }

}
