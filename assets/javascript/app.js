$(document).ready(function() {
    // Make Movie Array -- Make newMovieClick variable -- Make startGif variable
    var movies = ["Goodfellas", "Casino", "Captain Phillips", "The Wolf of Wall Street", "Philomena", "Fighting For Freedom"];
    var newMovieClick;
    var startGif = 0;
    var movieTitleString = "Major Wilson's Last Stand The Story of the Kelly Gang Battleship Potemkin The General The Johnstown Flood Chicago Napoléon Rasputin and the Empress    In the Wake of the Bounty   Cleopatra   Mutiny on the Bounty    San Francisco   You Only Live Once  Marie Antoinette    Young Mr. Lincoln   Dr. Ehrlich's Magic Bullet  Edison, the Man Young Tom Edison    Citizen Kane    Sergeant York   Gentleman Jim   The Pride of the Yankees    Yankee Doodle Dandy The Song of Bernadette  The Fighting Rats of Tobruk The Fighting Sullivans  Dillinger   Rhapsody in Blue    Night and Day   Sister Kenny    Till the Clouds Roll By Boomerang   Call Northside 777  Rope    Scott of the Antarctic  Words and Music The Wooden Horse    Young Man with a Horn   5 Fingers   Appointment with Venus  The Desert Fox  I'll See You in My Dreams   A Place in the Sun  Gift Horse  Moulin Rouge    Albert R.N. Houdini Titanic The Colditz Story   The Dam Busters Sardar  To Hell and Back    The Battle of the River Plate   Lust for Life   Somebody Up There Likes Me  The Wrong Man   Man of a Thousand Faces Portland Exposé The Spirit of St. Louis Yangtse Incident: The Story of H.M.S. Amethyst  The Three Faces of Eve  I Want to Live! I Was Monty's Double    The Inn of the Sixth Happiness  A Night to Remember Too Much, Too Soon  The Five Pennies    Compulsion  Inherit the Wind    Psycho  Sink the Bismarck!  Spartacus   Cast a Giant Shadow El Cid  The Great Impostor  Judgment at Nuremberg   Kappalottiya Thamizhan  Birdman of Alcatraz The Counterfeit Traitor Gypsy   Lawrence of Arabia  The Longest Day The Miracle Worker  Mutiny on the Bounty    The Password Is Courage Cleopatra   The Great Escape    Miracle of the White Stallions  PT 109  The Sadist  Becket  Fall of the Roman Empire    Zulu    The Agony and the Ecstasy   Battle of the Bulge Harlow  The Sound of Music  Heros of Telemark   The Battle of Algiers   Born Free   Bonnie and Clyde    In Cold Blood   The St. Valentine's Day Massacre    The Boston Strangler    Charge of the Light Brigade Isadora     The Lion in Winter  Anne of the Thousand Days   Battle of Britain   Butch Cassidy and the Sundance Kid  Ring of Bright Water    Airport     Cromwell    Patton      Shangani Patrol Tora! Tora! Tora!   10 Rillington Place Brian's Song    Dirty Harry The French Connection   Nicholas and Alexandra  Lady Sings the Blues    The Valachi Papers  Badlands    Dillinger   The Exorcist    Papillon    Serpico     Walking Tall    The Day of the Jackal   Lenny       The Texas Chain Saw Massacre    Dersu Uzala Dog Day Afternoon   The Hindenburg  Jaws        The Legend of Lizzie Borden All the President's Men Bound For Glory Helter Skelter  Sybil       The Lindbergh Kidnapping Case   The Town That Dreaded Sundown   A Bridge Too Far    MacArthur   Operation Thunderbolt   The Buddy Holly Story   Midnight Express    The Amityville Horror   Escape from Alcatraz    Norma Rae   Breaker Morant  Coal Miner's Daughter   The Elephant Man    McVicar     Raging Bull The Sea Wolves  The Entity  Gallipoli   Mommie Dearest  Reds        Frances     Gandhi      Missing     10 to Midnight  Adi Shankaracharya  Cross Creek The Right Stuff Silkwood    Viadukt (The Train Killer)  Amadeus     The Burning Bed The Killing Fields  Dance with a Stranger   The Doctor and the Devils   The Emerald Forest  The Falcon and the Snowman  Into Thin Air   Marie       Out of Africa   Sweet Dreams    Mask        Wallenberg: A Hero's Story  Act of Vengeance    At Close Range  The Delta Force Heartburn   Hoosiers    The Mission Salvador    Sid and Nancy   Cry Freedom 84 Charing Cross Road   Full Metal Jacket   Hamburger Hill  La Bamba    The Last Emperor    Matewan     Nayakan     The Untouchables    White Mischief  The Accused The Attic: The Hiding of Anne Frank Bird        Bloody Wednesday    Buster      A Cry in the Dark   Eight Men Out   Mississippi Burning Running on Empty (1988 film)    Talk Radio  Tucker: The Man and His Dream   Born On The Fourth Of July  Casualties of War   A City of Sadness   A Cry for Help: The Tracey Thurman Story    Everybody's Baby: The Rescue of Jessica McClure Glory       I Know My First Name Is Steven  Lean on Me  My Left Foot    Resurrected Small Sacrifices    Awakenings  Ek Doctor Ki Maut   Europa Europa   GoodFellas  Hiroshima: Out of the Ashes Not Without My Daughter Reversal of Fortune Save and Protect    The Krays   Too Young to Die?   Vincent & Theo  White Hunter Black Heart    As One      Black Robe  Bugsy       JFK         Let Him Have It Mission of the Shark    Switched at Birth   The Boys from St. Petri The Doors   1492: Conquest of Paradise  A League of Their Own   Beyond the Law  Chaplin     Hoffa       Lorenzo's Oil   Malcolm X (1992 film)   Alive       The Amy Fisher Story    And the Band Played On  Cool Runnings   Dragon: The Bruce Lee Story Fire in the Sky Gettysburg  Heaven & Earth  The Puppetmaster    Rudy        Sardar      Schindler's List    Shadowlands 8 Seconds   Ed Wood     Heavenly Creatures  The Madness of King George  Mrs. Parker and the Vicious Circle  Quiz Show   Tom & Viv   Almost Golden: The Jessica Savitch Story    Apollo 13   Balto       The Basketball Diaries  Bombay      Braveheart  Carrington  Casino      Citizen X   Dangerous Minds Heat        Nixon       Operation Dumbo Drop    Pocahontas  Ravan Raaj: A True Story    The Young Poisoner's Handbook   Indictment: The McMartin Trial  Bastard Out of Carolina The Crucible    Deadly Voyage   The Dentist Fly Away Home   The Ghost and the Darkness  Ghosts of Mississippi   I Shot Andy Warhol  Killer: A Journal of Murder Michael Collins White Squall    Amistad     Anastasia   Boogie Nights   Border      Donnie Brasco   Four Days in September  Iruvar      Kundun      Mrs. Brown  Paradise Road   Prefontaine Private Parts   Rosewood    Selena      Seven Years in Tibet    Titanic     Wilde       A Civil Action  Daun di Atas Bantal Elizabeth   Gia         Gods and Monsters   Patch Adams Psycho      Saving Private Ryan Without Limits  Angela's Ashes  Anna and the King   Boys Don't Cry  Girl, Interrupted   The Hurricane   In Too Deep The Insider Man on the Moon The Messenger: The Story of Joan of Arc Music of the Heart  October Sky The Pirates of Silicon Valley   RKO 281     The Straight Story  Topsy-Turvy All-American Girl: The Mary Kay Letourneau Story    Almost Famous   Bawandar    Bharathi    Chopper     The Dish    Erin Brockovich Essex Boys  The Filth and the Fury  The Iron Ladies Men of Honor    The Perfect Storm   Remember the Titans Shadow of the Vampire   Thirteen Days   When the Sky Falls  Ali         A Beautiful Mind    Behind Enemy Lines  The Believer    Black Hawk Down Blow        Bully       The Cat's Meow  Enemy at the Gates  From Hell   Iris        James Dean  Pearl Harbor    Quitting    Riding in Cars with Boys    Rock Star   There is a Secret in my Soup    8 Mile      24 Hour Party People    Auto Focus  Bloody Sunday   Catch Me If You Can Chicago     City of God Confessions of a Dangerous Mind Dahmer      Frida       The Interrogation of Michael Crowe  Kandahar    The Laramie Project The Mothman Prophecies  Paid in Full    The Pianist Prom Queen: The Marc Hall Story Rabbit-Proof Fence  The Rookie  Ted Bundy   We Were Soldiers    44 Minutes: The North Hollywood Shoot-Out   Antwone Fisher  Elephant    Gacy        Gods and Generals   LOC Kargil  Memories of Murder  Monster     Profoundly Normal   Radio       Seabiscuit  Shattered Glass Stander     The Texas Chainsaw Massacre Veronica Guerin Wonderland  3: The Dale Earnhardt Story 12 Days of Terror   36 Quai des Orfèvres    Against the Ropes   Alexander   The Assassination of Richard Nixon  The Aviator Beyond the Sea  Black Friday    De-lovely   Drum        Der Untergang   Evilenko    Finding Neverland   Friday Night Lights Hidalgo     The Hillside Strangler  Hotel Rwanda    Iron Jawed Angels   Kaadhal     Kamaraj     Kinsey      Miracle     The Motorcycle Diaries  Open Water  Ray         Something the Lord Made Aurore      Beyond the Gates    Capote      Cinderella Man  Coach Carter    Domino      Dreamer     The Exorcism of Emily Rose  Get Rich or Die Tryin'  Good Night, and Good Luck   The Great Raid  The Greatest Game Ever Played   The Green River Killer  Jarhead     The Last Hangman    Lies My Mother Told Me  Lords of Dogtown    Munich      The New World   North Country   Only the Brave  Sehar       Sins        Syriana     Walk the Line   Wolf Creek  The World's Fastest Indian  Alpha Dog   Amazing Grace   Black Book  The Black Dahlia    Bobby       Buenos Aires, 1977  Catch a Fire    Find Me Guilty  Flags of Our Fathers    Flight 93   Glory Road  Gridiron Gang   Hollywoodland   Infamous    Invincible  Karla       The Last King of Scotland   Lonely Hearts   Marie Antoinette    Provoked    The Hoax    The Pursuit of Happyness    The Queen   Take the Lead   Traces of Love  United 93   We Are Marshall World Trade Center  The Zodiac  An American Crime   American Gangster   The Assassination of Jesse James by the Coward Robert Ford  Battle In Seattle   Becoming Jane   Borderland  Breach      Chapter 27  Charlie Wilson's War    Chicago Massacre: Richard Speck Control     Curse of the Zodiac The Diving Bell and the Butterfly   El Cantante Elizabeth: The Golden Age   Freedom Writers The Girl Next Door  Goodbye Bafana  The Great Debaters  Guru        The Hoax    I'm Not There.  In the Valley of Elah   Into the Wild   Kalloori    The Killing of John Lennon  The Kingdom Kuppi       A Mighty Heart  Mongol      Periyar     Pride       Primeval    Rescue Dawn Rise of the Footsoldier Rohtenburg  Satham Podathey September Dawn  Shootout at Lokhandwala Stuck       Sybil       Talk To Me  What We Do Is Secret    Zodiac      21          American Violet The Baader Meinhof Complex  Baby Blues  The Bank Job    Bronson     Cadillac Records    Camino      Cape No. 7  Changeling  Che         The Counterfeiters  Defiance    The Duchess Everlasting Moments The Express Fifty Dead Men Walking  Felon       Flammen & Citronen  Flash of Genius Forever the Moment  Frost/Nixon Haber       Hunger      The Hurt Locker Ip Man      Jodhaa Akbar    Living Proof    Marley & Me Max Manus   Milk        The Other Boleyn Girl   Stone of Destiny    The Stoning of Soraya M.    The Strangers   Valkyrie    W.          Accident on Hill Road   Gifted Hands: The Ben Carson Story  April Showers   Amelia      Ann Rule's Everything She Ever Wanted   Ann Rule's Too Late to Say Goodbye  Baby Snatcher   The Blind Side  Bright Star Coco avant Chanel   The Damned United   Deadfall Trail  Everyman's War  Formosa Betrayed    Hachi: A Dog's Tale In Her Skin The Informant!  Ingenious   Invictus    Julie & Julia   The Killing Room    Mao's Last Dancer   Notorious   Pazhassi Raja   Prayers for Bobby   Public Enemies  The Soloist The Stoneman Murders    Taking Chance   Taking Woodstock    The Young Victoria  127 Hours   All Good Things The Bang Bang Club  Bonded by Blood Bruce Lee, My Brother   Conviction  D.C. Sniper Dear Mr. Gacy   Extraordinary Measures  Fair Game   The Fighter I Am Sindhutai Sapkal   I Love You Philip Morris    Ip Man 2    Khelein Hum Jee Jaan Sey    The King's Speech   A Kiss and a Promise    Letters to God  Lula, o filho do Brasil Montevideo, God Bless You!  Mr. Nice    Nadunissi Naaygal   Of Gods and Men Rakta Charitra  The Runaways    Secretariat The Silent House    The Social Network  The Special Relationship    Striker     Temple Grandin  Unstoppable The Way Back    The Whistleblower   You Don't Know Jack 17 Miracles 1911        50/50       The Amityville Haunting Bernie      Blackthorn  The Craigslist Killer   The Devil's Double  A Dangerous Method  The Dirty Picture   Dolphin Tale    Extremely Loud and Incredibly Close The Fields  The Help    The Iron Lady   J. Edgar    Janie Jones Juan y Eva  Kill the Irishman   Machine Gun Preacher    Margin Call Megan Is Missing    Moneyball   Monica      No One Killed Jessica   Not a Love Story    Puncture    Ragini MMS  Red Dog     The Resistance  The Rite    Sanctum     Silent House    Snowtown    Soul Surfer Texas Killing Fields    Thambi Vettothi Sundaram    Traffic     We Bought a Zoo Yugapurushan    Act of Valor    Aravaan     Argo        Big Miracle Blue Eyed Butcher   Buddha in a Traffic Jam Chasing Mavericks   Compliance  Dandupalya  Emperor     For Greater Glory (aka Cristiada)   Game Change Gangs of Wasseypur  Hitchcock   House on the Hill   The Iceman  The Impossible  Ivan Megharoopan    Jeff        Kazhugu     Last Flight to Abuja    Lincoln     Naduvula Konjam Pakkatha Kaanom No          Pachai Engira Kaathu    Paan Singh Tomar    People Like Us  The Possession  Shadow Dancer   Vinmeengal  The Vow     When the Lights Went Out    Won't Back Down Zero Dark Thirty    12 Years a Slave    42          Special 26  American Hustle The Attacks of 26/11    Attahasa    Belle       The Bling Ring  Bozo        Captain Phillips    Celluloid   CrazySexyCool: The TLC Story    The Conjuring   Dallas Buyers Club  Devil's Knot    Diana       Empire State    The Fifth Estate    The Frozen Ground   Fruitvale Station   Gimme Shelter   Gibraltar   Jobs        Kaptaan     Kill Your Darlings  Lone Survivor   The Look of Love    Louis Cyr   Lovelace    Madras Cafe Mandela: Long Walk to Freedom   Non-Disclosure: Haunted One Chance  Orissa      Pain & Gain Rush                                Saving Mr. Banks    Shahid      Shootout at Wadala  Snitch      Tracks      U Want Me 2 Kill Him?   Wolf Creek 2    The Wolf of Wall Street 50 to 1     American Sniper The Admiral: Roaring Currents   Annabelle   The Assault Bad Country Chaar Sahibzaade    Citizen Four    A Dark Reflection   The Face of an Angel    Foxcatcher  Heaven Is for Real  An Honest Liar  Houdini     The Imitation Game  Kill the Messenger  Love & Mercy    Marvellous  Mary Kom    Million Dollar Arm  The Monuments Men   A Murder Beside Yanhe River Noble       Pride       Rosewater   Selma       The Theory of Everything    Timbuktu    Unbroken    The 33      The Big Short   Black Mass  Born to Be Blue Bridge of Spies Captive     Child 44    Colonia     Concussion  The Danish Girl Danny Collins   Everest     The Finest Hours    I Killed My BFF In the Heart of the Sea Ip Man 3    Joy         The Lady in the Van Legend      Manjhi - The Mountain Man   Manto       McFarland, USA  Pawn Sacrifice  The Revenant    Rudramadevi Spare Parts Spotlight   The Stanford Prison Experiment  Steve Jobs  Straight Outta Compton  Suffragette True Story  Trumbo      The Walk    Woman in Gold   Visaranai   Woodlawn    13 Hours: The Secret Soldiers of Benghazi   Airlift     Aligarh     All the Way Amateur Night   Anthropoid  Azhar       Confirmation    Deepwater Horizon   Florence Foster Jenkins Free State of Jones Hacksaw Ridge   Hidden Figures  I'm Not Ashamed Loving      Miracles from Heaven    Neerja      Pelé: Birth of a Legend Race        Rustom      Sarbjit     Snowden     Sully       Veerappan   Masterminds War Dogs    The Conjuring 2 Infiltrator M.S. Dhoni: The Untold Story    Zero Days The Founder Lion Denial Gold Bitter Harvest Dunkirk Meesaya Murukku";

    // Create Start Button Function
    function renderButtonsZero() {
        $("#movie-buttons").empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("createMovieGifs");
            a.data("movies", movies[i]);
            a.text(movies[i]);
            $("#movie-buttons").append(a);
        }
    }

    //Listen for Button Clicks, Validate Input, Download Movie Info and Trailer
    function initiateMovieSearch() {
        // Search Movie Titles Taken from https://en.wikipedia.org/wiki/List_of_films_based_on_actual_events
        // Validate Movies Based on True Events
        //****if (movieTitleString.indexOf("***need to insert user input here") >= 0) {
        console.log("Yes & Yes");
        $("#movie-gallery").empty();
        $("#movie-gallery").append("<h2>" + newMovieClick + "<h2>");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            encodeURI(newMovieClick) + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            for (var j = 0; j < response.data.length; j++) {
                var gifDiv = $("<h2>");
                var img = $("<img>");
                $(gifDiv).addClass("Canvas <h2>");
                $(img).attr("src", response.data[j].images.fixed_width_still.url);
                $(img).data("giphyData", response.data[j]);
                $(img).addClass("Start");
                $(gifDiv).append(img);
                $("#movie-gallery").append(gifDiv);
            }
        });
    }


    // Respond to Search Button Click
    $("#add-movie").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        // Take Text from Text Box
        var newMovie = $("#movies-input").val().trim();
        if (newMovie != "") {
            initiateMovieSearch();
            // Call RenderButtonsZero Function to Display Newly Added Button
        }
    });

    // Respond to Preset Button Click
    $(document).on("click", ".createMovieGifs", function() {
        initiateMovieSearch();
    });

    renderButtonsZero();



});


