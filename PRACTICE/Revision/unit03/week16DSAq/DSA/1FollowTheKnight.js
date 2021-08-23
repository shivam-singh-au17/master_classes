

class cell {
    constructor(x, y, dis) {
        this.x = x;
        this.y = y;
        this.dis = dis;
    }
}


function isInside(x, y, N) {
    if (x >= 1 && x <= N && y >= 1 && y <= N)
        return true;
    return false;
}

function minStepToReachTarget(knightPos, targetPos, N) {
    let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    let dy = [-1, -2, -2, -1, 1, 2, 2, 1];

    let q = [];

    q.push(new cell(knightPos[0], knightPos[1], 0));

    let t;
    let x, y;
    let visit = new Array(N + 1);

    for (let i = 1; i <= N; i++) {
        visit[i] = new Array(N + 1);
        for (let j = 1; j <= N; j++)
            visit[i][j] = false;
    }

    visit[knightPos[0]][knightPos[1]] = true;

    while (q.length != 0) {
        t = q.shift();

        if (t.x == targetPos[0] && t.y == targetPos[1])
            return t.dis;

        for (let i = 0; i < 8; i++) {
            x = t.x + dx[i];
            y = t.y + dy[i];

            if (isInside(x, y, N) && !visit[x][y]) {
                visit[x][y] = true;
                q.push(new cell(x, y, t.dis + 1));
            }
        }
    }
    return Number.MAX_VALUE;
}

let N = 10;
let knightPos = [3, 3];
let targetPos = [3, 3];
console.log(minStepToReachTarget(knightPos, targetPos, N));



