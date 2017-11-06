var PlayersService = function () {
    var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json"
    var playersData = []
    var players = []
    var myPlayers = []


    this.getPlayersBySearch = function (input) {
        players = []
        // var teams = 
        // [
        //     {
        //         "city": "Arizona",
        //         "name": "Cardinals",
        //         "abr": "ARI",
        //         "conf": "NFC",
        //         "div": "West"
        //     },
        //     {
        //         "city": "Atlanta",
        //         "name": "Falcons",
        //         "abr": "ATL",
        //         "conf": "NFC",
        //         "div": "South"
        //     },
        //     {
        //         "city": "Baltimore",
        //         "name": "Ravens",
        //         "abr": "BAL",
        //         "conf": "AFC",
        //         "div": "North"
        //     },
        //     {
        //         "city": "Buffalo",
        //         "name": "Bills",
        //         "abr": "BUF",
        //         "conf": "AFC",
        //         "div": "EAST"
        //     },
        //     {
        //         "city": "Carolina",
        //         "name": "Panthers",
        //         "abr": "CAR",
        //         "conf": "NFC",
        //         "div": "South"
        //     },
        //     {
        //         "city": "Cincinnati",
        //         "name": "Bengals",
        //         "abr": "CIN",
        //         "conf": "AFC",
        //         "div": "North"
        //     },
        //     {
        //         "city": "Chicago",
        //         "name": "Bears",
        //         "abr": "CHI",
        //         "conf": "NFC",
        //         "div": "North"
        //     },
        //     {
        //         "city": "Cleveland",
        //         "name": "Browns",
        //         "abr": "CLE",
        //         "conf": "AFC",
        //         "div": "North"
        //     },
        //     {
        //         "city": "Dallas",
        //         "name": "Cowboys",
        //         "abr": "DAL",
        //         "conf": "NFC",
        //         "div": "East"
        //     },
        //     {
        //         "city": "Denver",
        //         "name": "Broncos",
        //         "abr": "DEN",
        //         "conf": "AFC",
        //         "div": "West"
        //     },
        //     {
        //         "city": "Detroit",
        //         "name": "Lions",
        //         "abr": "DET",
        //         "conf": "NFC",
        //         "div": "North"
        //     },
        //     {
        //         "city": "Green Bay",
        //         "name": "Packers",
        //         "abr": "GB",
        //         "conf": "NFC",
        //         "div": "North"
        //     },
        //     {
        //         "city": "Houston",
        //         "name": "Texans",
        //         "abr": "HOU",
        //         "conf": "AFC",
        //         "div": "South"
        //     },
        //     {
        //         "city": "Indianapolis",
        //         "name": "Colts",
        //         "abr": "IND",
        //         "conf": "AFC",
        //         "div": "South"
        //     },
        //     {
        //         "city": "Jacksonville",
        //         "name": "Jaquars",
        //         "abr": "JAX",
        //         "conf": "AFC",
        //         "div": "South"
        //     },
        //     {
        //         "city": "Kansas City",
        //         "name": "Chiefs",
        //         "abr": "KC",
        //         "conf": "AFC",
        //         "div": "West"
        //     },
        //     {
        //         "city": "Miami",
        //         "name": "Dolphins",
        //         "abr": "MIA",
        //         "conf": "AFC",
        //         "div": "East"
        //     },
        //     {
        //         "city": "Minnesota",
        //         "name": "Vikings",
        //         "abr": "MIN",
        //         "conf": "AFC",
        //         "div": "North"
        //     },
        //     {
        //         "city": "New England",
        //         "name": "Patriots",
        //         "abr": "NE",
        //         "conf": "AFC",
        //         "div": "East"
        //     },
        //     {
        //         "city": "New Orleans",
        //         "name": "Saints",
        //         "abr": "NO",
        //         "conf": "NFC",
        //         "div": "South"
        //     },
        //     {
        //         "city": "New York",
        //         "name": "Giants",
        //         "abr": "NYG",
        //         "conf": "NFC",
        //         "div": "East"
        //     },
        //     {
        //         "city": "New York",
        //         "name": "Jets",
        //         "abr": "NYJ",
        //         "conf": "AFC",
        //         "div": "East"
        //     },
        //     {
        //         "city": "Oakland",
        //         "name": "Raiders",
        //         "abr": "OAK",
        //         "conf": "AFC",
        //         "div": "West"
        //     },
        //     {
        //         "city": "Philadelphia",
        //         "name": "Eagles",
        //         "abr": "PHI",
        //         "conf": "NFC",
        //         "div": "East"
        //     },
        //     {
        //         "city": "Pittsburgh",
        //         "name": "Steelers",
        //         "abr": "PIT",
        //         "conf": "AFC",
        //         "div": "North"
        //     },
        //     {
        //         "city": "San Diego",
        //         "name": "Chargers",
        //         "abr": "SD",
        //         "conf": "AFC",
        //         "div": "West"
        //     },
        //     {
        //         "city": "Seattle",
        //         "name": "Seahawks",
        //         "abr": "SEA",
        //         "conf": "NFC",
        //         "div": "West"
        //     },
        //     {
        //         "city": "San Francisco",
        //         "name": "49ers",
        //         "abr": "SF",
        //         "conf": "NFC",
        //         "div": "West"
        //     },
        //     {
        //         "city": "St. Louis",
        //         "name": "Rams",
        //         "abr": "STL",
        //         "conf": "NFC",
        //         "div": "West"
        //     },
        //     {
        //         "city": "Tampa Bay",
        //         "name": "Buccaneers",
        //         "abr": "TB",
        //         "conf": "NFC",
        //         "div": "South"
        //     },
        //     {
        //         "city": "Tennessee",
        //         "name": "Titants",
        //         "abr": "TEN",
        //         "conf": "AFC",
        //         "div": "South"
        //     },
        //     {
        //         "city": "Washington",
        //         "name": "Redskins",
        //         "abr": "WAS",
        //         "conf": "NFC",
        //         "div": "East"
        //     }
        // ]

        //     for(var i = 0;i < teams.length; i++){
        //         var team = teams.length[i]
        //         if(team.city == input){
        //             team.city == player.pro_team
        //         }
        //     }
        return playersData.filter(function (player) {
            if (player.pro_team.toLowerCase() == input || player.firstname.toLowerCase() == input || player.position.toLowerCase() == input || player.lastname.toLowerCase() == input || player.fullname.toLowerCase() == input) {
                if (player.jersey !== undefined) {
                    if (player.photo !== "http://sports.cbsimg.net/images/players/unknown-player-170x170.png") {
                        players.push(player);
                    }
                }
            }

        });
    }




    this.getPlayers = function () {
        return players
    }

    this.getMyPlayers = function () {
        return myPlayers
    }

    this.removeMyPlayers = function () {
        return myPlayers
    }

    this.addToMyPlayers = function (id) {
        //in order to add a character to your list you will first need to find 
        //the character by its id in the myPlayers array

        for (var i = 0; i < players.length; i++) {
            var player = players[i]
            if (id == player.id && myPlayers.length < 9) {
                myPlayers.push(player)
            }
        }

    }

    this.removeMyPlayers = function (id) {
        for (var i = 0; i < myPlayers.length; i++) {
            var player = myPlayers[i]
            if (id == player.id) {
                myPlayers.splice(i,1)
            }
            console.log(myPlayers)
        }

    }

    // callback(playersData) 

    function loadPlayersData() {

        //Lets check the localstorage for the data before making the call.
        //Ideally if a user has already used your site 
        //we can cut down on the load time by saving and pulling from localstorage 

        var localData = localStorage.getItem('playersData');
        if (localData) {
            playersData = JSON.parse(localData);
            return;
            //return will short-circuit the loadPlayersData function
            //this will prevent the code below from ever executing
        }

        var url = "https://bcw-getter.herokuapp.com/?url=";
        var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playersData', JSON.stringify(playersData))
            console.log('Finished Writing Player Data to localStorage')
        });
    }
    loadPlayersData(); //call the function above every time we create a new service
}

