const formationInput = document.getElementById("dropdown_formation");
const players = document.getElementsByClassName("position");

const calc = (pct) => `calc(${pct}% - 1.75rem)`;

const LB = (left_pct, bottom_pct) => {
    return {
        left: calc(left_pct),
        bottom: calc(bottom_pct),
    };
};

const formations = {
    f442: {
        player1: LB(50, 5),
        player2: LB(15, 25),
        player3: LB(37.5, 25),
        player4: LB(62.5, 25),
        player5: LB(85, 25),
        player6: LB(15, 50),
        player7: LB(37.5, 50),
        player8: LB(62.5, 50),
        player9: LB(85, 50),
        player10: LB(33.3, 80),
        player11: LB(66.6, 80),
    },
    f4411: {
        player1: LB(50, 5),
        player2: LB(15, 25),
        player3: LB(37.5, 25),
        player4: LB(62.5, 25),
        player5: LB(85, 25),
        player6: LB(15, 50),
        player7: LB(37.5, 50),
        player8: LB(62.5, 50),
        player9: LB(85, 50),
        player10: LB(50, 65),
        player11: LB(50, 80),
    },
    f442d: {
        player1: LB(50, 5),
        player2: LB(15, 25),
        player3: LB(37.5, 25),
        player4: LB(62.5, 25),
        player5: LB(85, 25),
        player6: LB(15, 50),
        player7: LB(50, 40),
        player8: LB(50, 60),
        player9: LB(85, 50),
        player10: LB(33.3, 80),
        player11: LB(66.6, 80),
    },
    f433: {
        player1: LB(50, 5),
        player2: LB(15, 25),
        player3: LB(37.5, 25),
        player4: LB(62.5, 25),
        player5: LB(85, 25),
        player6: LB(25, 50),
        player7: LB(50, 50),
        player8: LB(50, 80),
        player9: LB(75, 50),
        player10: LB(25, 80),
        player11: LB(75, 80),
    },
    f451: {
        player1: LB(50, 5),
        player2: LB(15, 25),
        player3: LB(37.5, 25),
        player4: LB(62.5, 25),
        player5: LB(85, 25),
        player6: LB(15, 50),
        player7: LB(37.5, 50),
        player8: LB(50, 40),
        player9: LB(85, 50),
        player10: LB(50, 80),
        player11: LB(62.5, 50),
    },
    f4231: {
        player1: LB(50, 5),
        player2: LB(15, 25),
        player3: LB(37.5, 25),
        player4: LB(62.5, 25),
        player5: LB(85, 25),
        player6: LB(15, 60),
        player7: LB(37.5, 40),
        player8: LB(62.5, 40),
        player9: LB(85, 60),
        player10: LB(50, 60),
        player11: LB(50, 80),
    },
    f343: {
        player1: LB(50, 5),
        player2: LB(25, 25),
        player3: LB(50, 25),
        player4: LB(62.5, 50),
        player5: LB(75, 25),
        player6: LB(15, 50),
        player7: LB(37.5, 50),
        player8: LB(50, 80),
        player9: LB(85, 50),
        player10: LB(25, 80),
        player11: LB(75, 80),
    },
    f352: {
        player1: LB(50, 5),
        player2: LB(25, 25),
        player3: LB(50, 25),
        player4: LB(50, 40),
        player5: LB(75, 25),
        player6: LB(15, 50),
        player7: LB(37.5, 50),
        player8: LB(62.5, 50),
        player9: LB(85, 50),
        player10: LB(33.3, 80),
        player11: LB(66.6, 80),
    },
    f3511: {
        player1: LB(50, 5),
        player2: LB(25, 25),
        player3: LB(50, 25),
        player4: LB(50, 40),
        player5: LB(75, 25),
        player6: LB(15, 50),
        player7: LB(37.5, 50),
        player8: LB(62.5, 50),
        player9: LB(85, 50),
        player10: LB(50, 65),
        player11: LB(50, 80),
    },
};

formationInput.addEventListener("input", (event) => {
    for (const player of players) {
        const pos = formations[event.target.value][player.id];
        player.style.left = pos["left"];
        player.style.bottom = pos["bottom"];
    }
});

window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});
