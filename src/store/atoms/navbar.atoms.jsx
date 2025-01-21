import {atom, selector} from "recoil";

export const homeatomState = atom({
    key : "homeatomState",
    default : 0
})

export const notificationatomState = atom({
    key : "notificationatomState",
    default : 201
})

export const massageatomState = atom({
    key : "massageatomState",
    default : 12
})


export const profileSelector = selector({
    key : 'profileSelector',
    get : ({get}) => {
        return get(homeatomState) + get(notificationatomState) + get(massageatomState);
    }
})