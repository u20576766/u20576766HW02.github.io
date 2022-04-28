let films = [
    {
        Id: 1,
        Title: "Speed",
        Director: "Jan de Bont",
        Runtime: "1h 56m",
        Release_year: 1994,
        Description: "A disgruntled, dangerous man plants a bomb in an elevator. When his mission fails, he plants a bomb in a local bus and threatens to set it off unless his demand is met.",
        Poster: "images/speed.jpg",
        Cinema_num: 1,
        Ticket_price: 25,
        Tickets_inCart: localStorage.getItem('clickcounter1')
    },
    {
        Id: 2,
        Title: "Vernom: Let There Be Carnage",
        Director: "Andy Serkis",
        Runtime: "1h 37m",
        Release_year: 2021,
        Description: "Eddie Brock tries to revive his failing career by interviewing a serial killer, Cletus Kasady, who is on death row. When Carnage gains control over Cletus's body, he escapes from the prison.",
        Poster: "images/venom2.jpg",
        Cinema_num: 2,
        Ticket_price: 150,
        Tickets_inCart: localStorage.getItem('clickcounter2')
    },
    {
        Id: 3,
        Title: "Godzilla: King of Monsters",
        Director: "Michael Dougherty",
        Runtime: "2h 12m",
        Release_year: 2019,
        Description: "A legendary monster named King Ghidorah awakens Rodan, as well as other titans, to destroy the world. To defeat them, the crypto-zoological organisation Monarch must rely on the almighty Godzilla.",
        Poster: "images/godzilla.jpg",
        Cinema_num: 3,
        Ticket_price: 170,
        Tickets_inCart: localStorage.getItem('clickcounter3')
    }, {
        Id: 4,
        Title: "Encanto",
        Director: "Jared Bush",
        Runtime: "1h 42m",
        Release_year: 2021,
        Description: "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. However, she soon may be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger.",
        Poster: "images/encanto.jpeg",
        Cinema_num: 4,
        Ticket_price: 200,
        Tickets_inCart: localStorage.getItem('clickcounter4')
    },
    {
        Id: 5,
        Title: "Everything, Everything",
        Director: "Stella Meghie",
        Runtime: "1h 36m",
        Release_year: 2017,
        Description: "Maddy, who suffers from a severe immunodeficiency disorder, is forced to remain indoors. She falls in love with Olly, who lives next door, much to her mother Pauline's dismay.",
        Poster: "images/everything.jpg",
        Cinema_num: 5,
        Ticket_price: 160,
        Tickets_inCart: localStorage.getItem('clickcounter5')
    },
    {
        Id: 6,
        Title: "Turning Red",
        Director: "Domee Shi",
        Runtime: "1h 40m",
        Release_year: 2022,
        Description: "Mei Lee is a 13-year-old girl who is torn between being her mother's obedient daughter and the chaos of her youth. As if that were not enough, when she gets too excited, she turns into a big red panda.",
        Poster: "images/red.jpg",
        Cinema_num: 6,
        Ticket_price: 250,
        Tickets_inCart: localStorage.getItem('clickcounter6')
    },
    {
        Id: 7,
        Title: "Bird Box",
        Director: "Susanne Bier",
        Runtime: "2h 4m",
        Release_year: 2018,
        Description: "When a mysterious force decimates the population, only one thing is certain -- if you see it, you die. The survivors must now avoid coming face to face with an entity that takes the form of their worst fears. Searching for hope and a new beginning, a woman and her children embark on a dangerous journey through the woods and down a river to find the one place that may offer sanctuary. To make it, they'll have to cover their eyes from the evil that chases them -- and complete the trip blindfolded.",
        Poster: "images/birdbox.png",
        Cinema_num: 7,
        Ticket_price: 210,
        Tickets_inCart: localStorage.getItem('clickcounter7')
    },
    {
        Id: 8,
        Title: "The Fault In Our Stars",
        Director: "Josh Boone",
        Runtime: "2h 6m",
        Release_year: 2014,
        Description: "Two cancer-afflicted teenagers Hazel and Augustus meet at a cancer support group. The two of them embark on a journey to visit a reclusive author in Amsterdam.",
        Poster: "images/thefault.jpg",
        Cinema_num: 8,
        Ticket_price: 110,
        Tickets_inCart: localStorage.getItem('clickcounter8')
    },
]