//Youtube player
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: 'Xa0Q0J5tOP0',
        playerVars: {
            color: 'white',
            playlist: 'taJ60kskkns,FG0fTKAqZ5g'
        }
    });
}



// Initialize Firebase
    var config = {
    apiKey: "AIzaSyA8QWyDbrikOwlWMnm2nDnIId8zhKrGjE0",
    authDomain: "project-one-bbbb8.firebaseapp.com",
    databaseURL: "https://project-one-bbbb8.firebaseio.com",
    projectId: "project-one-bbbb8",
    storageBucket: "project-one-bbbb8.appspot.com",
    messagingSenderId: "678586800756"
  };
  

    firebase.initializeApp(config);

    // Create a variable to reference the database.
    var database = firebase.database();

    // Initial Values
    var name = "";
    var email = "";
    var age = 0;
    var comment = "";

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // Grabbed values from text boxes
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      age = $("#age-input").val().trim();
      comment = $("#comment-input").val().trim();

      // Code for handling the push
      database.ref().push({
        name: name,
        email: email,
        age: age,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

    });

    // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      // storing the snapshot.val() in a variable for convenience
      var sv = snapshot.val();

      // Console.loging the last user's data
      console.log(sv.name);
      console.log(sv.email);
      console.log(sv.age);
      console.log(sv.comment);

      // Change the HTML to reflect
      $("#name-display").html(sv.name);
      $("#email-display").html(sv.email);
      $("#age-display").html(sv.age);
      $("#comment-display").html(sv.comment);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });