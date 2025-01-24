import { atom,selector } from "recoil";

export const notifications = atom({
    key : "notifications",
    default : selector({
        key : 'notificationsSeletors',
        get : async () => {
           return new Promise((resolve) =>  setTimeout(() =>{resolve({homeatomState : 2 , notificationatomState : 10, massageatomState : 4 , profileatomState : 16}) } , 6000));
        }
    })
})

export const notificationSelector = selector({
    key : 'notificationSelector',
    get : ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.homeatomState + allNotifications.notificationatomState + allNotifications.massageatomState;
    }
})


// {homeatomState : 0, notificationatomState : 0, massageatomState : 0 , profileatomState : 0}