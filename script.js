/* ==========================================
   ✏️ শুধু এই দুটো নাম পরিবর্তন করো
   ========================================== */

const birthdayName = "সঞ্চিতা";
const yourName = "শুভ";


/* ==========================================
   নামগুলো website-এ বসানো
   ========================================== */

document.getElementById("girlName").textContent =
    birthdayName;


document.getElementById("boyName").textContent =
    yourName;


document.querySelectorAll(".name").forEach(
    function(element) {

        element.textContent =
            birthdayName;

    }
);


document.querySelectorAll(".sender").forEach(
    function(element) {

        element.textContent =
            yourName;

    }
);


/* ==========================================
   PAGE CHANGE
   ========================================== */

function nextPage(pageId) {


    document
        .querySelectorAll(".page")
        .forEach(function(page) {

            page.classList.remove("active");

        });


    const next =
        document.getElementById(pageId);


    if (next) {

        next.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    createHearts();

}


/* ==========================================
   SPECIAL GIFT
   ========================================== */

function openGift() {


    const giftBox =
        document.getElementById("giftBox");


    const hiddenGift =
        document.getElementById("hiddenGift");


    /* Gift box disappears */

    giftBox.style.display =
        "none";


    /* Photo appears */

    hiddenGift.classList.add("show");


    /* Heart animation */

    createHeartBurst();

}


/* ==========================================
   YES BUTTON
   ========================================== */

function sayYes() {


    createHeartBurst();


    nextPage("final");


    createHeartBurst();

}


/* ==========================================
   MOVING NO BUTTON
   ========================================== */

function moveNoButton() {


    const button =
        document.getElementById("noButton");


    const maxX =
        window.innerWidth -
        button.offsetWidth -
        20;


    const maxY =
        window.innerHeight -
        button.offsetHeight -
        20;


    const x =
        Math.max(
            10,
            Math.random() * maxX
        );


    const y =
        Math.max(
            10,
            Math.random() * maxY
        );


    button.style.position =
        "fixed";


    button.style.left =
        x + "px";


    button.style.top =
        y + "px";


    button.style.zIndex =
        "100";


}


/* ==========================================
   FLOATING HEARTS
   ========================================== */

function createHearts() {


    const container =
        document.querySelector(".hearts");


    const heartList = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "🥰",
        "✨"

    ];


    for (let i = 0; i < 15; i++) {


        const heart =
            document.createElement("span");


        heart.className =
            "heart";


        heart.textContent =
            heartList[
                Math.floor(
                    Math.random() *
                    heartList.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (15 +
            Math.random() * 25)
            + "px";


        heart.style.animationDuration =
            (4 +
            Math.random() * 5)
            + "s";


        container.appendChild(heart);


        setTimeout(
            function() {

                heart.remove();

            },
            9000
        );

    }

}


/* ==========================================
   BIG HEART BURST
   ========================================== */

function createHeartBurst() {


    const container =
        document.querySelector(".hearts");


    const heartList = [

        "❤️",
        "💕",
        "💖",
        "💗",
        "💘"

    ];


    for (let i = 0; i < 40; i++) {


        const heart =
            document.createElement("span");


        heart.className =
            "heart";


        heart.textContent =
            heartList[
                Math.floor(
                    Math.random() *
                    heartList.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (20 +
            Math.random() * 35)
            + "px";


        heart.style.animationDuration =
            (2 +
            Math.random() * 3)
            + "s";


        container.appendChild(heart);


        setTimeout(
            function() {

                heart.remove();

            },
            6000
        );

    }

}


/* ==========================================
   BACKGROUND HEARTS
   ========================================== */

setInterval(

    function() {

        createHearts();

    },

    5000

);