export * from '../common/common_types'

import type User from './user'
import type { RenderCache } from './rendercache'

import type { Coordinates, Room, RoomObject } from '../common/common_types'

export interface Users { [id: string]: User }
export type IgnoredUserIds = Set<string>

export interface ImageLayer {
    tags?: string[],
    image: HTMLImageElement
}

export interface ClientRoomObject extends RoomObject
{
    physicalPositionX?: number
    physicalPositionY?: number
    image?: RenderCache
    allImages?: RenderCache[]
    // jizou
    lastUserCameOrLeftTime?: number
    currentFrame?: number
    needToTurnAround?: boolean
}

export interface ClientRoom extends Room
{
    objects: ClientRoomObject[];
    backgroundImage?: RenderCache
}

export interface CanvasObject
{
    o: ClientRoomObject
    type: "room-object" | "user"
    x?: number
    y?: number
}

export type DeviceInfo = {
    id: string
    name: string
    type: MediaDeviceKind
}

export interface PopupUserList {
    id: string
    name: string | null
    isInRoom: boolean
    isInactive: boolean
}

export interface PointerState {
    dist: number
    pos: Coordinates
}

export type PopupCallback = (buttonIndex: number) => void