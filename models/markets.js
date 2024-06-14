export const displayMarkets = [
    {
        id: 10,
        name: "Football",
        frName: "Football",
        markets: [
            {
                id: 2,
                name: "1x2",
                key: "match-result",
                handicap: "n/a",
                mobile:true,
                selections: [
                    { name: "1", id:"1" },
                    { name: "X", id:"2" },
                    { name: "2",  id:"3" }
                ]
            },
            {
                id: 7202,
                name: "Double chance",
                key: "double-chance",
                handicap: "n/a",
                mobile:false,
                selections: [
                    { name: "1 or X", id:"7" },
                    { name: "1 or 2", id:"8" } ,
                    { name: "X or 2", id:"9" }
                ]
            },
            {
                id: 259,
                name: "Over/Under +2.5",
                key: "under-over-2.5",
                handicap: "2.50",
                mobile:false,
                selections: [
                    { name: "Under", id:"31" },
                    { name: "Over", id:"30" } ,
                ]
            },
        ]
    },
    {
        id: 4,
        name: "Basketball",
        frName: "Basketball",
        markets: [
            {
                id: 306,
                name: "Match Result (Excluding Overtime)",
                key: "match-result-excluding-overtime-",
                handicap: "n/a",
                mobile:true,
                selections: [
                    { name: "1", id:"1" },
                    { name: "X", id:"2" },
                    { name: "2", id:"3" }
                ]
            },
            {
                id: 115,
                name: "Money Line",
                key: "money-line",
                handicap: "n/a",
                mobile:false,
                selections: [
                    { name: "1", id:"1" },
                    { name: "2", id:"3" }
                ]
            },
           
        ]
    },
    {
        id: 3,
        name: "Baseball",
        frName: "Baseball",
        markets: [
            {
                id: 117,
                name: "Money Line",
                key: "money-line",
                mobile:true,
                handicap: "n/a",
                selections: [
                    { "name": "1", "id":1 },
                    { "name": "2", "id": 3 }
                ]
            },
            {
                id: 7754,
                name: "1x2", 
                handicap: "n/a",
                key: "match-result",
                selections: [
                    {
                        "name": "1",
                        "id":"1"
                    },
                    {
                        "name": "X",
                        "id":"2"
                    },
                    {
                        "name": "2",
                        "id":"3"
                    }
                ]
            },
  
        ]
    },
    {
        "id": 15,
        "name": "Ice Hockey",
        "frName": "Hockey sur glace",
        "markets": [
            {
            "id": 202,
            "name": "1x2(60 Minutes Betting)",
            "key": "60-minutes-betting",
            mobile:true,
            handicap: "n/a",
            "selections": [
                {
                    "name": "1",
                    "id": 1
                },
                {
                    "name": "X",
                    "id": 2
                },
                {
                    "name": "2",
                    "id": 3
                }
            ]
            },
            {
                "id": 6713,
                "name": "Double chance",
                handicap: "n/a",
                "key": "double-chance",
                "selections": [
                    {
                        "name": "1 OR X",
                        "id": 7
                    },
                    {
                        "name": "X OR 2",
                        "id": 9
                    },
                    {
                        "name": "1 0R 2",
                        "id": 8
                    }
                ]
            },
            {
                "id": 183,
                "name": "Money Line",
                handicap: "n/a",
                "key": "money-line",
                "selections": [
                    {
                        "name": "1",
                        "id": 1
                    },
                    {
                        "name": "2",
                        "id": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 24,
        "name": "Tennis",
        "frName": "Tennis",
        "markets": [
            {
                "id": 77,
                "name": "First Set Winner",
                handicap: "n/a",
                mobile:true,
                "key": "first-set-winner",
                "selections": [
                    {
                        "name": "1",
                        "id" : "25"
                    },
                    {
                        "name": "2",
                        "id" : "26"
                    }
                ]
            },
            {
                "id": 322,
                "name": "1x2",
                handicap: "n/a",
                "key": "match-result",
                "selections": [
                    {
                        "name": "1",
                        "id" : "25"
                    },
                    {
                        "name": "2",
                        "id" : "26"
                    }
                ]
            },
            {
                "id": 6930,
                "name": "Doubles Match",
                "fr_name": "MATCH DE DOUBLE",
                handicap: "n/a",
                "key": "doubles-match",
                "selections": [
                    {
                        "name": "1",
                        "id" : "12"
                    },
                    {
                        "name": "2",
                        "id" : "13"
                    }
                ]
            },
            {
            "id": 6481,
            "name": "Total Games Over/Under",
            handicap: "n/a",
            "key": "total-games-over-under",
            "selections": [
            {
                "name": "1",
                "id" : "12"
            },
            {
                "name": "2",
                "id" : "13"
            }
            ]
        }
        ]
    },
    {
        "id": 269467,
        "name": "Table Tennis",
        "frName": "Tennis de table",
        "markets": [
            {
                "id": 6750,
                "name": "Match Winner",
                handicap: "n/a",
                mobile:true,
                "key": "match-winner",
                "selections": [
                    {
                        "name": "1",
                        "id" : "25"
                    },
                    {
                        "name": "2",
                        "id" : "26"
                    }
                ]
            },
            {
                "id": 6930,
                "name": "Doubles Match",
                handicap: "n/a",
                "key": "doubles-match",
                "selections": [
                {
                    "name": "1",
                    "shortName": "1",
                    "id" : "12"
                },
                {
                    "name": "2",
                    "shortName": "2",
                    "id" : "13"
                }
                ]
            },
            {
                "id": 6481,
                "name": "Total Games Over/Under",
                handicap: "n/a",
                "key": "total-games-over-under",
                "selections": [
                {
                    "name": "1",
                    "shortName": "1",
                    "id" : "12"
                },
                {
                    "name": "2",
                    "shortName": "2",
                    "id" : "13"
                }
                ]
            }
        ]
    },
    {
        "id": 73743,
        "name": "Rugby League",
        "frName": "Ligue de Rugby",
        "markets": [
            {
                "id": 8133,
                "name": "Match Winner",
                handicap: "n/a",
                mobile:true,
                "key": "match-winner",
                "selections": [
                {
                    "name": "1",
                    "id":1
                },
                {
                    "name": "X",
                    "id":2
                },
                {
                    "name": "2",
                    "id":3
                }
                ]
            },
            {
                "id": 8784,
                "name": "Draw No Bet",
                handicap: "n/a",
                "key": "draw-no-bet",
                "selections": [
                    {
                        "name": "1",
                        "id":"1"
                    },
                    {
                        "name": "2",
                        "id":"3"
                    }
                ]
            },
        ]
    },
    {
        "id": 73744,
        "name": "Rugby",
        "frName": "Rugby",
        "markets": [
            {
                "id": 15,
                "name": "Match Winner",
                handicap: "n/a",
                mobile:true,
                "key": "match-winner",
                "selections": [
                {
                    "name": "1",
                    "id":1
                },
                {
                    "name": "X",
                    "id":2
                },
                {
                    "name": "2",
                    "id":3
                }
                ]
            },
            {
                "id": 8273,
                "name": "Double Chance",
                handicap: "n/a",
                "key": "double-chance",
                "selections": [
                {
                    "name": "1 OR X",
                    "id": 7
                },
                {
                    "name": "X OR 2",
                    "id": 9
                },
                {
                    "name": "1 0R 2",
                    "id": 8
                }
                ]
            }
        ]
    },
    {
        "id": 6,
        "name": "Cricket",
        "frName": "Cricket",
        "markets": [
            {
                "id": 8884,
                "name": "Match Winner",
                handicap: "n/a",
                mobile:true,
                "key": "match-winner",
                "selections": [
                {
                    "name": "1",
                    "id": 1
                },
                {
                    "name": "2",
                    "id" : 3
                }
                ]
            },
            {
                "id": 179,
                "name": "Most Sixes",
                handicap: "n/a",
                "key": "most-sixes",
                "selections": [
                {
                    "name": "1",
                    "id" : 1
                },
                {
                    "name": "X",
                    "id":2
                },
                {
                    "name": "2",
                    "id":3
                }
                ]
            },
            
        ]
    },
    {
        "id": 91189,
        "name": "Volleyball",
        "frName": "Volley-ball",
        "markets": [
            {
                "id": 6734,
                "name": "Match Winner",
                handicap: "n/a",
                mobile:true,
                "key": "match-winner",
                "selections": [
                    {
                        "name": "1",
                        "id" : 1
                    },
                    {
                        "name": "2",
                        "id" : 3
                    }
                ]
            },
            {
                "id": 6779,
                "name": "First Set Winner",
                handicap: "n/a",
                "key": "first-set-winner",
                "selections": [
                {
                    "name": "1",
                    "id": 1
                },
                {
                    "name": "2",
                    "id" : 3
                }
                ]
            },
            {
                "id": 7012,
                "name": "Second Set Winner",
                handicap: "n/a",
                "key": "second-set-winner",
                "selections": [
                {
                    "name": "1",
                    "id": 1
                },
                {
                    "name": "2",
                    "id" : 3
                }
                ]
            }
        ]
    },
    {
        "id": 99614,
        "name": "Handball",
        "frName": "Handball",
        "markets": [
            {
                "id": 6662,
                "name": "Match Winner",
                handicap: "n/a",
                mobile:true,
                "key": "match-winner",
                "selections": [
                    {
                    "name": "1",
                    "id" : "1"
                    },
                    {
                    "name": "X",
                    "id" : "2"
                    },
                    {
                    "name": "2",
                    "id" : "3"
                    }
                ]
            },
            {
                "id": 7290,
                "specValue": 0,
                "name": "Double Chance",
                "fr_name": "Double Chance",
                "columns": 3,
                "inColumn": 2,
                "key": "double-chance",
                "selections": [
                {
                    "name": "1 OR X",
                    "shortName": "1 OU X",
                    "id":"7"
                },
                {
                    "name": "1 OR 2",
                    "shortName": "1 OU 2",
                    "id":"8"
                },
                {
                    "name": "X 0R 2",
                    "shortName": "X OU 2",
                    "id":"9"
                }
                ]
            }
        ]
    },
    {
        "id": 17,
        "name": "American Football",
        "frName": "Football américain",
        "markets": [
            {
                "id": 6571,
                "name": "1x2",
                handicap: "n/a",
                mobile:true,
                "key": "match-result",
                "selections": [
                    {
                        "name": "1",
                        "id":"1"
                    },
                    {
                        "name": "X",
                        "id":"2"
                    },
                    {
                        "name": "2",
                        "id":"3"
                    }
                ]
            },
            {
                "id": 6788,
                "name": "Odd or Even Total",
                handicap: "n/a",
                "key": "odd-or-even-total",
                "selections": [
                {
                    "name": "odd",
                    "id":32
                },
                {
                    "name": "even",
                    "id": 33
                }
                ]
            },
            {
                "id": 6539,
                "name": "First Team to Score",
                handicap: "n/a",
                "key": "first-team-to-score",
                "selections": [
                {
                    "name": "1",
                    "id":1
                },
                {
                    "name": "2",
                    "id":3
                }
                ]
            }
        ]
    },
    {
        "id": 8,
        "name": "Darts",
        "frName": "Fléchettes",
        "markets": [
            {
                "id": 9670,
                "name": "Match winner (2 way)",
                handicap: "n/a",
                "key": "match-winner-2-way-",
                mobile:true,
                "selections": [
                    {
                    "name": "1",
                    "id" : 25
                    },
                    {
                    "name": "2",
                    "id" : 26
                    }
                ]
            }
        ]
    },
    {
        "id": 491393,
        "name": "Futsal",
        "frName": "Futsal",
        "markets": [
            {
                "id": 7469,
                "name": "Match Winner",
                handicap: "n/a",
                "key": "match-winner",
                mobile:true,
                "selections": [
                    {
                        "name": "1",
                        "id": 1
                    },
                    {
                        "name": "X",
                        "id":2
                    },
                    {
                        "name": "2",
                        "id":3
                    }
                ]
            },
            {
                "id": 7772,
                "name": "Double chance",
                handicap: "n/a",
                "key": "double-chance",
                "selections": [
                    {
                        "name": "1 OR X",
                        "id": 7
                    },
                    {
                        "name": "X 0R 2",
                        "id": 9
                    },
                    {
                        "name": "1 OR 2",
                        "id": 8
                    }
                    
                ]
            },
            {
                "id": 8733,
                "name": "Total Goals (Odd/Even)",
                handicap: "n/a",
                "key": "total-goals-odd-even-",
                "selections": [
                    {
                        "name": "Odd",
                        "id": 33
                    },
                    {
                        "name": "Even",
                        "id": 32
                    }
                ]
            }
        ]
    },
    {
        "id": 22,
        "name": "Snooker",
        "frName": "Billard",
        "markets": [
            {
                "id": 6672,
                "name": "Match winner",
                handicap: "n/a",
                "key": "match-winner",
                mobile:true,
                "selections": [
                    {
                        "name": "1",
                        "id": 25
                    },
                    {
                        "name": "2",
                        "id": 26
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Aussie Rules",
        "frName": "Aussie Rules",
        "markets": [
            {
                "id": 18,
                "name": "Draw No Bet",
                handicap: "n/a",
                "key": "draw-no-bet",
                mobile:true,
                "selections": [
                    {
                        "name": "1",
                        "id":"1"
                    },
                    {
                        "name": "2",
                        "id":"3"
                    }
                ]
            },
        ]
    },
]