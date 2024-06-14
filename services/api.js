import {
    data, 
    sport
} from "../models/db";

export const getCareers = async () =>  {

    try {
        const res = await fetch('  http://localhost:4000/careers');
        return res.json()
    } catch (error) {
        return []
    }
}

export const getSport = async (spid) =>  {
    try {
        const res = await new Promise((resolve, reject) => {
            if(sport[spid].length > 0) {
                resolve(sport[spid]);
            } else {
                reject('Error');
            }
            
        });

        return res;
        
    } catch (error) {
        return [];
    }
}

export const getJackpot = async () =>  {
    try {
        const res = await new Promise((resolve, reject) => {
            if(sport['jackpot'].length > 0) {
                resolve(sport['jackpot']);
            } else {
                reject('Error');
            }
            
        });

        return res;
        
    } catch (error) {
        return [];
    }
}

export const getMenu = async () =>  {
    try {
        const res = await new Promise((resolve, reject) => {
            if(data.menu.length > 0) {
                resolve(data.menu);
            } else {
                reject('Error');
            }
        });
        return res;
    } catch (error) {
        return []
    }
}