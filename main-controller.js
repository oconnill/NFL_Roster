function MainController() {
    var playersService = new PlayersService()


    var loading = true;

    function ready() {
        loading = false; //stop the spinner

        //Now that all of our player data is back we can safely setup our bindings for the rest of the view.

        $('some-button').on('click', function () {
            var teamSF = playerService.getPlayersByTeam("SF");
        }

    }
}