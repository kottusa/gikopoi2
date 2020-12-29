import { Room } from "./types";

export const rooms: { [roomId: string]: Room } = {
    bar: {
        scale: 1,
        grid: [9, 9],
        originCoordinates: { x: 0, y: 660 },
        spawnPoint: { x: 8, y: 4, direction: "left" },
        objects: [
            { x: 2, y: 1, url: "table.png" },
            { x: 2, y: 2, url: "table.png" },
            { x: 6, y: 1, url: "table.png" },
            { x: 6, y: 2, url: "table.png" },
            { x: 2, y: 7, url: "counter_left.png" },
            { x: 2, y: 6, url: "counter_left.png" },
            { x: 2, y: 5, url: "counter_bottom_left.png" },
            { x: 3, y: 5, url: "counter_bottom.png" },
            { x: 4, y: 5, url: "counter_bottom.png" },
            { x: 5, y: 5, url: "counter_bottom.png" },
            { x: 6, y: 7, url: "counter_right.png" },
            { x: 6, y: 6, url: "counter_right.png" },
            { x: 6, y: 5, url: "counter_bottom_right.png" },
        ],
        sit: [
            [1, 1],
            [1, 2],
            [3, 1],
            [3, 2],
            [5, 1],
            [5, 2],
            [7, 1],
            [7, 2],
            [1, 5],
            [1, 6],
            [1, 7],
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 4],
            [6, 4],
            [7, 5],
            [7, 6],
            [7, 7]
        ],
        blocked: [
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 6, y: 1 },
            { x: 6, y: 2 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 5 },
            { x: 6, y: 5 },
            { x: 2, y: 6 },
            { x: 2, y: 7 },
            { x: 6, y: 6 },
            { x: 6, y: 7 },
            { x: 1, y: 8 },
            { x: 2, y: 8 },
            { x: 3, y: 8 },
            { x: 4, y: 8 },
            { x: 5, y: 8 },
            { x: 6, y: 8 },
            { x: 7, y: 8 },
        ],
        doors: [
            // [[0, 0], "bar_street", [1, 7], 1],
            // [[3, 7], "underground", [0, 2], 1],
            // [[8, 4], "bar_street", [3, 5], 1]
            { x: 8, y: 4, targetRoomId: "admin_st", targetX: 0, targetY: 2 }
        ],
        streams: [{ isActive: false, withSound: null, withVideo: null }, { isActive: false, withSound: null, withVideo: null }]
    },
    admin_st: {
        scale: 160 / 200,
        grid: [10, 9],
        originCoordinates: { x: 18, y: 614 },
        spawnPoint: { x: 5, y: 2, direction: "right" },
        objects: [],
        sit: [],
        blocked: [
            { x: 0, y: 5 },
            { x: 1, y: 5 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 4 },
            { x: 6, y: 5 },
            { x: 7, y: 5 },
            { x: 8, y: 5 },
            { x: 9, y: 5 },
            { x: 9, y: 4 },
        ],
        doors: [
            { x: 0, y: 2, targetRoomId: "bar", targetX: 8, targetY: 4 },
            { x: 2, y: 4, targetRoomId: "admin", targetX: 10, targetY: 0 }
        ],
        streams: []
    },
    admin: {
        scale: 160 / 200,
        grid: [12, 6],
        originCoordinates: { x: 90, y: 530 },
        spawnPoint: { x: 10, y: 0, direction: "up" },
        objects: [],
        sit: [
            [10, 2],
            [10, 3],
            [7, 2],
            [7, 3],
            [9, 1],
            [9, 4],
            [8, 1],
            [8, 4],
            [4, 1],
            [4, 2],
            [4, 3],
            [4, 4],
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
        ],
        blocked: [
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 3, y: 3 },
            { x: 3, y: 4 },
            { x: 8, y: 2 },
            { x: 8, y: 3 },
            { x: 9, y: 2 },
            { x: 9, y: 3 },
        ],
        doors: [
            { x: 10, y: 0, targetRoomId: "admin_st", targetX: 2, targetY: 4 }
        ],
        streams: []
    }
}


export const defaultRoom = rooms.admin_st