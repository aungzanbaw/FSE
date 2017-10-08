"use strict"
/**
 * 
 * Robot
 *  .drive()
 *      MurderRobot
 *          .kill()
 *      CleaningRobot
 *          .clean()
 * 
 * 
 * Animal
 *  .pop()
 * 
 *      Dog
 *          .bark()
 *      Cat
 *          .meow()
 * 
 * 
 * dog = pooper + barker 
 * cat = pooper + meower
 * cleaningRobot = driver + cleaner
 * murderRobot = driver + killer
 * murderRobotDog = driver + killer + barker
 * 
 */

 const barker = (state) =>{
    bark: () => console.log("Woof, I'm " + state.name)
 }

 const driver = (state) => {
    drive: () => state.position = state.position + state.speed
 }

 const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0
    }

    return Object.assign(
        {},
        barker(state),
        driver(state)
        // killer(state)
    )
 }
 let obj = murderRobotDog('Aung Kyaw')
 console.log(obj)