////////////////////////////////////////////////////////////Home Page Load Movies/////////////////////////////////////////////////////////
function homePageLoad() {
    //FIRST MOVIE
    //Header
    var cinema1 = document.getElementById('cin01');
    cinema1.innerHTML = "Cinema " + films[0].Cinema_num;

    //Poster
    var cin01Post = document.getElementById('poster01');
    cin01Post.src = films[0].Poster;

    //Title, Description and Ticket Price
    var title1 = document.getElementById('title01');
    var des01 = document.getElementById('desc01');
    var price01 = document.getElementById('price01');
    price01.innerHTML = "R" + films[0].Ticket_price + ",00";
    des01.innerHTML = films[0].Description;
    title1.innerHTML = films[0].Title;

    //SECOND MOVIE
    //Header
    var cinema2 = document.getElementById('cin02');
    cinema2.innerHTML = "Cinema " + films[1].Cinema_num;

    //Poster
    var cin02Post = document.getElementById('poster02');
    cin02Post.src = films[1].Poster;

    //Title, Description and Ticket Price
    var title02 = document.getElementById('title02');
    var des02 = document.getElementById('desc02');
    var price02 = document.getElementById('price02');
    price02.innerHTML = "R" + films[1].Ticket_price + ",00";
    des02.innerHTML = films[1].Description;
    title02.innerHTML = films[1].Title;

    //Cart




    //THIRD MOVIE
    //Header
    var cinema3 = document.getElementById('cin03');
    cinema3.innerHTML = "Cinema " + films[2].Cinema_num;

    //Poster
    var cin03Post = document.getElementById('poster03');
    cin03Post.src = films[2].Poster;

    //Title, Description and Ticket Price
    var title03 = document.getElementById('title03');
    var des03 = document.getElementById('desc03');
    var price03 = document.getElementById('price03');
    price03.innerHTML = "R" + films[2].Ticket_price + ",00";
    des03.innerHTML = films[2].Description;
    title03.innerHTML = films[2].Title;

    //FOURTH MOVIE
    //Header
    var cinema4 = document.getElementById('cin04');
    cinema4.innerHTML = "Cinema " + films[3].Cinema_num;

    //Poster
    var cin04Post = document.getElementById('poster04');
    cin04Post.src = films[3].Poster;

    //Title, Description and Ticket Price
    var title04 = document.getElementById('title04');
    var des04 = document.getElementById('desc04');
    var price04 = document.getElementById('price04');
    price04.innerHTML = "R" + films[3].Ticket_price + ",00";
    des04.innerHTML = films[3].Description;
    title04.innerHTML = films[3].Title;

    //Cart

    //FIFTH MOVIE
    //Header
    var cinema5 = document.getElementById('cin05');
    cinema5.innerHTML = "Cinema " + films[4].Cinema_num;

    //Poster
    var cin05Post = document.getElementById('poster05');
    cin05Post.src = films[4].Poster;

    //Title, Description and Ticket Price
    var title05 = document.getElementById('title05');
    var des05 = document.getElementById('desc05');
    var price05 = document.getElementById('price05');
    price05.innerHTML = "R" + films[4].Ticket_price + ",00";
    des05.innerHTML = films[4].Description;
    title05.innerHTML = films[4].Title;

    //Cart

    //SIXTH MOVIE
    //Header
    var cinema6 = document.getElementById('cin06');
    cinema6.innerHTML = "Cinema " + films[5].Cinema_num;

    //Poster
    var cin06Post = document.getElementById('poster06');
    cin06Post.src = films[5].Poster;

    //Title, Description and Ticket Price
    var title06 = document.getElementById('title06');
    var des06 = document.getElementById('desc06');
    var price06 = document.getElementById('price06');
    price06.innerHTML = "R" + films[5].Ticket_price + ",00";
    des06.innerHTML = films[5].Description;
    title06.innerHTML = films[5].Title;

    //Cart

    //SEVENTH MOVIE
    //Header
    var cinema7 = document.getElementById('cin07');
    cinema7.innerHTML = "Cinema " + films[6].Cinema_num;

    //Poster
    var cin07Post = document.getElementById('poster07');
    cin07Post.src = films[6].Poster;

    //Title, Description and Ticket Price
    var title07 = document.getElementById('title07');
    var des07 = document.getElementById('desc07');
    var price07 = document.getElementById('price07');
    price07.innerHTML = "R" + films[6].Ticket_price + ",00";
    des07.innerHTML = films[6].Description;
    title07.innerHTML = films[6].Title;

    //Cart

    //EIGHTH MOVIE
    //Header
    var cinema8 = document.getElementById('cin08');
    cinema8.innerHTML = "Cinema " + films[7].Cinema_num;

    //Poster
    var cin08Post = document.getElementById('poster08');
    cin08Post.src = films[7].Poster;

    //Title, Description and Ticket Price
    var title08 = document.getElementById('title08');
    var des08 = document.getElementById('desc08');
    var price08 = document.getElementById('price08');
    price08.innerHTML = "R" + films[7].Ticket_price + ",00";
    des08.innerHTML = films[7].Description;
    title08.innerHTML = films[7].Title;

    //Cart




    //Display movie details
    var movieChosen = document.getElementById('movieChosen');
    var movieTitle = document.getElementById('titleModal');
    var movieDirector = document.getElementById('directModal');
    var movieYear = document.getElementById('yearModal');
    var movieRun = document.getElementById('runModal');

    var elem01 = document.getElementById('det1');
    elem01.addEventListener('click', function () {
        movieChosen.innerHTML = films[0].Title;
        movieTitle.innerHTML = films[0].Title;
        movieDirector.innerHTML = films[0].Director;
        movieYear.innerHTML = films[0].Release_year;
        movieRun.innerHTML = films[0].Runtime;
    });


    var elem02 = document.getElementById('det2');
    elem02.addEventListener('click', function () {
        movieChosen.innerHTML = films[1].Title;
        movieTitle.innerHTML = films[1].Title;
        movieDirector.innerHTML = films[1].Director;
        movieYear.innerHTML = films[1].Release_year;
        movieRun.innerHTML = films[1].Runtime;
    });

    var elem03 = document.getElementById('det3');
    elem03.addEventListener('click', function () {
        movieChosen.innerHTML = films[2].Title;
        movieTitle.innerHTML = films[2].Title;
        movieDirector.innerHTML = films[2].Director;
        movieYear.innerHTML = films[2].Release_year;
        movieRun.innerHTML = films[2].Runtime;
    });

    var elem04 = document.getElementById('det4');
    elem04.addEventListener('click', function () {
        movieChosen.innerHTML = films[3].Title;
        movieTitle.innerHTML = films[3].Title;
        movieDirector.innerHTML = films[3].Director;
        movieYear.innerHTML = films[3].Release_year;
        movieRun.innerHTML = films[3].Runtime;
    });

    var elem05 = document.getElementById('det5');
    elem05.addEventListener('click', function () {
        movieChosen.innerHTML = films[4].Title;
        movieTitle.innerHTML = films[4].Title;
        movieDirector.innerHTML = films[4].Director;
        movieYear.innerHTML = films[4].Release_year;
        movieRun.innerHTML = films[4].Runtime;
    });

    var elem06 = document.getElementById('det6');
    elem06.addEventListener('click', function () {
        movieChosen.innerHTML = films[5].Title;
        movieTitle.innerHTML = films[5].Title;
        movieDirector.innerHTML = films[5].Director;
        movieYear.innerHTML = films[5].Release_year;
        movieRun.innerHTML = films[5].Runtime;
    });

    var elem07 = document.getElementById('det7');
    elem07.addEventListener('click', function () {
        movieChosen.innerHTML = films[6].Title;
        movieTitle.innerHTML = films[6].Title;
        movieDirector.innerHTML = films[6].Director;
        movieYear.innerHTML = films[6].Release_year;
        movieRun.innerHTML = films[6].Runtime;
    });

    var elem08 = document.getElementById('det8');
    elem08.addEventListener('click', function () {
        movieChosen.innerHTML = films[7].Title;
        movieTitle.innerHTML = films[7].Title;
        movieDirector.innerHTML = films[7].Director;
        movieYear.innerHTML = films[7].Release_year;
        movieRun.innerHTML = films[7].Runtime;
    });

    //Local storage get items
    var allItems = localStorage.getItem('cartAll');
    if (allItems > 0) {
        document.getElementById('cartItems').innerHTML = allItems;
    }
    else {
        document.getElementById('cartItems').innerHTML = 0;
    }

    //Add to cart button
    //Adding item to cart by clicking button
    var cost = Number(localStorage.getItem('totalCost'));;
    //Cart Items number and cart table
    var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
    //CartMovie1
    var btn01 = document.getElementById('Book1');
    btn01.addEventListener('click', function () {
        localStorage.setItem('mov1', JSON.stringify(films[0]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += films[0].Ticket_price;
        localStorage.setItem('totalCost', cost);


        //LocalStorage for individual cart items
        if (localStorage.clickcounter1) {
            localStorage.clickcounter1 = Number(localStorage.clickcounter1) + 1;
        }
        else {
            localStorage.clickcounter1 = 1;
        }
    });

    //CartMovie2
    var btn02 = document.getElementById('Book2');
    btn02.addEventListener('click', function () {
        localStorage.setItem('mov2', JSON.stringify(films[1]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += films[1].Ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter2) {
            localStorage.clickcounter2 = Number(localStorage.clickcounter2) + 1;
        }
        else {
            localStorage.clickcounter2 = 1;
        }

    });

    //CartMovie3
    var btn03 = document.getElementById('Book3');
    btn03.addEventListener('click', function () {
        localStorage.setItem('mov3', JSON.stringify(films[2]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += films[2].Ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter3) {
            localStorage.clickcounter3 = Number(localStorage.clickcounter3) + 1;
        }
        else {
            localStorage.clickcounter3 = 1;
        }
    });

    //CartMovie4
    var btn04 = document.getElementById('Book4');
    btn04.addEventListener('click', function () {
        localStorage.setItem('mov4', JSON.stringify(films[3]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += films[3].Ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter4) {
            localStorage.clickcounter4 = Number(localStorage.clickcounter4) + 1;
        }
        else {
            localStorage.clickcounter4 = 1;
        }
    });

    //CartMovie5
    var btn05 = document.getElementById('Book5');
    btn05.addEventListener('click', function () {
        localStorage.setItem('mov5', JSON.stringify(films[4]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += films[4].Ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter5) {
            localStorage.clickcounter5 = Number(localStorage.clickcounter5) + 1;
        }
        else {
            localStorage.clickcounter5 = 1;
        }
    });

    //CartMovie6
    var btn06 = document.getElementById('Book6');
    btn06.addEventListener('click', function () {
        localStorage.setItem('mov6', JSON.stringify(films[5]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += films[5].Ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter6) {
            localStorage.clickcounter6 = Number(localStorage.clickcounter6) + 1;
        }
        else {
            localStorage.clickcounter6 = 1;
        }
    });
    //CartMovie7
    var btn07 = document.getElementById('Book7');
    btn07.addEventListener('click', function () {
        localStorage.setItem('mov7', JSON.stringify(films[6]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += films[6].Ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter7) {
            localStorage.clickcounter7 = Number(localStorage.clickcounter7) + 1;
        }
        else {
            localStorage.clickcounter7 = 1;
        }
    });

    //CartMovie8
    var btn08 = document.getElementById('Book8');
    btn08.addEventListener('click', function () {
        localStorage.setItem('mov8', JSON.stringify(films[7]));

        //LocalStorage for all cart Items
        itemNum += 1;
        document.getElementById('cartItems').innerHTML = itemNum;
        localStorage.setItem('cartAll', itemNum);

        //Local Storage for total cost
        cost += films[7].Ticket_price;
        localStorage.setItem('totalCost', cost);

        //LocalStorage for individual cart items
        if (localStorage.clickcounter8) {
            localStorage.clickcounter8 = Number(localStorage.clickcounter8) + 1;
        }
        else {
            localStorage.clickcounter8 = 1;
        }
    });
};

////////////////////////////////////////////////////////////Cart Page Load Cart Items/////////////////////////////////////////////////////////
function cartPageLoad() {
    //Local storage get items
    var cost = Number(localStorage.getItem('totalCost'));
    var cartTable = document.getElementById('CartTable');
    var allItems = localStorage.getItem('cartAll');
    if (allItems > 0) {
        document.getElementById('cartItems').innerHTML = allItems;
        var totalNum = document.getElementById('allCounted');
        var sumVal = localStorage.getItem('totalCost');
        totalNum.innerHTML = 'R' + sumVal + ',00';
        remove();
    }
    else {
        document.getElementById('cartItems').innerHTML = 0;
        var total = document.getElementById('totalLabel');
        //localStorage.removeItem('totalCost');
        total.remove();
    }

    //Individual Movies In Cart
    var allItems1 = films[0].Tickets_inCart;
    var allItems2 = films[1].Tickets_inCart;
    var allItems3 = films[2].Tickets_inCart;
    var allItems4 = films[3].Tickets_inCart;
    var allItems5 = films[4].Tickets_inCart;
    var allItems6 = films[5].Tickets_inCart;
    var allItems7 = films[6].Tickets_inCart;
    var allItems8 = films[7].Tickets_inCart;


    if (allItems1 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow1" onclick="deleteRow(this)"><i class="fa fa-close "></i></button>' + ' ' + films[0].Title;
        cell2.innerHTML = 'R' + films[0].Ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem1"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems1 + ' ' + '<button class="items" id="addItem1"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (films[0].Ticket_price) * allItems1 + ',00';

        document.getElementById('removeItem1').addEventListener('click', function () {
            localStorage.clickcounter1 = Number(localStorage.clickcounter1) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= films[0].Ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter1 == 0) {
                localStorage.removeItem('clickcounter1');
                localStorage.removeItem('mov1');
            }

        });

        document.getElementById('addItem1').addEventListener('click', function () {
            localStorage.clickcounter1 = Number(localStorage.clickcounter1) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += films[0].Ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow1').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter1'));
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter1'))*films[0].Ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter1');
            localStorage.removeItem('mov1');
            refreshPage();

        });


    }
    if (allItems2 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow2" onclick="deleteRow(this)"><i class="fa fa-close fa-xs"></i></button>' + ' ' + films[1].Title;
        cell2.innerHTML = 'R' + films[1].Ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem2"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems2 + ' ' + '<button class="items" id="addItem2"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (films[1].Ticket_price) * allItems2 + ',00';

        document.getElementById('removeItem2').addEventListener('click', function () {
            localStorage.clickcounter2 = Number(localStorage.clickcounter2) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= films[1].Ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter2 == 0) {
                localStorage.removeItem('clickcounter2');
                localStorage.removeItem('mov2');
            }
        });


        document.getElementById('addItem2').addEventListener('click', function () {
            localStorage.clickcounter2 = Number(localStorage.clickcounter2) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += films[1].Ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow2').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter2'));
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter2'))*films[1].Ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter2');
            localStorage.removeItem('mov2');
            refreshPage();
        });

    }
    if (allItems3 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow3" onclick="deleteRow(this)"><i class="fa fa-close fa-xs"></i></button>' + ' ' + films[2].Title;
        cell2.innerHTML = 'R' + films[2].Ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem3"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems3 + ' ' + '<button class="items" id="addItem3"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (films[2].Ticket_price) * allItems3 + ',00';

        document.getElementById('removeItem3').addEventListener('click', function () {
            localStorage.clickcounter3 = Number(localStorage.clickcounter3) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= films[2].Ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter3 == 0) {
                localStorage.removeItem('clickcounter3');
                localStorage.removeItem('mov3');
            }
        });


        document.getElementById('addItem3').addEventListener('click', function () {
            localStorage.clickcounter3 = Number(localStorage.clickcounter3) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += films[2].Ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow3').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter3'));
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter3'))*films[2].Ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter3');
            localStorage.removeItem('mov3');
            refreshPage();
        });
    }
    if (allItems4 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow4" onclick="deleteRow(this)"><i class="fa fa-close fa-xs"></i></button>' + ' ' + films[3].Title;
        cell2.innerHTML = 'R' + films[3].Ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem4"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems4 + ' ' + '<button class="items" id="addItem4"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (films[3].Ticket_price) * allItems4 + ',00';

        document.getElementById('removeItem4').addEventListener('click', function () {
            localStorage.clickcounter4 = Number(localStorage.clickcounter4) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= films[3].Ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter4 == 0) {
                localStorage.removeItem('clickcounter4');
                localStorage.removeItem('mov4');
            }
        });


        document.getElementById('addItem4').addEventListener('click', function () {
            localStorage.clickcounter4 = Number(localStorage.clickcounter4) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += films[3].Ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow4').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter4'));
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter4'))*films[3].Ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter4');
            localStorage.removeItem('mov4');
            refreshPage();
        });
    }
    if (allItems5 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);

        cell1.innerHTML = '<button class="removeMe" id="removeRow5" onclick="deleteRow(this)"><i class="fa fa-close fa-xs"></i></button>' + ' ' + films[4].Title;
        cell2.innerHTML = 'R' + films[4].Ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem5"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems5 + ' ' + '<button class="items" id="addItem5"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (films[4].Ticket_price) * allItems5 + ',00';

        document.getElementById('removeItem5').addEventListener('click', function () {
            localStorage.clickcounter5 = Number(localStorage.clickcounter5) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= films[4].Ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter5 == 0) {
                localStorage.removeItem('clickcounter5');
                localStorage.removeItem('mov5');
            }
        });

        document.getElementById('addItem5').addEventListener('click', function () {
            localStorage.clickcounter5 = Number(localStorage.clickcounter5) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += films[4].Ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow5').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter5'));
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter5'))*films[4].Ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter5');
            localStorage.removeItem('mov5');
            refreshPage();
        });

    }
    if (allItems6 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);

        cell1.innerHTML = '<button class="removeMe" id="removeRow6" onclick="deleteRow(this)"><i class="fa fa-close fa-xs"></i></button>' + ' ' + films[5].Title;
        cell2.innerHTML = 'R' + films[5].Ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem6"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems6 + ' ' + '<button class="items" id="addItem6"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (films[5].Ticket_price) * allItems6 + ',00';

        document.getElementById('removeItem6').addEventListener('click', function () {
            localStorage.clickcounter6 = Number(localStorage.clickcounter6) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= films[5].Ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter6 == 0) {
                localStorage.removeItem('clickcounter6');
                localStorage.removeItem('mov6');
            }
        });

        document.getElementById('addItem6').addEventListener('click', function () {
            localStorage.clickcounter6 = Number(localStorage.clickcounter6) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += films[5].Ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow6').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter6'));
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter6'))*films[5].Ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter6');
            localStorage.removeItem('mov6');
            refreshPage();
        });
    }
    if (allItems7 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow7" onclick="deleteRow(this)"><i class="fa fa-close fa-xs"></i></button>' + ' ' + films[6].Title;
        cell2.innerHTML = 'R' + films[6].Ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem7"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems7 + ' ' + '<button class="items" id="addItem7"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (films[6].Ticket_price) * allItems7 + ',00';

        document.getElementById('removeItem7').addEventListener('click', function () {
            localStorage.clickcounter7 = Number(localStorage.clickcounter7) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= films[6].Ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter7 == 0) {
                localStorage.removeItem('clickcounter7');
                localStorage.removeItem('mov7');
            }
        });


        document.getElementById('addItem7').addEventListener('click', function () {
            localStorage.clickcounter7 = Number(localStorage.clickcounter7) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += films[6].Ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow7').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter7'));
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter7'))*films[6].Ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter7');
            localStorage.removeItem('mov7');
            refreshPage();
        });
    }
    if (allItems8 > 0) {
        var rows = cartTable.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);


        cell1.innerHTML = '<button class="removeMe" id="removeRow8" onclick="deleteRow(this)"><i class="fa fa-close fa-xs"></i></button>' + ' ' + films[7].Title;
        cell2.innerHTML = 'R' + films[7].Ticket_price + ',00';
        cell3.innerHTML = '<button class="items" id="removeItem8"><i class="fa fa-arrow-left fa-xs"></i></button>' + ' ' + allItems8 + ' ' + '<button class="items" id="addItem8"><i class="fa fa-arrow-right fa-xs"></i></button>';
        cell4.innerHTML = 'R' + (films[7].Ticket_price) * allItems8 + ',00';

        document.getElementById('removeItem8').addEventListener('click', function () {
            localStorage.clickcounter8 = Number(localStorage.clickcounter8) - 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum -= 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost -= films[7].Ticket_price;
            localStorage.setItem('totalCost', cost);

            if (localStorage.clickcounter8 == 0) {
                localStorage.removeItem('clickcounter8');
                localStorage.removeItem('mov8');
            }
        });

        document.getElementById('addItem8').addEventListener('click', function () {
            localStorage.clickcounter8 = Number(localStorage.clickcounter8) + 1;
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum += 1;
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);
            refreshPage();

            //Local Storage for total cost
            cost += films[7].Ticket_price;
            localStorage.setItem('totalCost', cost);
        });

        document.getElementById('removeRow8').addEventListener('click', function () {
            var itemNum = parseFloat(document.getElementById("cartItems").innerHTML);
            itemNum = (localStorage.getItem('cartAll')) - (localStorage.getItem('clickcounter8'));
            document.getElementById('cartItems').innerHTML = itemNum;
            localStorage.setItem('cartAll', itemNum);

            //Local Storage for total cost
            cost -= ((localStorage.getItem('clickcounter8'))*films[7].Ticket_price);
            localStorage.setItem('totalCost', cost);

            localStorage.removeItem('clickcounter8');
            localStorage.removeItem('mov8');
            refreshPage();
        });
    }
    else {
        allItems2 = 0;
        allItems3 = 0;
        allItems4 = 0;
        allItems5 = 0;
        allItems6 = 0;
        allItems7 = 0;
        allItems8 = 0;
    };

    //Remove No items in cart text
    function remove() {
        var dis = document.getElementById('disappear');
        dis.remove();
    };

};

//delete row in table
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("CartTable").deleteRow(i);
};

//Refresh page to show new quantity total price and cart price
function refreshPage() {
    window.location.reload();
}

























