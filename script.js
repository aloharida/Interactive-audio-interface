let sceneOne = document.querySelector(`#one`)
let sceneTwo = document.querySelector(`#two`)
let sceneThree = document.querySelector(`#three`)
let sceneFour= document.querySelector(`#four`)
let sceneFive= document.querySelector(`#five`)
let sceneSix= document.querySelector(`#six`)
let sceneSeven= document.querySelector(`#seven`)
let sceneEight= document.querySelector(`#eight`)
let sceneNine= document.querySelector(`#nine`)



let audioOne = document.querySelector(`#audioOne`)
let audioTwo = document.querySelector(`#audioTwo`)
let audioThree = document.querySelector(`#audioThree`)
let audioFour = document.querySelector(`#audioFour`)
let audioFive = document.querySelector(`#audioFive`)
let audioSix = document.querySelector(`#audioSix`)
let audioSeven = document.querySelector(`#audioSeven`)
let audioEight = document.querySelector(`#audioEight`)
let audioNine = document.querySelector(`#audioNine`)




// Function 1
let playUnder_the_water = function () {
    return audioOne.paused ? audioOne.play() : audioOne.pause();
}
sceneOne.addEventListener(`click`, playUnder_the_water)

// Function 2
let playforest = function () {
    return audioTwo.paused ? audioTwo.play() : audioTwo.pause();
}
sceneTwo.addEventListener(`click`, playforest)

// Function 3
let playstreamwater = function () {
    return audioThree.paused ? audioThree.play() : audioThree.pause();
}
sceneThree.addEventListener(`click`, playstreamwater)

// Function 4
let play_stream_water = function () {
    return audioFour.paused ? audioFour.play() : audioFour.pause();
}
sceneFour.addEventListener(`click`, play_stream_water)

// Function 5
let playwhitenoise = function () {
    return audioFive.paused ? audioFive.play() : audioFive.pause();
}
sceneFive.addEventListener(`click`, playwhitenoise)

// Function 6
let playdrink = function () {
    return audioSix.paused ? audioSix.play() : audioSix.pause();
}
sceneSix.addEventListener(`click`, playdrink)

// Function 7
let playmouth = function () {
    return audioSeven.paused ? audioSeven.play() : audioSeven.pause();
}
sceneSeven.addEventListener(`click`, playmouth)

// Function 8
let playkeyboard = function () {
    return audioEight.paused ? audioEight.play() : audioEight.pause();
}
sceneEight.addEventListener(`click`, playkeyboard)


// Function 9
let playstar = function () {
    return audioNine.paused ? audioNine.play() : audioNine.pause();
}
sceneNine.addEventListener(`click`, playstar)




